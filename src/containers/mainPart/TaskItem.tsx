/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-18 16:12:56
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-20 15:04:26
 * @FilePath: \todo_list\src\components\mainPart\taskItem\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { changeTask } from "../../store/taskModule";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootStoreType, AppDispatch } from "../../store";
import { TaskInfo } from "../../store/taskModule/taskModule";
import HoverTips from "../../utils/hoverTips";
import timeFormatter from "../../utils/hooks/timeFormatter";
import StateDot from "../../utils/stateDot";
import timeCompare from "../../utils/hooks/timeCompare";

interface PropInfo {
  $key?: number;
  $theme?: string;
}

const TaskItem = (props: PropInfo) => {
  const taskInfo: TaskInfo = useSelector(
    (store: RootStoreType) => store.taskReducer,
    shallowEqual
  ).find((item) => item.key === props.$key)!;
  const isOvertime = timeCompare(
    new Date().getTime(),
    taskInfo.deadTime || Infinity
  );
  const dispatch: AppDispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeState = (e: any, type: "done" | "mark") => {
    e.preventDefault();
    switch (type) {
      case "done":
        dispatch(changeTask({ key: props.$key, hasDone: !taskInfo.hasDone }));
        break;
      case "mark":
        dispatch(changeTask({ key: props.$key, isMarked: !taskInfo.isMarked }));
        break;
    }
  };

  return (
    <StyledTaskItem
      {...{
        $hasDone: taskInfo.hasDone,
        $theme: props.$theme,
        $isMarked: taskInfo.isMarked,
      }}
    >
      <NavLink to={`id/${props.$key!.toString()}`} className="link-item" end>
        <div className="dot" onClick={(e) => changeState(e, "done")}>
          <StateDot $state={taskInfo.hasDone} />
        </div>
        <div className="content">
          <p className="content-title">{taskInfo.content}</p>
          <div className="content-tags">
            <div className="tag-item">
              <span>{taskInfo.group ? taskInfo.group : "任务"}</span>
              <span className="divider-dot">·</span>
            </div>
            {taskInfo.steps && taskInfo.steps.length && (
              <div className="tag-item">
                <span>{`第 ${
                  taskInfo.steps.filter((item) => item.hasDone).length
                } 步, 共 ${taskInfo.steps.length} 步`}</span>
                <span className="divider-dot">·</span>
              </div>
            )}
            {taskInfo.deadTime && (
              <div className={`tag-item ${isOvertime ? "overtime" : ""}`}>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path d="M5.25 9a.75.75 0 100-1.5.75.75 0 000 1.5zM6 10.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8 9a.75.75 0 100-1.5A.75.75 0 008 9zm.75 1.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7zM3 6h10v5.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5V6zm1.5-3h7c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3z"></path>
                </svg>
                <span style={{ marginLeft: "3px" }}>
                  {timeFormatter(taskInfo.deadTime, "breif")}
                </span>
                {isOvertime && <span style={{ marginLeft: "3px" }}>到期</span>}
              </div>
            )}
            {taskInfo.duplyType && (
              <div className="tag-item">
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9 5.24a3.99 3.99 0 01-2.7 6.75L10 12H6.7l1.16 1.15c.17.17.19.44.05.64l-.05.07a.5.5 0 01-.64.05l-.07-.05-2-2a.5.5 0 01-.06-.64l.06-.07 2-2a.5.5 0 01.76.63l-.05.07L6.7 11H10a3 3 0 003-2.82V8a3 3 0 00-.87-2.1.5.5 0 01.69-.72l.07.06zM8.77 2.09l.07.05 2 2 .06.08a.5.5 0 010 .56l-.05.07-2 2-.08.06a.5.5 0 01-.56 0l-.07-.05-.06-.07a.5.5 0 010-.57l.06-.07L9.29 5H6a3 3 0 00-3 2.82V8c0 .82.33 1.56.86 2.1a.5.5 0 01-.71.7A4 4 0 015.8 4h3.5L8.14 2.85l-.06-.07a.5.5 0 01.7-.7z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="divider-dot">·</span>
              </div>
            )}
            {taskInfo.remindMe && (
              <div className="tag-item">
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M8 2a4.5 4.5 0 00-4.5 4.5v2.4l-.96 2.41A.5.5 0 003 12h3a2 2 0 104 0h3a.5.5 0 00.46-.69l-.96-2.4V6.5A4.5 4.5 0 008 2zm1 10a1 1 0 01-1 1 1 1 0 01-1-1h2zM4.5 6.5a3.5 3.5 0 117 0V9c0 .06.01.12.04.18l.72 1.82H3.74l.72-1.82A.5.5 0 004.5 9V6.5z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>{timeFormatter(taskInfo.remindMe, "breif")}</span>
                <span className="divider-dot">·</span>
              </div>
            )}
            {taskInfo.tips && (
              <div className="tag-item">
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h3.67c.66 0 1.3-.26 1.77-.73l3.33-3.33c.47-.47.73-1.1.73-1.77V4.5A2.5 2.5 0 0011.5 2h-7zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V8h-2.5A2.5 2.5 0 008 10.5V13H4.5A1.5 1.5 0 013 11.5v-7zm6 8.25V10.5c0-.83.67-1.5 1.5-1.5h2.25a1.5 1.5 0 01-.19.23l-3.33 3.33a1.5 1.5 0 01-.23.2z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="divider-dot">·</span>
              </div>
            )}
            {taskInfo.fileList && taskInfo.fileList.length && (
              <div className="tag-item">
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                >
                  <path
                    d="M3.26 8.7l4.6-4.59a2.5 2.5 0 013.53 3.54l-5.3 5.3a1 1 0 01-1.42-1.41l5.3-5.3a.5.5 0 00-.7-.71l-5.3 5.3a2 2 0 102.82 2.83l5.3-5.3A3.5 3.5 0 007.16 3.4L2.55 8a.5.5 0 10.7.7z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span>已附加的文件</span>
                <span className="divider-dot">·</span>
              </div>
            )}
            {taskInfo.classify && taskInfo.classify.length && (
              <div className="tag-item">
                {taskInfo.classify.map((item) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: item.key,
                      }}
                      key={item.key}
                    >
                      <span className="classify-dot" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <HoverTips
          $direction="topMiddle"
          $context={taskInfo.isMarked ? "删除重要性。" : "将任务标记为重要。"}
          $delayTime={600}
          $innerNode={
            <div className="mark" onClick={(e) => changeState(e, "mark")}>
              <svg
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"></path>
              </svg>
            </div>
          }
        />
      </NavLink>
    </StyledTaskItem>
  );
};

export default TaskItem;

interface StyledPropInfo {
  $hasDone?: boolean;
  $theme?: string;
  $isMarked?: boolean;
}

const StyledTaskItem = styled.div<StyledPropInfo>`
  width: 95%;
  margin: 0 auto;
  .link-item {
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 0 16px;
    text-decoration: none;
    color: initial;
    background-color: var(--ms-main-white);
    box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1),
      0px 1.6px 3.6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .content {
      flex: 1.1;
      padding: 8px 14px;
      .content-title {
        font-size: 0.875rem;
        font-weight: 600;
        text-decoration: ${(props) =>
          props.$hasDone ? "line-through" : "initial"};
      }
      .content-tags {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .tag-item {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          color: var(--ms-tips-gray);
          .divider-dot {
            font-weight: 800;
            margin: 0 6px;
            scale: 2;
          }
          .classify-dot {
            display: inline-block;
            --dot-width: 5px;
            width: var(--dot-width);
            height: var(--dot-width);
            border-radius: 50%;
            border: 1px solid;
            margin: 1px 4px 0;
          }
          &.overtime {
            svg {
              fill: var(--ms-error-red);
            }
            span {
              color: var(--ms-error-red);
            }
          }
        }
      }
    }
    .mark {
      svg {
        stroke: ${(props) =>
          props.$theme ? props.$theme : "var(--ms-main-blue-light)"};
        fill: ${(props) =>
          props.$isMarked
            ? props.$theme
              ? props.$theme
              : "var(--ms-main-blue-light)"
            : "transparent"};
      }
    }
    &.active {
      background-color: #eff6fc;
    }
    &:hover {
      background-color: var(--ms-button-hover);
    }
    &.active:hover {
      background-color: #eff6fc;
    }
  }
`;
