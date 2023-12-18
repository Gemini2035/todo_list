/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 09:59:16
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 17:42:05
 * @FilePath: \todo_list\src\store\taskModule\timeFormatter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const weekDic = ["日", "一", "二", "三", "四", "五", "六"];
const monthDic = [
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
  "十",
  "十一",
  "十二",
];

export default (unixTime: number) => {
  try {
    const date = new Date(unixTime);
    const nowDay = new Date();
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDate();
    const W = date.getDay();
    const NY = nowDay.getFullYear();
    return `${Y === NY ? "" : (Y + '年')}${monthDic[M]}月 ${D}日星期${weekDic[W]}`;
  } catch {
    return `未知日期`;
  }
};
