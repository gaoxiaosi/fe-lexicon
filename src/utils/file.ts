import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import chalk from 'chalk'

import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { moduleMap } from './config.js'

const resolvePath = (filePath: string) => path.resolve(__dirname, filePath)
const chalkGreen = (msg: string) => console.log(chalk.green(msg))
const chalkRed = (msg: string) => console.log(chalk.red(msg))

export const convert = () => {
  let allData = [], dataList = [];
  moduleMap.forEach((module, key) => {
    let list = JSON.parse(readFileSync(resolvePath(`../../data/${key}.json`), 'utf-8'));
    allData.push({
      module,
      list
    })
    dataList = dataList.concat(list);
  })
  let repeats = dataList.filter((item, index) => dataList.indexOf(item) !== index)
  if (repeats.length === 0) {
    // 将数据写入sougou.txt
    writeFileSync(resolvePath('../../data/sougou.txt') , dataList.join('\n'));
    chalkGreen('搜狗词库：已转换成功，可打开搜狗进行更新！');
    // 将数据汇总到all.json文件
    writeFileSync(resolvePath('../../data/all.json'), JSON.stringify(allData))
    chalkGreen('本地词库：已汇总成功，可打开网页进行查看！');
  } else {
    chalkRed(`ERROR！转换异常，有重复项：${repeats}`);
  }
}
