import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import TodayData from "./todayData";

interface PropType {
  $overlayTrigger: boolean;
  $sideState: boolean;
  $setSideState: (target: boolean) => void;
}

const MainArea = (props: PropType) => {
  return (
    <StyledMainArea>
      <Routes>
        <Route path="today" element={<TodayData {...props} />} />
      </Routes>
    </StyledMainArea>
  );
};

export default MainArea;

const StyledMainArea = styled.div`
  display: flex;
  align-items: start;
  background-color: #faf9f8;
  height: 100%;
  flex: 1.1;
`;
