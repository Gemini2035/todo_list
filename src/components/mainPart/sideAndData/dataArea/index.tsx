import styled from "styled-components";
import { Route, Routes, useParams } from "react-router-dom";
import TaskDetail from "../../../../containers/mainPart/taskDetail";
import TodayData from "./todayData";

interface PropType {
  $overlayTrigger: boolean;
  $sideState: boolean;
  $setSideState: (target: boolean) => void;
}

const MainArea = (props: PropType) => {
  const { type } = useParams<{ type: string }>();
  return (
    <StyledMainArea>
      {(() => {
        switch (type) {
          case "today":
            return <TodayData {...props} />;
        }
      })()}
      <Routes>
        <Route path="id/:id" element={<TaskDetail {...props} />} />
      </Routes>
    </StyledMainArea>
  );
};

export default MainArea;

const StyledMainArea = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
  background-color: #faf9f8;
`;
