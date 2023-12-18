/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 11:41:58
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 14:49:19
 * @FilePath: \todo_list\src\components\MainPart.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import SideAndData from "./mainPart/index";
import TaskDetail from "./mainPart/TaskDetail";

const MainPart = () => {
  const [overlayTrigger, setOverlayTrigger] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleResize = (e: any) => {
      if (e.target.innerWidth < 1200) setOverlayTrigger(true);
      else setOverlayTrigger(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <StyledMainPart>
        <SideAndData $overlayTrigger={overlayTrigger} />
        <TaskDetail $overlayTrigger={overlayTrigger} />
      </StyledMainPart>
    </BrowserRouter>
  );
};

export default MainPart;

const StyledMainPart = styled.div`
  display: flex;
  height: calc(100vh - var(--headpart-height));
  width: 100vw;
  position: relative;
`;
