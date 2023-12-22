import styled from "styled-components";
import { useState } from "react";
import DataTitle from "../dataTitle";
import HoverTips from "../../../../../utils/hoverTips";
import OptionsBox from "../../../../../utils/optionsBox";
import AsideView from "../../../../../utils/asideView";
import AdviceView from "./AdviceView";
import TodayDataList from "../../../../../containers/mainPart/TodayDataArea";
import timeFormatter from "../../../../../utils/hooks/timeFormatter";
import TaskAdd from "../../../../../containers/mainPart/TaskAdd";

const titleIcon = (
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
      d="M10 2c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 12a4 4 0 100-8 4 4 0 000 8zm0-1a3 3 0 110-6 3 3 0 010 6zm7.5-2.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zM10 16c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-6.5-5.5a.5.5 0 000-1H2.46a.5.5 0 000 1H3.5zm.65-6.35c.2-.2.5-.2.7 0l1 1a.5.5 0 11-.7.7l-1-1a.5.5 0 010-.7zm.7 11.7a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1zm11-11.7a.5.5 0 00-.7 0l-1 1a.5.5 0 00.7.7l1-1a.5.5 0 000-.7zm-.7 11.7a.5.5 0 00.7-.7l-1-1a.5.5 0 00-.7.7l1 1z"
      fill="currentColor"
    ></path>
  </svg>
);

interface PropType {
  $setSideState: (target: boolean) => void;
  $sideState: boolean;
}

