/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-18 16:12:56
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-19 17:54:48
 * @FilePath: \todo_list\src\components\mainPart\taskItem\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { changeTask } from "../../../store/taskModule";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootStoreType, AppDispatch } from "../../../store";
import { TaskInfo } from "../../../store/taskModule/taskModule";

interface PropInfo {
  $key?: number;
  $theme?: string;
}

const TaskItem = (props: PropInfo) => {
  const taskInfo: TaskInfo = useSelector((store: RootStoreType) => store.taskReducer, shallowEqual).find(item => item.key === props.$key)!;
  const dispatch: AppDispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeState = (e: any, type: 'done' | 'mark') => {
    e.preventDefault();
    switch(type) {
      case 'done': dispatch(changeTask({key: props.$key, hasDone: !taskInfo.hasDone})); break;
      case 'mark': dispatch(changeTask({key: props.$key, isMarked: !taskInfo.isMarked})); break;
    }
  }

  return (
    <StyledTaskItem {...{$hasDone: taskInfo.hasDone, $theme: props.$theme, $isMarked: taskInfo.isMarked}} >
      <NavLink
        to={`id/${props.$key!.toString()}`}
        className={(isActive) => (isActive ? "link-item active" : "link-item")}
      >
        <div className="dot" onClick={e => changeState(e, 'done') }/>
        <div className="content">
          <p className="content-title">{taskInfo.content}</p>
          <div className="content-tags"></div>
        </div>
        <div className="mark">
          <svg
            fill="currentColor"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path
              d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </NavLink>
    </StyledTaskItem>
  );
};

export default TaskItem;

interface StyledPropInfo {
  $hasDone?: boolean,
  $theme?: string,
  $isMarked?: boolean
}

const StyledTaskItem = styled.div<StyledPropInfo>`
  width: 100%;
  .link-item {
    cursor: default;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 8px;
    padding: 0 16px;
    text-decoration: none;
    color: initial;
    .dot {
      cursor: pointer;
      position: relative;
      --dot-width: 16px;
      margin-left: 6px;
      width: var(--dot-width);
      height: var(--dot-width);
      border-radius: 50%;
      border: 1px solid;
      border-color: ${(props) => props.$theme || "var(--ms-main-blue-light)"};
      background-color: ${(props) =>
        props.$hasDone
          ? props.$theme || "var(--ms-main-blue-light)"
          : "transparent"};
      &:hover:before {
        border-color: ${props => props.$hasDone? 'var(--ms-main-white)' : 'var(--ms-main-blue-light)'};
      }
      &:before {
        content: "";
        position: absolute;
        height: 8px;
        width: 3px;
        border-right: 1px solid;
        border-bottom: 1px solid;
        border-color: ${(props) =>
          props.$hasDone
            ? "var(--ms-main-white)"
            : "transparent"};
        top: 45%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) rotate3d(0, 0, 1, 45deg);
      }
    }
    .content {
      flex: 1.1;
      padding: 16px 14px;
      .content-title {
        font-size: 0.875rem;
        font-weight: 600;
      }
      .content-tags {
        width: 100%;
      }
    }
  }
`;
