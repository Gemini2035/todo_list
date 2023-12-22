/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-18 10:31:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 16:59:11
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\dataArea\PartHeader.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ReactNode, useState } from "react";
import styled from "styled-components";
import SideButton from "../../sideBar/SideButton";
import HoverTips from "../../../../../utils/hoverTips";
import OptionsBox from "../../../../../utils/optionsBox";

interface PropType {
  $setSideState: (target: boolean) => void;
  $sideState: boolean;
  $title: string;
  $icon: ReactNode;
  $optionInfo: OptionItem[];
}

interface OptionItem {
  icon: ReactNode;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  optionModel?: [boolean, Function];
  themeItem?: boolean;
  printItem?: boolean;
}

const DataTitle = (props: PropType) => {
  const [optionState, setOptionState] = useState(false);
  return (
    <StyledDataTitle>
      <div className="left-part">
        {props.$sideState ? (
          props.$icon
        ) : (
          <SideButton $clickEvent={() => props.$setSideState(true)} />
        )}
        <p className="data-title">{props.$title}</p>
      </div>
      <div className="btn-container">
        <HoverTips
          $direction="topMiddle"
          $delayTime={600}
          $context="列表选项菜单"
          $innerNode={
            <div
              className="dot-btn"
              onClick={() => setOptionState(!optionState)}
            >
              <span>···</span>
            </div>
          }
        />
        <OptionsBox $stateModel={[optionState, setOptionState]} $title="列表选项" $optionInfo={props.$optionInfo} />
      </div>
    </StyledDataTitle>
  );
};

export default DataTitle;

const StyledDataTitle = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  .left-part {
    display: flex;
    align-items: center;
    padding: 6px 8px;
    height: 48px;
    & svg {
      height: 24px;
      width: auto;
    }
    .data-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-left: 8px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .btn-container {
    height: 24px;
    position: relative;
    .dot-btn {
      color: var(--ms-button-gray);
      cursor: pointer;
      span {
        font-size: 1.25rem;
        letter-spacing: 1px;
      }
    }
  }
`;
