/*
 * @Author: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @Date: 2023-12-12 08:07:09
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 09:48:05
 * @FilePath: /todo_list/src/components/headerPart/functionBox/Help.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import HelpButton from "../../../containers/headerPart/HelpButton";

const Help = () => {
  return (
    <StyledHelp>
      <h2 className="title">帮助</h2>
      <a
        href="https://support.microsoft.com/zh-cn/todo"
        target="_blank"
        className="learn-more"
      >
        <span>了解详细信息</span>
      </a>
      <HelpButton />
    </StyledHelp>
  );
};

export default Help;

const StyledHelp = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 16px;
  .title {
    font-size: 1.25rem;
    line-height: 65px;
    padding: 3px 0 0 0;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: default;
    height: 65px;
  }
  .learn-more {
    text-decoration: none;
    color: var(--ms-main-blue-light);
    font-size: 0.875rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
