/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:53:02
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 16:47:17
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\sideBar\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import AsideView from "../../../../utils/asideView";
import OverLay from "../../OverLay";
import SideBarHeader from "./SideBarHeader";
import LinkList from "./LinkList";
import ListGroup from "../../../../containers/mainPart/ListGroup";

interface PropType {
  $overlayTrigger: boolean;
  $sideState: boolean;
  $setSideState: (target: boolean) => void;
}

const SideBar = (props: PropType) => {
  const SideBarContent = (
    <StyledSideBar>
      <SideBarHeader $clickEvent={props.$setSideState} />
      <div className="main-content">
        <LinkList />
        <hr className="divider" />
        <ListGroup />
      </div>
    </StyledSideBar>
  );

  return (
    <>
      <AsideView
        $width={290}
        $showButton={false}
        $position={props.$overlayTrigger ? "absolute" : undefined}
        $style={{ top: 0, zIndex: 1, animation: "none" }}
        $showModel={[props.$sideState, props.$setSideState]}
        $childNode={SideBarContent}
      />
      {props.$sideState && props.$overlayTrigger && (
        <OverLay $clickEvent={props.$setSideState} />
      )}
    </>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  display: flex;
  min-width: 290px;
  flex-direction: column;
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--ms-main-white);
  .main-content {
    height: calc(100% - 96px);
    overflow-x: hidden;
    overflow-y: auto;
    .divider {
      margin: 9px 16px;
      height: 1px;
      background-color: #edebe9;
    }
  }
`;
