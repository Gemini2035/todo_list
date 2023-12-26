/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-20 16:53:22
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-26 10:20:42
 * @FilePath: \todo_list\src\components\mainPart\optionsList\settingDeadTime.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import timeFormatter from "../../../utils/hooks/timeFormatter";
import OptionsBox from "../../../utils/optionsBox";

interface PropType {
  $setResult: (target: number) => void;
  $showState: boolean;
  $setShowState: (target: boolean) => void;
  $couldDelete: boolean;
  $style?: CSSProperties
}

const DeadTime = (props: PropType) => {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const optionsList = [
    {
      icon: (
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
            d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-3v-1h3c.83 0 1.5-.67 1.5-1.5V7H4v7.5c0 .83.67 1.5 1.5 1.5h3v1h-3A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zM11 9a1 1 0 11-2 0 1 1 0 012 0zm.88 5.07a.5.5 0 01-.7.06l-.68-.56v3.93a.5.5 0 11-1 0v-3.93l-.68.56a.5.5 0 01-.64-.76l1.5-1.25a.5.5 0 01.64 0l1.5 1.25c.21.17.24.49.06.7z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "今天",
      optionModel: useState(false),
      rightText: timeFormatter(new Date().getTime(), "getWeekDay"),
    },
    {
      icon: (
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
            d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "明天",
      optionModel: useState(false),
      rightText: timeFormatter(
        new Date().getTime() + 24 * 60 * 60 * 1000,
        "getWeekDay"
      ),
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.5 3C15.8807 3 17 4.11929 17 5.5V9.59971C16.6832 9.43777 16.3486 9.30564 16 9.20703V7H4V14.5C4 15.3284 4.67157 16 5.5 16H9.20703C9.30564 16.3486 9.43777 16.6832 9.59971 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5C3 4.11929 4.11929 3 5.5 3H14.5ZM14.5 4H5.5C4.67157 4 4 4.67157 4 5.5V6H16V5.5C16 4.67157 15.3284 4 14.5 4Z"
            fill="#212121"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM17.4497 14.8713L15.682 16.6391C15.4867 16.8343 15.1701 16.8343 14.9749 16.6391C14.7796 16.4438 14.7796 16.1272 14.9749 15.932L16.3891 14.5178L14.9749 13.1036C14.7796 12.9083 14.7796 12.5917 14.9749 12.3964C15.1701 12.2012 15.4867 12.2012 15.682 12.3964L17.4497 14.1642C17.645 14.3595 17.645 14.6761 17.4497 14.8713ZM12.1464 12.3964C11.9512 12.5917 11.9512 12.9083 12.1464 13.1036L13.5607 14.5178L12.1464 15.932C11.9512 16.1272 11.9512 16.4438 12.1464 16.6391C12.3417 16.8343 12.6583 16.8343 12.8536 16.6391L14.6213 14.8713C14.8166 14.6761 14.8166 14.3595 14.6213 14.1642L12.8536 12.3964C12.6583 12.2012 12.3417 12.2012 12.1464 12.3964Z"
            fill="#212121"
          ></path>
        </svg>
      ),
      name: "下周",
      optionModel: useState(false),
      rightText: "周一",
    },
    {
      icon: (
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
            d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4zm9 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.5-6.5a.5.5 0 011 0V14h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "选择日期",
      optionModel: useState(false),
      needTopItem: true,
    },
    {
      icon: <></>,
      name: "删除截止日期",
      optionModel: useState(false),
      needTopItem: true,
      style: {color: 'var(--ms-error-red)'}
    },
  ];
  const activeIndex = optionsList.findIndex((item) => item.optionModel[0]);
  useEffect(() => {
    let deadTime = 0;
    switch (activeIndex) {
      case -1:
        return;
      case 0:
        deadTime = new Date(
          new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000 - 1
        ).getTime();
        break;
      case 1:
        deadTime =
          new Date().setHours(0, 0, 0, 0) + 2 * 24 * 60 * 60 * 1000 - 1;
        break;
      case 2:
        deadTime = new Date(
          new Date().setDate(
            new Date().getDate() + ((1 + 7 - new Date().getDay()) % 7)
          )
        ).setHours(0, 0, 0, 0);
        break;
      case 3:
        try { datePickerRef.current!.showPicker() }
        catch { /* empty */ }
        return;
      case 4:
        props.$setResult(-1);
    }
    props.$setResult(deadTime);
    console.log(new Date(deadTime).toLocaleString());
  }, [activeIndex, props]);
  return (
    <div style={props.$style}>
      <OptionsBox
        $stateModel={[props.$showState, props.$setShowState]}
        $title="截止"
        $clearOldState
        $optionInfo={optionsList.slice(0, optionsList.length - (props.$couldDelete? 0 : 1))}
      />
      {optionsList[3].optionModel[0] && (
        <StyledDatePicker>
          <input
            type="date"
            defaultValue={new Date().getDate()}
            min={new Date().toLocaleString()}
            ref={datePickerRef}
            id="datePicker"
            className="date-picker"
            onChange={e => {props.$setResult(e.target.valueAsNumber || -1)}}
          />
        </StyledDatePicker>
      )}
    </div>
  );
};

export default DeadTime;


// TODO: 优化细节
const StyledDatePicker = styled.div`
.date-picker {
  display: none;
}
`


