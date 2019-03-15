import * as fs from 'fs';

const pack = JSON.parse(fs.readFileSync('./package.json').toString());

export default [{
  input: 'source/index.js',
  external: pack.dependencies || [],
  output: {
    file: 'index.js',
    name: pack.name,
    format: 'umd'
  }
}];