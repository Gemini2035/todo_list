/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-26 15:07:50
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-26 15:37:58
 * @FilePath: \todo_list\src\containers\mainPart\taskDetail\TipsInput.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import styled from "styled-components";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { changeTask } from "../../../store/taskModule";
import timeFormatter from "../../../utils/hooks/timeFormatter";

interface PropType {
  $tips: string;
  $key: number;
  $lastEditTime: number;
}

const TipsInput = (props: PropType) => {
  const [inputContent, setInputContent] = useState(props.$tips);
  const dispatch: AppDispatch = useDispatch()
  return (
    <StyledTipsInput>
      <input
        type="text"
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onBlur={() => dispatch(changeTask({key: props.$key, tips: inputContent}))}
        placeholder="添加备注"
      />
      <p>最后更新于 {timeFormatter(props.$lastEditTime, 'breif')} </p>
    </StyledTipsInput>
  );
};

export default TipsInput;

const StyledTipsInput = styled.div`
  width: 90%;
  border-radius: 5px;
  background-color: var(--ms-main-white);
  margin-top: 16px;
  padding: 16px;
  input {
    border: none;
    background-color: transparent;
    outline: none;
    padding: 8px 0px;
  }
  p {
    margin-top: 8px;
    font-size: 0.875rem;
    font-weight: 600;
  }
`;
