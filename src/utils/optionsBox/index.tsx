/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-18 16:18:05
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 15:08:40
 * @FilePath: \todo_list\src\components\mainPart\optionsBox\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

interface PropType {
  $stateModel: [boolean, (target: boolean) => void];
  $title: string;
  $boxStyle?: CSSProperties
  $optionInfo: OptionItem[];
  $clearOldState?: boolean;
}

interface OptionItem {
  icon: ReactNode;
  name: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  optionModel?: [boolean, Function];
  themeItem?: boolean;
  printItem?: boolean;
  needTopItem?: boolean;
  childNode?: ReactNode;
  style?: CSSProperties;
  rightText?: string;
}

const OptionsBox = (props: PropType) => {
  return (
    <>
      {props.$stateModel[0] && (
        <StyledOptionsBox>
          <div className="options-container" style={props.$boxStyle}>
            <div className="options-title">{props.$title}</div>
            {[...props.$optionInfo].map((item) => {
              return (
                <div key={item.name}>
                  {item.needTopItem && <hr />}
                  <div
                    className="options-item"
                    key={item.name}
                    style={item.style}
                    onClick={() => {
                      if (item.printItem) alert("打印功能");
                      else {
                        if (props.$clearOldState)
                          props.$optionInfo.forEach((item) =>
                            item.optionModel![1](false)
                          );
                        item.optionModel![1](true);
                      }
                      props.$stateModel[1](false);
                    }}
                  >
                    {item.icon}
                    <p style={{flex: 1.1}}>{item.name}</p>
                    {item.rightText && <p>{item.rightText}</p>}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mask" onClick={() => props.$stateModel[1](false)} />
        </StyledOptionsBox>
      )}
    </>
  );
};

export default OptionsBox;

const StyledOptionsBox = styled.div`
  .options-container {
    position: absolute;
    left: 50%;
    z-index: 1;
    transform: translate3d(-50%, 0, 0);
    background-color: var(--ms-main-white);
    min-width: 200px;
    max-width: 290px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.1) 0;
    .options-title {
      display: flex;
      margin-bottom: 6px;
      justify-content: center;
      align-items: center;
      padding: 8px 8px 12px 8px;
      border-bottom: 1px solid #edebe9;
      color: var(--ms-black);
      font-weight: 600;
      font-size: 0.875rem;
      background-color: var(--ms-main-white);
      cursor: default;
    }
    .options-item {
      display: flex;
      align-items: center;
      min-height: 38px;
      padding: 0 16px 0 12px;
      font-size: 0.875rem;
      margin-bottom: 5px;
      p {
        padding: 0 4px;
        margin-left: 5px;
      }
      &:hover {
        cursor: pointer;
        background-color: var(--ms-button-hover);
      }
    }
  }
  .mask {
    position: fixed;
    z-index: 0.5;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }
`;
