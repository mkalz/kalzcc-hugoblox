import fs from 'node:fs';
import path from 'node:path';
import Cite from 'citation-js';

const root = 'content/publications';
const outputPath = 'migration-reports/apa-preview.md';

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
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
  let value = html
    .replace(/<(i|em)[^>]*>/gi, '*')
    .replace(/<\/(i|em)>/gi, '*')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  value = decodeEntities(value);

  return value
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:)])/g, '$1')
    .replace(/([(])\s+/g, '$1')
    .trim();
}

function getDoi(frontmatter, data) {
  if (data.DOI) {
    return String(data.DOI)
      .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')
      .trim();
  }

  const match = frontmatter.match(
    /^\s{4}doi:\s*["']?([^"'\n]+)["']?\s*$/m
  );

  return match ? match[1].trim() : '';
}

const directories = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name));

const output = [
  '# APA 7 preview',
  '',
  'Automatically generated from `cite.bib`. No publication files were changed.',
  '',
];

let count = 0;

for (const directory of directories) {
  const publicationDir = path.join(root, directory.name);
  const bibPath = path.join(publicationDir, 'cite.bib');
  const indexPath = path.join(publicationDir, 'index.md');

  if (!fs.existsSync(bibPath) || !fs.existsSync(indexPath)) {
    continue;
  }

  const bibtex = fs.readFileSync(bibPath, 'utf8');
  const frontmatter = fs.readFileSync(indexPath, 'utf8');
  const citation = new Cite(bibtex);
  const data = citation.data[0];

  const html = citation.format('bibliography', {
    format: 'html',
    template: 'apa',
    lang: 'en-US',
  });

  let apa = htmlToMarkdown(html);
  const doi = getDoi(frontmatter, data);

  if (doi && !apa.toLowerCase().includes('doi.org/')) {
    apa = `${apa} https://doi.org/${doi}`;
  }

  output.push(`## ${directory.name}`);
  output.push('');
  output.push(apa);
  output.push('');

  count += 1;
}

fs.writeFileSync(outputPath, output.join('\n'), 'utf8');

console.log(`${count} APA-Zitationen erzeugt.`);
console.log(`Vorschau: ${outputPath}`);