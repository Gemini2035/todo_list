/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-14 15:15:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-27 09:19:00
 * @FilePath: \todo_list\src\components\mainPart\TaskDetail.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect } from "react";
import styled from "styled-components";
import AsideView from "../../../utils/asideView";
import OverLay from "../../../components/mainPart/OverLay";
import NameAndSteps from "./NameAndSteps";
import GroupOrList from "./GroupOrList";
import TagsSetting from "./TagsSetting";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { RootStoreType, AppDispatch } from "../../../store";
import { TaskInfo } from "../../../store/taskModule/taskModule";
import FileGroup from "./FileGroup";
import TipsInput from "./TipsInput";
import timeFormatter from "../../../utils/hooks/timeFormatter";
import HoverTips from "../../../utils/hoverTips";
import { deleteTask } from "../../../store/taskModule";

interface PropType {
  $overlayTrigger: boolean;
}

const TaskDetail = (props: PropType) => {
  const dispatch: AppDispatch = useDispatch();
  const [viewState, setViewState] = useState(true);
  const { id } = useParams();
  const taskInfo: TaskInfo = useSelector(
    (store: RootStoreType) =>
      store.taskReducer.find((item) => item.key?.toString() === id)!,
    shallowEqual
  );
  const navigate = useNavigate();
  useEffect(() => {
    setViewState(true);
  }, [id]);
  return (
    <>
      <AsideView
        $showModel={[viewState, setViewState]}
        $draggable
        $position="relative"
        $style={{ top: 0 }}
        $childNode={
          <StyledTaskDetail>
            <div className="scroll-area">
              <NameAndSteps
                $name={taskInfo?.content || ""}
                $hasDone={taskInfo?.hasDone || false}
                $steps={taskInfo?.steps || []}
                $key={taskInfo?.key || 0}
                $isMarked={taskInfo?.isMarked || false}
              />
              <GroupOrList
                key={taskInfo?.key + "1"}
                $key={taskInfo?.key || 0}
                $isToday={taskInfo?.isToday || false}
                $deadTime={taskInfo?.deadTime || 0}
                $duplyType={taskInfo?.duplyType || ""}
                $remindMe={taskInfo?.remindMe || 0}
              />
              <TagsSetting
                key={taskInfo?.key + "2"}
                $key={taskInfo?.key || 0}
                $tags={taskInfo?.classify || []}
              />
              <FileGroup />
              <TipsInput
                key={taskInfo?.key + "3"}
                $key={taskInfo?.key || 0}
                $lastEditTime={taskInfo?.lastEdit || 0}
                $tips={taskInfo?.tips || ''}
              />
            </div>
            <div className="bottom-area">
              <HoverTips
                $context="隐藏任务详情"
                $direction="topMiddle"
                $delayTime={600}
                $innerNode={
                  <svg
                    onClick={() => setViewState(false)}
                    fill="currentColor"
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.18 10.5l-1 .87a.5.5 0 10.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 10-.66.76l1 .87H5.5a.5.5 0 000 1h3.68zM16 16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12zm1-2a1 1 0 01-1 1h-3V5h3a1 1 0 011 1v8zm-5-9v10H4a1 1 0 01-1-1V6a1 1 0 011-1h8z"
                      fill="currentColor"
                    ></path>
                  </svg>
                }
              />
              <p>创建于 {timeFormatter(taskInfo?.key || 0)}</p>
              <HoverTips
                $context="删除任务"
                $direction="topMiddle"
                $delayTime={600}
                $innerNode={
                  <svg
                    onClick={() => {
                      dispatch(deleteTask(taskInfo?.key || 0));
                      navigate(-1);
                    }}
                    fill="currentColor"
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 4h3a1.5 1.5 0 00-3 0zm-1 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-1.2 10.34A3 3 0 0112.27 18H7.73a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zM5.74 15.23A2 2 0 007.73 17h4.54a2 2 0 001.99-1.77L15.44 5H4.56l1.18 10.23zM8.5 7.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zM12 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"
                      fill="currentColor"
                    ></path>
                  </svg>
                }
              />
            </div>
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
  height: 100%;
  .scroll-area {
    padding: 0px 16px 0px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    height: 90%;
  }
  .bottom-area {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    p {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--ms-button-gray);
    }
  }
`;
