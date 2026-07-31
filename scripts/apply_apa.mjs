import fs from 'node:fs';
import path from 'node:path';
import Cite from 'citation-js';

const root = 'content/publications';

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, number) =>
      String.fromCodePoint(Number(number))
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, number) =>
      String.fromCodePoint(parseInt(number, 16))
    );
}

function htmlToMarkdown(html) {
  return decodeEntities(
    html
      .replace(/<(i|em)[^>]*>/gi, '*')
      .replace(/<\/(i|em)>/gi, '*')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  )
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:)])/g, '$1')
    .replace(/([(])\s+/g, '$1')
    .trim();
}

function asText(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  return value === undefined || value === null
    ? ''
    : String(value);
}

function yamlValue(value) {
  return JSON.stringify(asText(value));
}

function replacePublicationField(frontmatter, field, value) {
  if (!value) {
    return frontmatter;
  }

  const pattern = new RegExp(
    `^(  ${field}:)[^\\n]*$`,
    'm'
  );

  if (!pattern.test(frontmatter)) {
    return frontmatter;
  }

  return frontmatter.replace(
    pattern,
    `$1 ${yamlValue(value)}`
  );
}

function getExistingDoi(frontmatter) {
  const match = frontmatter.match(
    /^\s{4}doi:\s*["']?([^"'\n]+)["']?\s*$/m
  );

  return match ? match[1].trim() : '';
}

function normalizeDoi(value) {
  return asText(value)
    .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
    .trim();
}

function removeExistingApa(frontmatter) {
  frontmatter = frontmatter.replace(
    /^apa_citation:\s*>-\s*\n(?:^[ \t]+.*\n?)*/m,
    ''
  );

  frontmatter = frontmatter.replace(
    /^apa_citation:\s*.*\n?/m,
    ''
  );

  return frontmatter;
}

function insertApa(frontmatter, apa) {
  const line = `apa_citation: ${JSON.stringify(apa)}\n\n`;

  const publicationBlock =
    /^(publication:\n(?: {2}[^\n]*\n)+)/m;

  if (publicationBlock.test(frontmatter)) {
    return frontmatter.replace(
      publicationBlock,
      `$1\n${line}`
    );
  }

  return `${frontmatter.trimEnd()}\n\n${line}`;
}

const directories = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

let changed = 0;

for (const directory of directories) {
  const publicationDir = path.join(root, directory.name);
  const indexPath = path.join(publicationDir, 'index.md');
  const bibPath = path.join(publicationDir, 'cite.bib');

  if (!fs.existsSync(indexPath) || !fs.existsSync(bibPath)) {
    continue;
  }

  const original = fs.readFileSync(indexPath, 'utf8');
  const bibtex = fs.readFileSync(bibPath, 'utf8');
  const citation = new Cite(bibtex);
  const data = citation.data[0];

  const html = citation.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
  });

  let apa = htmlToMarkdown(html);

  const doi =
    normalizeDoi(data.DOI) ||
    getExistingDoi(original);

  if (doi && !apa.toLowerCase().includes('doi.org/')) {
    apa += ` https://doi.org/${doi}`;
  }

  const firstDelimiter = original.indexOf('---');
  const secondDelimiter = original.indexOf(
    '---',
    firstDelimiter + 3
  );

  if (firstDelimiter === -1 || secondDelimiter === -1) {
    console.log(`ÜBERSPRUNGEN: ${indexPath}`);
    continue;
  }

  const prefix = original.slice(0, firstDelimiter + 3);
  let frontmatter = original.slice(
    firstDelimiter + 3,
    secondDelimiter
  );
  const body = original.slice(secondDelimiter);

  frontmatter = replacePublicationField(
    frontmatter,
    'name',
    data['container-title']
  );
  frontmatter = replacePublicationField(
    frontmatter,
    'volume',
    data.volume
  );
  frontmatter = replacePublicationField(
    frontmatter,
    'issue',
    data.issue
  );
  frontmatter = replacePublicationField(
    frontmatter,
    'pages',
    data.page
  );
  frontmatter = replacePublicationField(
    frontmatter,
    'publisher',
    data.publisher
  );

  if (doi) {
    frontmatter = frontmatter.replace(
      /^(\s{4}doi:)[^\n]*$/m,
      `$1 ${JSON.stringify(doi)}`
    );
  }

  frontmatter = removeExistingApa(frontmatter);
  frontmatter = insertApa(frontmatter, apa);

  const updated =
    `${prefix}${frontmatter}${body}`;

  const backup =
    `${indexPath}.pre-apa-migration`;

  if (!fs.existsSync(backup)) {
    fs.writeFileSync(backup, original, 'utf8');
  }

  fs.writeFileSync(indexPath, updated, 'utf8');
  console.log(`AKTUALISIERT: ${indexPath}`);
  changed += 1;
}

console.log(`\n${changed} Publikationen aktualisiert.`);