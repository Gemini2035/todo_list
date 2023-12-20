/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-20 14:34:27
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-20 14:43:09
 * @FilePath: \todo_list\src\utils\hooks\timeCompare.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default (aDate: number, bDate: number) => {
    const date = new Date(bDate);
    const nowDay = new Date(aDate);
    const Y = date.getFullYear();
    const M = date.getMonth();
    const D = date.getDate();
    const BY = nowDay.getFullYear();
    const BM = nowDay.getMonth();
    const BD = nowDay.getDate();
    if (BY > Y) return true;
    if (BY < Y) return false;
    if (BM > M) return true;
    if (BM < M) return false;
    if (BD > D) return true;
}