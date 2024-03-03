import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import text from './source-files/grid-main.component';
import * as fs from 'fs';
import * as path from 'path';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function gridWithActionsSchematics(_options: any): Rule {
  const sourceFolderPath = './src/grid-with-actions-schematics/source-files';
  const fileExtensions = ['.ts', '.scss', '.html'];

  console.log('Hello from your new schematic!');

  console.log('test', readFilesWithExtensions(sourceFolderPath, fileExtensions));


  console.log('Hello from your new schematic!');

  return (tree: Tree, _context: SchematicContext) => {
    // tree.create(_options.name || 'hello', 'world');
    tree.create(_options.directory, 'fileContents');
    return tree;
  };
}

function readFilesWithExtensions(folderPath: string, extensions: string[]): string[] {
  const files: string[] = [];
  const items = fs.readdirSync(folderPath);

  items.forEach(item => {
      const filePath = path.join(folderPath, item);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
          // Recursively read files in subfolders
          files.push(...readFilesWithExtensions(filePath, extensions));
      } else {
          const fileExt = path.extname(filePath).toLowerCase();
          if (extensions.includes(fileExt)) {
              // Read file content if its extension matches
              const fileContent = fs.readFileSync(filePath, 'utf-8');
              files.push(fileContent);
          }
      }
  });

  return files;
}