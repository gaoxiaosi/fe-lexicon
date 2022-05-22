const fs = require('fs');

const reg = /##[^\n]*\n(.*?)(?=\n##?\s|$)/gm

/** 
 * @description 将README.md的空格隔开的词汇转换成每行一个词汇的txt文件
 * @returns 生成txt文件，用于搜狗词库的上传
*/
const convert = () => {
  let data = fs.readFileSync('./README.md', 'utf-8');
  let found = data.match(reg);
  let arr = found.map(item => item.split('\n')[1].replace(/\s/g, '\n') + '\n');
  let result = arr.reduce((pre, cur) =>  pre + cur)
  fs.writeFileSync('sougou.text', result, 'utf-8')
}

module.exports = convert
