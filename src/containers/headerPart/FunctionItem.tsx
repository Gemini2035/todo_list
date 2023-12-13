/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-06 17:03:03
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 14:41:26
 * @FilePath: \todo_list\src\containers\headerPart\FunctionItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import AsideView from "../../utils/asideView";

interface PropType {
  $icon: ReactNode;
  $asideContent: ReactNode;
  $title?: string;
  $isOpenModel: [boolean, (target: boolean, index: number) => void];
  $index: number;
  $style?: CSSProperties;
  $buttonText?: string;
}

interface StateType {
  isOpen: boolean;
}

class FunctionItem extends Component<PropType, StateType> {
  private changeOpenState = (target: boolean) => {
    this.props.$isOpenModel[1](target, this.props.$index);
    // TODO：在这里补充注销函数
    if (this.props.$index === 3) {
      console.log("Log Out");
    }
  };

  private specialRule = {
    $buttonText: "注销",
    $style: {
      height: "180px",
      width: "320px",
    },
  };

  render(): ReactNode {
    return (
      <>
        <StyledSettingContainer
          {...{ $isOpen: this.props.$isOpenModel[0] }}
          className={this.props.$isOpenModel[0] ? "active" : ""}
          title={this.props.$title}
          onClick={() =>
            this.props.$isOpenModel[1](
              !this.props.$isOpenModel[0],
              this.props.$index
            )
          }
        >
          {this.props.$icon}
        </StyledSettingContainer>
        {this.props.$index === 3 ? (
          <AsideView
            $position="fixed"
            $direction="right"
            $showButton
            $showModel={[this.props.$isOpenModel[0], this.changeOpenState]}
            $childNode={this.props.$asideContent}
            {...this.specialRule}
          />
        ) : (
          <AsideView
            $position="fixed"
            $direction="right"
            $showButton
            $showModel={[this.props.$isOpenModel[0], this.changeOpenState]}
            $childNode={this.props.$asideContent}
          />
        )}
      </>
    );
  }
}

const StyledSettingContainer = styled.div<{ $isOpen: boolean }>`
  & * {
    transition: 0.3s ease-in-out;
  }
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  cursor: pointer;
  & svg {
    height: 60%;
    width: auto;
    fill: ${(prop) => (prop.$isOpen ? "#000" : "#fff")};
  }
  &:hover {
    background-color: var(--ms-hover-blue-light);
  }

  &.active {
    background-color: var(--ms-main-bg-light);
  }
  &.active:hover {
    background-color: var(--ms-hover-blue-light);
    svg {
      fill: #fff;
    }
  }
`;

export default FunctionItem;
