import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
// import text from './source-files/grid-main.component';
import * as fs from 'fs';
import * as path from 'path';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function gridWithActionsSchematics(_options: any): Rule {

  // const dirContents = fs.readdirSync('./src/grid-with-actions-schematics/source-files/grid-main.component.ts');
  // const dirContents = fs.readdirSync('./src/grid-with-actions-schematics/source-files');
  // console.log(dirContents);

  const fileContents: string = fs.readFileSync(
    path.join('./src/grid-with-actions-schematics/source-files', 'grid-main.component.ts'),
    {
      encoding: 'utf-8',
    },
  );

  console.log(fileContents);

  console.log('Hello from your new schematic!')

  return (tree: Tree, _context: SchematicContext) => {
    // tree.create(_options.name || 'hello', 'world');
    tree.create(_options.directory, fileContents);
    return tree;
  };
}
