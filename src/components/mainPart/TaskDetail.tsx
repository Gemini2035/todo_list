/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:15:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 16:57:45
 * @FilePath: \todo_list\src\components\mainPart\TaskDetail.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import styled from "styled-components";
import AsideView from "../../utils/asideView";
import OverLay from "./OverLay";

interface PropType {
  $overlayTrigger: boolean;
}

const TaskDetail = (props: PropType) => {
  const [viewState, setViewState] = useState(true);
  return (
    <>
      <AsideView
        $showModel={[viewState, setViewState]}
        $draggable
        $position="relative"
        $style={{ top: 0 }}
        $childNode={
          <StyledTaskDetail>
            111jaslkdfjalkfjalkdjfaldsjfalkdfjlsdjflasjflk
          </StyledTaskDetail>
        }
      />
      {props.$overlayTrigger && (
        <OverLay $clickEvent={() => setViewState(false)} />
      )}
      
    </>
  );
};

export default TaskDetail;

const StyledTaskDetail = styled.div`
  /* display: none; */
`;
