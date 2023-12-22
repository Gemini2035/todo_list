/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-20 15:05:47
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-21 16:50:38
 * @FilePath: \todo_list\src\containers\mainPart\TaskAdd.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useState } from "react";
import StateDot from "../../utils/stateDot";
import SettingDeadTime from "../../components/mainPart/optionsList/SettingDeadTime";
import SettingRemindTime from "../../components/mainPart/optionsList/SettingRemindTime";
import SettingDuplyType from "../../components/mainPart/optionsList/SettingDuplyType";
import HoverTips from "../../utils/hoverTips";
import { TaskInfo } from "../../store/taskModule/taskModule";
import timeFormatter from "../../utils/hooks/timeFormatter";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addTask } from "../../store/taskModule";

interface PropType {
  $theme?: string;
  $addType: string;
}

const TaskAdd = (props: PropType) => {
  const dispatch: AppDispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [activeState, setActiveState] = useState(false);
  const [deadTimeState, setDeadTimeState] = useState(false);
  const [deadTimeInfo, setDeadTimeInfo] = useState(-1);
  const [remindTimeState, setRemindTimeState] = useState(false);
  const [remindTimeInfo, setRemindTimeInfo] = useState(-1);
  const [duplyTypeState, setDuplyTypeState] = useState(false);
  const [duplyTypeInfo, setDuplyTypeInfo] = useState("");

  const clickHandle = (target: number) => {
    setDeadTimeState(false);
    setRemindTimeState(false);
    setDuplyTypeState(false);
    switch (target) {
      case 0:
        setDeadTimeState(true);
        break;
      case 1:
        setRemindTimeState(true);
        break;
      case 2:
        setDuplyTypeState(true);
        break;
    }
  };
  const addSubmit = () => {
    switch (props.$addType) {
      case "today":
        addInfo.isToday = true;
        break;
      case "important":
        addInfo.isMarked = true;
    }
    console.log(addInfo);
    dispatch(addTask({ ...addInfo }));
  };
  const addInfo: TaskInfo = {
    content: taskName,
    remindMe: remindTimeInfo < 0 ? undefined : remindTimeInfo,
    deadTime: deadTimeInfo < 0 ? undefined : deadTimeInfo,
    duplyType: duplyTypeInfo ? duplyTypeInfo : undefined,
  };
  return (
    <StyledTaskAdd {...props}>
      <div className="input-container">
        {activeState ? (
          <StateDot />
        ) : (
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2.5a.5.5 0 00-1 0V9H2.5a.5.5 0 000 1H9v6.5a.5.5 0 001 0V10h6.5a.5.5 0 000-1H10V2.5z"></path>
          </svg>
        )}
        <input
          className={activeState ? "active" : undefined}
          type="text"
          placeholder="添加任务"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onFocus={() => setActiveState(true)}
          onBlur={() => setActiveState(false)}
        />
      </div>
      {activeState && (
        <div className="options-btn">
          <div className="options-box">
            <>
              <HoverTips
                $direction="topMiddle"
                $context="添加截止日期"
                $delayTime={600}
                $innerNode={
                  <div
                    onClick={() => clickHandle(0)}
                    className="box-item deadtime"
                  >
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    {deadTimeInfo > 0 && (
                      <p>{timeFormatter(deadTimeInfo, "breif")} 到期</p>
                    )}
                  </div>
                }
              />
              <SettingDeadTime
                $showState={deadTimeState}
                $setShowState={setDeadTimeState}
                $setResult={setDeadTimeInfo}
                $couldDelete={deadTimeInfo > 0}
              />
            </>
            <>
              <HoverTips
                $direction="topMiddle"
                $context="提醒"
                $delayTime={600}
                $innerNode={
                  <div
                    className="box-item remind"
                    onClick={() => clickHandle(1)}
                  >
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2a5.92 5.92 0 015.98 5.36l.02.22V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.17a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.15a1.5 1.5 0 001.36 1.34l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    {remindTimeInfo > 0 && (
                      <p>{timeFormatter(remindTimeInfo, "breif")} 到期</p>
                    )}
                  </div>
                }
              />
              <SettingRemindTime
                $showState={remindTimeState}
                $setShowState={setRemindTimeState}
                $setResult={setRemindTimeInfo}
                $couldDelete={remindTimeInfo > 0}
              />
            </>
            <>
              <HoverTips
                $direction="topMiddle"
                $context="重复"
                $delayTime={600}
                $innerNode={
                  <div
                    className="box-item remind"
                    onClick={() => clickHandle(2)}
                  >
                    <svg
                      fill="currentColor"
                      aria-hidden="true"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 6.67a.5.5 0 01.3.1l.08.07.01.02A5 5 0 0113.22 15L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6a4 4 0 003.11-6.52.5.5 0 01.39-.81zm-4.85-4.02a.5.5 0 01.63-.06l.07.06 2.5 2.5.06.07a.5.5 0 010 .56l-.06.07-2.5 2.5-.07.06a.5.5 0 01-.56 0l-.07-.06-.06-.07a.5.5 0 010-.56l.06-.07L13.28 6h-.14L13 6H7a4 4 0 00-3.1 6.52c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 016.77 5h6.52l-1.65-1.65-.06-.07a.5.5 0 01.06-.63z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    {duplyTypeInfo && <p>{duplyTypeInfo}</p>}
                  </div>
                }
              />
              <SettingDuplyType
                $showState={duplyTypeState}
                $setShowState={setDuplyTypeState}
                $setResult={setDuplyTypeInfo}
                $couldDelete={duplyTypeInfo ? true : false}
              />
            </>
          </div>
          <button
            className={`add-btn ${taskName ? undefined : "disabled"}`}
            onMouseDown={() => addSubmit()}
            disabled={taskName ? false : true}
          >
            添加
          </button>
        </div>
      )}
    </StyledTaskAdd>
  );
};

export default TaskAdd;

interface StylePropType {
  $theme?: string;
}

const StyledTaskAdd = styled.div<StylePropType>`
  background-color: var(--ms-main-white);
  box-shadow: 0px 0.3px 0.9px rgba(0, 0, 0, 0.1),
    0px 1.6px 3.6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 95%;
  margin: 0 auto;
  .input-container {
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 52px;
    svg {
      margin-left: 6px;
      fill: ${(props) =>
        props.$theme ? props.$theme : "var(--ms-main-blue-light)"};
    }
    input {
      border: none;
      background-color: transparent;
      padding: 16px 14px;
      outline: none;
      flex: 1.1;
      &::placeholder {
        font-size: 0.875rem;
        font-weight: 600;
        color: ${(props) =>
          props.$theme ? props.$theme : "var(--ms-main-blue-light)"};
      }
      &.active::placeholder {
        color: var(--ms-black);
      }
    }
  }
  .options-btn {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background-color: var(--ms-main-bg-light);
    .options-box {
      flex: 1.1;
      display: flex;
      align-items: center;
      cursor: default;
      .box-item {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        border-radius: 5px;
        border: 1px solid var(--ms-drag-line-gray);
        background-color: var(--ms-main-white);
        padding: 2px 8px;
        &:hover {
          background-color: var(--ms-button-hover);
        }
      }
    }
  }
  .add-btn {
    padding: 8px;
    background-color: var(--ms-main-white);
    outline: none;
    border: 1px solid var(--ms-drag-line-gray);
    color: var(--ms-main-blue-light);
    font-size: 0.75rem;
    font-weight: 800;
    &.disabled {
      color: var(--ms-drag-line-gray);
      cursor: not-allowed;
    }
  }
`;
