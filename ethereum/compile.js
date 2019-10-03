const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const idkWtImDoingMk1Path = path.resolve(__dirname,'contracts', 'IdkWtImDoingMk1.sol');
const source = fs.readFileSync(idkWtImDoingMk1Path, 'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
