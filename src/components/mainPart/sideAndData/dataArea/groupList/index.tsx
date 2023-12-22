/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-22 14:21:08
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 15:42:49
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\dataArea\listItem\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { TaskInfo } from "../../../../../store/taskModule/taskModule";
import { useState } from "react";
import TaskItem from "../../../../../containers/mainPart/TaskItem";

interface PropType {
  $data: TaskInfo[];
  $title?: string;
}

const GroupList = (props: PropType) => {
  const [expandState, setExpandState] = useState(true);
  return (
    <StyledGroupList>
      <div
        className="classify-title"
        onClick={() => setExpandState(!expandState)}
      >
        <div className={`arrow ${expandState ? "reverse" : undefined}`} />
        <p className="group-title">{props.$title}</p>
        <p className="group-length">{props.$data.length}</p>
      </div>
      {!expandState && <hr />}
      {expandState && (
        <>
          {[...props.$data].map((item) => {
            return <TaskItem key={item.key} $key={item.key} />;
          })}
        </>
      )}
    </StyledGroupList>
  );
};

export default GroupList;

const StyledGroupList = styled.div`
  cursor: pointer;
  .classify-title {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    .arrow {
      --arrow-size: 5px;
      width: var(--arrow-size);
      height: var(--arrow-size);
      border-right: 1.5px solid var(--ms-black);
      border-bottom: 1.5px solid var(--ms-black);
      transform: rotate3d(0, 0, 1, -45deg);
      margin-right: 5px;
      &.reverse {
        transform: rotate3d(0, 0, 1, 45deg);
      }
    }
  }
  hr {
    width: 95%;
    margin: auto;
    border-color: var(--ms-drag-line-gray);
  }
  p {
    margin: 0 5px;
    font-size: 0.875rem;
  }
  .group-title {
    font-weight: 800;
  }
  .group-length {
    color: var(--ms-tips-gray);
  }
`;
