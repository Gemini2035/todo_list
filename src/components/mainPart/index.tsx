/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:09:07
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 15:09:20
 * @FilePath: \todo_list\src\components\mainPart\SideAndData.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import SideBar from "./sideAndData/sideBar";
import { useState } from "react";
import MainArea from "./sideAndData/dataArea";

interface PropType {
  $overlayTrigger: boolean;
}

const SideAndData = (props: PropType) => {
  const [sideState, setSideState] = useState(false);
  return (
    <StyledSideAndData>
      <SideBar
        $overlayTrigger={props.$overlayTrigger}
        $sideState={sideState}
        $setSideState={setSideState}
      />
      <MainArea
        $overlayTrigger={props.$overlayTrigger}
        $sideState={sideState}
        $setSideState={setSideState}
      />
    </StyledSideAndData>
  );
};

export default SideAndData;

const StyledSideAndData = styled.div`
  display: flex;
  align-items: start;
  flex: 1.1;
  background-color: red
`;