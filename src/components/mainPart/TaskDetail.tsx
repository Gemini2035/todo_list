/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:15:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 13:49:50
 * @FilePath: \todo_list\src\components\mainPart\TaskDetail.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

interface PropType {
  $overlayTrigger: boolean;
}

const TaskDetail = (props: PropType) => {
  return <StyledTaskDetail>{props.$overlayTrigger ? 1 : 12}</StyledTaskDetail>;
};

export default TaskDetail;

const StyledTaskDetail = styled.div`
  display: none;
`;
