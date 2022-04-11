import {Command} from 'commander'
const program = new Command()
import {createFile} from './lib/core/commander'
createFile()
program.parse(process.argv)