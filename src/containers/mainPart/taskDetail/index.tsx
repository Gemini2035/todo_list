/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:15:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-25 16:39:32
 * @FilePath: \todo_list\src\components\mainPart\TaskDetail.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import styled from "styled-components";
import AsideView from "../../../utils/asideView";
import OverLay from "../../../components/mainPart/OverLay";
import NameAndSteps from "./NameAndSteps";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreType } from "../../../store";
import { TaskInfo } from "../../../store/taskModule/taskModule";

interface PropType {
  $overlayTrigger: boolean;
}

const TaskDetail = (props: PropType) => {
  const [viewState, setViewState] = useState(true);
  const { id } = useParams();
  const taskInfo: TaskInfo = useSelector(
    (store: RootStoreType) =>
      store.taskReducer.find((item) => item.key?.toString() === id)!,
    shallowEqual
  );
  return (
    <>
      <AsideView
        $showModel={[viewState, setViewState]}
        $draggable
        $position="relative"
        $style={{ top: 0 }}
        $childNode={
          <StyledTaskDetail>
            <NameAndSteps
              $name={taskInfo.content || ""}
              $hasDone={taskInfo.hasDone || false}
              $steps={taskInfo.steps || []}
              $key={taskInfo.key!}
              $isMarked={taskInfo.isMarked || false}
            />
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
  padding: 0px 16px 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
