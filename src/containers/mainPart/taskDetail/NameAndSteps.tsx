/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-22 17:19:41
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-25 16:37:21
 * @FilePath: \todo_list\src\containers\mainPart\NameAndSteps.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
import styled from "styled-components";
import StateDot from "../../../utils/stateDot";
import MarkedIcon from "../../../utils/markedIcon";
import HoverTips from "../../../utils/hoverTips";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { changeTask } from "../../../store/taskModule";

interface PropType {
  $name: string;
  $hasDone: boolean;
  $isMarked: boolean;
  $steps: { content: string; hasDone: boolean }[];
  $key: number;
}

const NameAndSteps = (props: PropType) => {
  const dispatch: AppDispatch = useDispatch();
  const [nextInput, setNextInput] = useState("");
  const [addInputState, setAddInputState] = useState(false);
  const clickSubmit = <T,>(
    type: "changeName" | "mark" | "changeStep" | "changeState",
    content: T
  ) => {
    if (type === "changeName")
      dispatch(changeTask({ key: props.$key, content: content as string }));
    else if (type === "changeState")
      dispatch(changeTask({ key: props.$key, hasDone: content as boolean }));
    else if (type === "mark")
      dispatch(changeTask({ key: props.$key, isMarked: content as boolean }));
    else if (type === "changeStep") {
      {
        dispatch(
          changeTask({
            key: props.$key,
            steps: content as { content: string; hasDone: boolean }[],
          })
        );
      }
    }
  };
  return (
    <StyledNameAndSteps>
      <div className="name-item">
        <div
          className="task-state"
          onClick={() => clickSubmit<boolean>("changeState", !props.$hasDone)}
        >
          <StateDot $state={props.$hasDone} />
        </div>
        <input
          key={props.$key}
          defaultValue={props.$name}
          className={`task-input ${props.$hasDone ? "done" : undefined}`}
          onBlur={(e) => clickSubmit<string>("changeName", e.target.value)}
        />
        <div onClick={() => clickSubmit<boolean>("mark", !props.$isMarked)}>
          <MarkedIcon {...props} />
        </div>
      </div>
      {props.$steps.map((item, index) => (
        <div className="name-item" key={index}>
          <div
            onClick={() => {
              const steps = [...props.$steps];
              steps.splice(index, 1, {
                content: steps[index].content,
                hasDone: !steps[index].hasDone,
              });

              clickSubmit("changeStep", steps);
            }}
          >
            <StateDot $state={item.hasDone} />
          </div>
          <input
            key={props.$key}
            defaultValue={item.content}
            className={`task-input ${item.hasDone ? "done" : undefined}`}
            onBlur={(e) => {
              const steps = [...props.$steps];
              steps.splice(index, 1, {
                content: e.target.value,
                hasDone: steps[index].hasDone,
              });
              clickSubmit("changeStep", steps);
            }}
          />
          <HoverTips
            $direction="topMiddle"
            $context="删除步骤"
            $delayTime={600}
            $innerNode={
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const steps = [...props.$steps];
                  steps.splice(index, 1);
                  clickSubmit("changeStep", steps);
                }}
              >
                x
              </p>
            }
          />
        </div>
      ))}
      <div className="input-item">
        {addInputState ? (
          <StateDot />
        ) : (
          <svg
            fill="currentColor"
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5a.5.5 0 00-1 0V9H2.5a.5.5 0 000 1H9v6.5a.5.5 0 001 0V10h6.5a.5.5 0 000-1H10V2.5z"
              fill="currentColor"
            ></path>
          </svg>
        )}
        <input
          onFocus={() => setAddInputState(true)}
          onBlur={() => setAddInputState(false)}
          key={props.$key}
          value={nextInput}
          type="text"
          className="input"
          placeholder={props.$steps.length ? "下一步" : "添加步骤"}
          onChange={(e) => setNextInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() !== "enter") return;
            const steps = [...props.$steps];
            steps.push({ content: nextInput, hasDone: false });
            clickSubmit("changeStep", steps);
            setNextInput("");
          }}
        />
      </div>
    </StyledNameAndSteps>
  );
};

export default NameAndSteps;

const StyledNameAndSteps = styled.div`
  border-radius: 10px;
  background-color: var(--ms-main-white);
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;
  .name-item {
    display: flex;
    align-items: center;
    padding: 16px;
    .task-input {
      padding: 0 16px;
      flex: 1.1;
      outline: none;
      border: none;
      background-color: transparent;
      font-size: 0.875rem;
      font-weight: 600;
      &.done {
        text-decoration: line-through;
      }
    }
  }
  .input-item {
    display: flex;
    align-items: center;
    padding: 16px;
    .input {
      padding: 0 16px;
      outline: none;
      border: none;
      background-color: transparent;
      &:focus::placeholder {
        color: var(--ms-main-blue-light);
      }
    }
  }
`;