const TodayData = (props: PropType) => {
  const [reverseFlag, setReverseFlag] = useState(false);
  const optionsList = [
    {
      name: "打印此列表",
      optionModel: useState(false),
      printItem: true,
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
            d="M5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5V5h.5A2.5 2.5 0 0118 7.5v5c0 .83-.67 1.5-1.5 1.5H15v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 15.5V14H3.5A1.5 1.5 0 012 12.5v-5A2.5 2.5 0 014.5 5H5v-.5zM6 5h8v-.5a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5V5zm-1 8v-1.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5V13h1.5a.5.5 0 00.5-.5v-5c0-.83-.67-1.5-1.5-1.5h-11C3.67 6 3 6.67 3 7.5v5c0 .28.22.5.5.5H5zm1.5-2a.5.5 0 00-.5.5v4c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-7z"
            fill="currentColor"
          ></path>
        </svg>
      ),
    },
  ];
  const [sortOptionState, setSortOptionState] = useState(false);
  const sortOptionsList = [
    {
      name: "重要性",
      optionModel: useState(false),
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
            d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9zm.9.44L8.07 7.25a1 1 0 01-.75.55L3 8.43l3.12 3.04a1 1 0 01.3.89l-.75 4.3 3.87-2.03a1 1 0 01.93 0l3.86 2.03-.74-4.3a1 1 0 01.29-.89L17 8.43l-4.32-.63a1 1 0 01-.75-.55L10 3.35z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      key: 0,
    },
    {
      name: "到期日期",
      optionModel: useState(false),
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
      key: 1,
    },
    {
      name: "字母顺序",
      optionModel: useState(false),
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
            d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      key: 2,
    },
    {
      name: "创建日期",
      optionModel: useState(false),
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
            d="M14.5 3A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5h3.7c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      key: 3,
    },
  ];
  const [groupOptionState, setGroupOptionState] = useState(false);
  const groupOptionsList = [
    {
      name: "类别",
      optionModel: useState(false),
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
            d="M14 7a1 1 0 100-2 1 1 0 000 2zm-2.87-5a2 2 0 00-1.43.58L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 002.83 0l6.63-6.63A2 2 0 0018 8.98V4.03a2 2 0 00-1.99-2L11.12 2zm-.72 1.3a1 1 0 01.71-.3l4.9.03a1 1 0 01.99 1v4.95a1 1 0 01-.29.7l-6.63 6.64a1 1 0 01-1.41 0l-4.95-4.95a1 1 0 010-1.41l6.68-6.67z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      key: 0,
    },
  ];
  const [adviceState, setAdviceState] = useState(false);
  return (
    <>
      <StyledTodayData>
        <div className="title-container">
          <DataTitle
            {...{
              ...props,
              ...{
                $title: "我的一天",
                $icon: titleIcon,
                $optionInfo: optionsList,
              },
            }}
          />
          <div className="right-btn">
            <div className="option-container">
              <HoverTips
                $direction="topMiddle"
                $context="排序"
                $delayTime={600}
                $innerNode={
                  <div
                    className="head-option-item"
                    onClick={() => {
                      setGroupOptionState(false);
                      setSortOptionState(!sortOptionState);
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
                        d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p>排序</p>
                  </div>
                }
              />
              <OptionsBox
                $clearOldState
                $stateModel={[sortOptionState, setSortOptionState]}
                $title="排序依据"
                $optionInfo={sortOptionsList}
              />
            </div>
            <div className="option-container">
              <HoverTips
                $direction="topMiddle"
                $context="组"
                $delayTime={600}
                $innerNode={
                  <div
                    className="head-option-item"
                    onClick={() => {
                      setSortOptionState(false);
                      setGroupOptionState(!groupOptionState);
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
                        d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5zm-8 2a.5.5 0 01.5.41v7.09a.5.5 0 01-1 .09V6.5c0-.28.22-.5.5-.5z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p>组</p>
                  </div>
                }
              />
              <OptionsBox
                $clearOldState
                $stateModel={[groupOptionState, setGroupOptionState]}
                $title="分组依据"
                $optionInfo={groupOptionsList}
              />
            </div>
            <div className="option-container">
              <HoverTips
                $direction="topMiddle"
                $context="建议"
                $delayTime={600}
                $innerNode={
                  <div
                    className="head-option-item"
                    onClick={() => setAdviceState(!adviceState)}
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
                        d="M10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 00-.15.2l-.02.09-.94 3.92a1.84 1.84 0 01-1.67 1.38l-.15.01H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.93-3.91a.6.6 0 00-.17-.3A6.32 6.32 0 014 8.04L4 7.8v-.2A5.91 5.91 0 0110 2zm2.04 13H7.96l.31 1.33.03.1c.1.3.38.52.71.56l.12.01h1.81a.86.86 0 00.75-.53l.03-.1.32-1.37zM10 3a4.92 4.92 0 00-4.98 4.41L5 7.63V8c.06 1.3.68 2.52 1.9 3.67.18.17.32.4.4.64l.05.15.37 1.54h4.57l.38-1.61.05-.16c.09-.21.22-.4.39-.56C14.38 10.47 15 9.18 15 7.8A4.9 4.9 0 0010 3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p>建议</p>
                  </div>
                }
              />
            </div>
          </div>
          <div className="time">{timeFormatter(new Date().getTime())}</div>
        </div>
        <div className="data-area">
          <div className="active-box">
            {sortOptionsList.find((item) => item.optionModel[0]) && (
              <div className="sort-option">
                <HoverTips
                  $context="反转排列顺序"
                  $direction="topMiddle"
                  $delayTime={600}
                  $innerNode={
                    <div
                      onClick={() => setReverseFlag(!reverseFlag)}
                      className={`arrow ${reverseFlag ? "reverse" : undefined}`}
                    />
                  }
                />
                <p className="option-name">
                  按{sortOptionsList.find((item) => item.optionModel[0])?.name}
                  排序
                </p>
                <HoverTips
                  $context="删除排序顺序选项"
                  $direction="topMiddle"
                  $delayTime={600}
                  $innerNode={
                    <p
                      onClick={() =>
                        sortOptionsList.find((item) =>
                          item.optionModel[1](false)
                        )
                      }
                    >
                      x
                    </p>
                  }
                />
              </div>
            )}
            {groupOptionsList.find((item) => item.optionModel[0]) && (
              <div className="group-option">
                <p>
                  按{groupOptionsList.find((item) => item.optionModel[0])!.name}
                  分组
                </p>
                <HoverTips
                  $context="删除按组分组选项"
                  $direction="topMiddle"
                  $delayTime={600}
                  $innerNode={
                    <p
                      onClick={() =>
                        groupOptionsList.find((item) =>
                          item.optionModel[1](false)
                        )
                      }
                    >
                      x
                    </p>
                  }
                />
              </div>
            )}
          </div>
          <TaskAdd $addType="today" />
          <TodayDataList
            $reverse={reverseFlag}
            $groupActive={groupOptionsList.find((item) => item.optionModel[0])}
            $sortActive={sortOptionsList.find((item) => item.optionModel[0])}
          />
        </div>
      </StyledTodayData>
      <AsideView
        $showModel={[adviceState, setAdviceState]}
        $showButton
        $style={{ minWidth: "360px" }}
        $childNode={<AdviceView />}
      />
    </>
  );
};

export default TodayData;

const StyledTodayData = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 24px;
    position: relative;
    .right-btn {
      display: flex;
      align-items: center;
      .option-container {
        position: relative;
        margin-left: 4px;
        .head-option-item {
          display: flex;
          font-size: 0.875rem;
          letter-spacing: 1px;
          align-items: center;
          color: var(--ms-button-gray);
          border-radius: 5px;
          cursor: pointer;
          width: 76px;
          height: 32px;
          justify-content: center;
          p {
            margin-left: 4px;
          }
          &:hover {
            background-color: var(--ms-main-white);
          }
        }
      }
    }
    .time {
      font-size: 0.75rem;
      padding-left: 40px;
      color: var(--ms-button-gray);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .data-area {
    display: flex;
    flex-direction: column;
    height: 100%;
    .active-box {
      display: flex;
      align-items: center;
      margin-left: auto;
      padding: 8px 16px;
      cursor: default;
      .sort-option {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
      }
      .group-option {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
      }
      .arrow {
        --arrow-size: 5px;
        width: var(--arrow-size);
        height: var(--arrow-size);
        border-right: 1.5px solid var(--ms-black);
        border-bottom: 1.5px solid var(--ms-black);
        transform: rotate3d(0, 0, 1, 45deg);
        margin-right: 5px;
        &.reverse {
          transform: rotate3d(0, 0, 1, 225deg);
        }
      }
      p {
        margin: 0 5px;
        font-weight: 600;
      }
    }
  }
`;
