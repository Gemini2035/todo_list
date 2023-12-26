/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-25 17:32:29
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-26 14:18:26
 * @FilePath: \todo_list\src\containers\mainPart\taskDetail\GroupOrList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { TaskInfo } from "../../../store/taskModule/taskModule";
import { useDispatch } from "react-redux";
import { changeTask } from "../../../store/taskModule";
import { AppDispatch } from "../../../store";
import timeFormatter from "../../../utils/hooks/timeFormatter";
import DeadTime from "../../../components/mainPart/optionsList/SettingDeadTime";
import { useState, useEffect, useCallback } from "react";
import DuplyType from "../../../components/mainPart/optionsList/SettingDuplyType";
import RemindTime from "../../../components/mainPart/optionsList/SettingRemindTime";

interface PropType {
  $key: number;
  $isToday: boolean;
  $remindMe: number;
  $deadTime?: number;
  $duplyType: string;
}

const GroupOrList = (props: PropType) => {
  const [deadTimeState, setDeadTimeState] = useState(false);
  const [deadTimeInfo, setDeadTimeInfo] = useState(props.$deadTime);
  const [remindMeState, setRemindMeState] = useState(false);
  const [remindMeInfo, setRemindMeInfo] = useState(props.$remindMe);
  const [duplyTypeState, setDuplyTypeState] = useState(false);
  const [duplyTypeInfo, setDuplyTypeInfo] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const clickHandle = useCallback((content: TaskInfo) => dispatch(changeTask(content)), [dispatch])
  useEffect (() => {
    clickHandle({
        key: props.$key,
        deadTime: deadTimeInfo,
        duplyType: duplyTypeInfo,
        remindMe: remindMeInfo
    })
  }, [clickHandle, deadTimeInfo, duplyTypeInfo, props.$key, remindMeInfo])
  return (
    <StyledGroupOrList>
      <div
        className={`group-item today ${props.$isToday ? "active" : undefined}`}
        onClick={() => {
          if (props.$isToday) return;
          clickHandle({ key: props.$key, isToday: true });
        }}
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
            d="M10 2c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 12a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6zm7.5-2.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zM10 16c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-6.5-5.5a.5.5 0 000-1H2.46a.5.5 0 000 1H3.5zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 11-.7.7l-1-1a.5.5 0 010-.7zm.7 11.7a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1zm11-11.7a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l1-1a.5.5 0 000-.7zm-.7 11.7a.5.5 0 00.7-.7l-1-1a.5.5 0 00-.7.7l1 1z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="description">
          {props.$isToday ? "已" : ""}添加到'我的一天'
        </p>

        {props.$isToday && (
          <p
            className="close-btn"
            onClick={() => clickHandle({ key: props.$key, isToday: false })}
          >
            x
          </p>
        )}
      </div>
      <div
        className={`group-item remind ${remindMeInfo ? "active" : undefined}`}
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
        <p className="description" onClick={() => {
            setDeadTimeState(false);
            setDuplyTypeState(false);
            setRemindMeState(true);
            }}>
          {remindMeInfo ? timeFormatter(remindMeInfo, "breif") : "提醒我"}
        </p>
        <RemindTime
          $couldDelete
          $showState={remindMeState}
          $setResult={setRemindMeInfo}
          $setShowState={setRemindMeState}
          $style={{
            position: "relative",
            transform: "translate3d(-100px, 10px, 0)",
          }}
        />
        {remindMeInfo !== 0 && (
          <p
            className="close-btn"
            onClick={() => {
              setRemindMeState(false);
              setRemindMeInfo(0);
            }}
          >
            x
          </p>
        )}
      </div>
      <div
        className={`group-item dead-time ${
          deadTimeInfo ? "active" : undefined
        }`}
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
        <p className="description" onClick={() => {
            setDuplyTypeState(false);
            setRemindMeState(false);
            setDeadTimeState(true);
            }}>
          {deadTimeInfo ? timeFormatter(deadTimeInfo, "breif") : "添加截止日期"}
        </p>
        <DeadTime
          $couldDelete
          $showState={deadTimeState}
          $setResult={setDeadTimeInfo}
          $setShowState={setDeadTimeState}
          $style={{
            position: "relative",
            transform: "translate3d(-100px, 10px, 0)",
          }}
        />
        {deadTimeInfo !== 0 && (
          <p
            className="close-btn"
            onClick={() => {
              setDeadTimeState(false);
              setDeadTimeInfo(0);
            }}
          >
            x
          </p>
        )}
      </div>
      <div
        className={`group-item duply ${duplyTypeInfo ? "active" : undefined}`}
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
        <p className="description" onClick={() => {
            setDeadTimeState(false);
            setRemindMeState(false);
            setDuplyTypeState(true);
            }}>
          {duplyTypeInfo ? duplyTypeInfo : "重复"}
        </p>
        <DuplyType
          $couldDelete
          $showState={duplyTypeState}
          $setResult={setDuplyTypeInfo}
          $setShowState={setDuplyTypeState}
          $style={{
            position: "relative",
            transform: "translate3d(-100px, 10px, 0)",
          }}
        />
        {(duplyTypeInfo && duplyTypeInfo.length !== 0) && (
          <p
            className="close-btn"
            onClick={() => {
              setDuplyTypeState(false);
              setDuplyTypeInfo("");
            }}
          >
            x
          </p>
        )}
      </div>
    </StyledGroupOrList>
  );
};

export default GroupOrList;

const StyledGroupOrList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 16px;
  .group-item {
    cursor: default;
    padding: 16px;
    display: flex;
    align-items: center;
    color: var(--ms-black);
    background-color: var(--ms-main-white);
    svg {
      margin-left: 6px;
    }
    .description {
      flex: 1.1;
      font-size: 0.875rem;
      font-weight: 600;
      padding: 0 16px;
    }
    .close-btn {
      cursor: pointer;
    }
    &.active {
      color: var(--ms-main-blue-light);
    }
    &:hover {
        background-color: var(--ms-button-hover);
    }

    &.today {
      border-radius: 5px;
      margin-bottom: 8px;
    }
    &.remind {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &.duply {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
  }
`;
