const fs = require('fs');

// TODO: 处理markdown的正则，待优化
const reg = /##[^\n]*\n(.*?)(?=\n##?\s|$)/gm

/** 
 * @description 将README.md的空格隔开的词汇转换成每行一个词汇的txt文件
 * @returns 生成txt文件，用于搜狗词库的上传
*/
const convert = () => {
  let data = fs.readFileSync('./README.md', 'utf-8');
  let found = data.match(reg);
  let arr = found.reduce((pre, cur) => pre + cur.split('\n')[1] + ' ', '').split(' ');
  let repeats = arr.filter((item, index) => arr.indexOf(item) !== index);
  if (repeats.length === 0) {
    fs.writeFileSync('sougou.text', arr.join('\n'), 'utf-8');
  } else {
    throw new Error(`有重复项：${repeats}`);
  }
}

module.exports = convert
