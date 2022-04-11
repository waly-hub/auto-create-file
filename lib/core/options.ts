import {Command} from 'commander'
const program = new Command()
export const options = () => {
  program
    .version('0.0.1')
    .description('一个自动帮忙创建文件的工具')
    .option('-p --path <path>','创建文件的路径')
     

  program.parse(process.argv)
}


