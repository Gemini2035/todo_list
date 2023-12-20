/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-20 15:05:47
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-20 17:57:33
 * @FilePath: \todo_list\src\containers\mainPart\TaskAdd.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useState } from "react";
import StateDot from "../../utils/stateDot";
import SettingDeadTime from '../../components/mainPart/optionsList/settingDeadTime'
import { TaskInfo } from "../../store/taskModule/taskModule";

interface PropType {
  $theme?: string;
  $addType: string;
}

const TaskAdd = (props: PropType) => {
  const [activeState, setActiveState] = useState(false);
  const [deadTimeState, setDeadTimeState] = useState(true);
  const [deadTimeInfo, setDeadTimeInfo] = useState(-1);
  const addInfo: TaskInfo = {};
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
          type="text"
          placeholder="添加任务"
          value={addInfo.content}
          onChange={(e) => (addInfo.content = e.target.value)}
        />
      </div>
      <div className="options-box">
        <div >
            {deadTimeInfo}
            <SettingDeadTime $showState={deadTimeState} $setShowState={setDeadTimeState} $setResult={setDeadTimeInfo} />
        </div>
      </div>
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
    }
  }
`;
