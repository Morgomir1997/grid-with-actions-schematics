import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import text from './source-files/grid-main.component';
import * as fs from 'fs';
import * as path from 'path';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function gridWithActionsSchematics(_options: any): Rule {
  const sourceFolderPath = './src/grid-with-actions-schematics/source-files';
  const fileExtensions = ['.ts', '.scss', '.html'];

  return (tree: Tree, _context: SchematicContext) => {
    const files = readFilesWithExtensions(sourceFolderPath, fileExtensions);
    Object.keys(files).forEach(relativePath => {
      const fileContent = files[relativePath];
      const destinationPath = path.join(_options.directory, relativePath);
      tree.create(destinationPath, fileContent);
  });
    return tree;
  };
}

function readFilesWithExtensions(folderPath: string, extensions: string[]): { [relativePath: string]: Buffer } {
  const files: { [relativePath: string]: Buffer } = {};
  const initialSourceFolderPath = './src/grid-with-actions-schematics/source-files';

  const items = fs.readdirSync(folderPath);

  items.forEach(item => {
      const filePath = path.join(folderPath, item);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
          // Recursively read files in subfolders
          Object.assign(files, readFilesWithExtensions(filePath, extensions));
      } else {
          const fileExt = path.extname(filePath).toLowerCase();
          const fileName = path.basename(filePath);
          if (extensions.includes(fileExt) && !fileName.endsWith('.d.ts')) {
              // Calculate relative path without the 'src' folder
              const relativePath = path.relative(initialSourceFolderPath, filePath);
              files[relativePath] = fs.readFileSync(filePath);
          }
      }
  });

  return files;
}