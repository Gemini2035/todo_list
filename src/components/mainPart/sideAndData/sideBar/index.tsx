import { useState } from "react";
import styled from "styled-components";
import AsideView from "../../../../utils/asideView";
import OverLay from "../../OverLay";
import SideBarHeader from "./SideBarHeader";
import LinkList from "./LinkList";

interface PropType {
  $overlayTrigger: boolean;
}

const SideBar = (props: PropType) => {
  const [showModel, setShowModel] = useState(true);

  const SideBarContent = () => {
    return (
      <StyledSideBar>
        <SideBarHeader $clickEvent={setShowModel} />
        <LinkList />
      </StyledSideBar>
    );
  };

  return (
    <>
      <AsideView
        $width={290}
        $showButton={false}
        $position={props.$overlayTrigger ? "absolute" : undefined}
        $style={{ top: 0, zIndex: 1, animation: "none" }}
        $showModel={[showModel, setShowModel]}
        $childNode={<SideBarContent />}
      />
      {showModel && props.$overlayTrigger && (
        <OverLay $clickEvent={setShowModel} />
      )}
    </>
  );
};

export default SideBar;

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  height: 100%;
  background-color: var(--ms-main-white);
`;
