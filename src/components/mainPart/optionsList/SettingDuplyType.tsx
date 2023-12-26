/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-21 15:21:10
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-21 15:51:40
 * @FilePath: \todo_list\src\components\mainPart\optionsList\SettingDuplyType.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useRef, useState } from "react";
import OptionsBox from "../../../utils/optionsBox";
import { CSSProperties } from "styled-components";

interface PropType {
  $setResult: (target: string) => void;
  $showState: boolean;
  $setShowState: (target: boolean) => void;
  $couldDelete: boolean;
  $style?: CSSProperties
}

const DuplyType = (props: PropType) => {
  const datePickerRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
            d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-1.78 5c.44 0 .6.05.77.13.16.1.29.22.38.38.08.16.13.33.13.77v2.44c0 .44-.05.6-.13.77a.9.9 0 01-.38.38c-.16.08-.33.13-.77.13H7.28c-.44 0-.6-.05-.77-.13a.9.9 0 01-.38-.38c-.08-.16-.13-.33-.13-.77v-2.44c0-.44.05-.6.13-.77a.9.9 0 01.38-.38c.16-.08.33-.13.77-.13h5.44zm.2 1H7V13h5.98v-2.98h-.08zm.58-4a.5.5 0 01.09 1H6.5a.5.5 0 01-.09-1h7.09z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "每天",
      optionModel: useState(false),
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
            d="M6.5 6a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-7zM7 9V7h6v2H7zm10-3.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "工作日",
      optionModel: useState(false),
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
            d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-8 2a.5.5 0 01.5.41v7.09a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5zM10 6a.5.5 0 01.5.41v7.09a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5zm3.5 0a.5.5 0 01.5.41v7.09a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "每周",
      optionModel: useState(false),
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
            d="M7 11a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm2-2a1 1 0 100-2 1 1 0 000 2zm4-5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM4 7h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5V7zm1.5-3h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "每月",
      optionModel: useState(false),
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
            d="M16 4.5A2.5 2.5 0 0013.5 2h-9A2.5 2.5 0 002 4.5v9A2.5 2.5 0 004.5 16h9a2.5 2.5 0 002.5-2.5v-9zM3 6h12v7.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 013 13.5V6zm1.5-3h9c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3zM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 004.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 01-3.5 3.5H5z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      name: "每年",
      optionModel: useState(false),
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
      name: "自定义",
      optionModel: useState(false),
      needTopItem: true,
    },
    {
      icon: <></>,
      name: "删除截止日期",
      optionModel: useState(false),
      needTopItem: true,
      style: { color: "var(--ms-error-red)" },
    },
  ];
  const activeIndex = optionsList.findIndex((item) => item.optionModel[0]);
  useEffect(() => {
    let duplyType = "";
    switch (activeIndex) {
      case -1:
        return;
      case 0:
        duplyType = "每天";
        break;
      case 1:
        duplyType = "工作日";
        break;
      case 2:
        duplyType = "每周";
        break;
      case 3:
        duplyType = "每月";
        break;
      case 4:
        duplyType = "每年";
        break;
      case 5:
        try {
          datePickerRef.current!.showPicker();
        } catch {
          /* empty */
        }
        alert("有待完善");
        optionsList[5].optionModel[1](false);
        return;
      case 6:
        props.$setResult("");
    }
    props.$setResult(duplyType);
  }, [activeIndex, optionsList, props]);
  return (
    <div style={props.$style}>
      <OptionsBox
        $stateModel={[props.$showState, props.$setShowState]}
        $title="提醒"
        $clearOldState
        $optionInfo={optionsList.slice(
          0,
          optionsList.length - (props.$couldDelete ? 0 : 1)
        )}
      />
    </div>
  );
};

export default DuplyType;
