import fs from 'node:fs';
import path from 'node:path';
import Cite from 'citation-js';

const root = 'content/publications';
const directories = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(root, entry.name));

let valid = 0;
let invalid = 0;
let missing = 0;
let multiple = 0;

for (const directory of directories) {
  const bibPath = path.join(directory, 'cite.bib');
  const indexPath = path.join(directory, 'index.md');

  if (!fs.existsSync(indexPath)) {
    continue;
  }

  if (!fs.existsSync(bibPath)) {
    console.log(`FEHLT:     ${bibPath}`);
    missing += 1;
    continue;
  }

  try {
    const bibtex = fs.readFileSync(bibPath, 'utf8');
    const citation = new Cite(bibtex);

    if (citation.data.length === 0) {
      console.log(`LEER:      ${bibPath}`);
      invalid += 1;
    } else if (citation.data.length > 1) {
      console.log(
        `MEHRFACH:  ${bibPath} (${citation.data.length} Einträge)`
      );
      multiple += 1;
      valid += 1;
    } else {
      console.log(`OK:        ${bibPath}`);
      valid += 1;
    }
  } catch (error) {
    console.log(`UNGÜLTIG:  ${bibPath}`);
    console.log(`            ${error.message.split('\n')[0]}`);
    invalid += 1;
  }
}

console.log('\nZusammenfassung');
console.log(`Gültig:                 ${valid}`);
console.log(`Ungültig oder leer:     ${invalid}`);
console.log(`Mehrere Einträge:       ${multiple}`);
console.log(`Fehlende cite.bib:      ${missing}`);

if (invalid > 0) {
  process.exitCode = 1;
}