#!/usr/bin/env node

const pkg = require("../package.json");
const path = require("path")
const { Command } = require('commander');
const program = new Command();
const md2docx = require('./main');

program
  .name("md2docx")
  .description(pkg.description)
  .version(pkg.version, '-v, --version', `version`)
  .option('-o, --outputDir <string>', 'output path')
  .argument('<string>', 'Markdown File')
  .action((mdPath)=>{
    const opts = program.opts();
    md2docx.generate(path.resolve(process.cwd(),mdPath), path.resolve(process.cwd(),opts.outputDir))
  })

program.parse();
