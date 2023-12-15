/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-15 16:03:25
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-15 17:58:28
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\sideBar\listGroupItem\ListItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

interface PropType {
  $path: string;
  $name: string;
  $length?: number;
  $icon?: ReactNode;
  $staicStyle?: boolean;
  $prevent?: boolean;
}

const ListItem = (props: PropType) => {
  return (
    <StyledListItem>
      <NavLink
        to={props.$path}
        className={({ isActive }) => {
          let className = "link-item";
          if (isActive) className += " active";
          if (props.$staicStyle) className += " static";
          return className;
        }}
        onClick={(e) => {
          if (props.$prevent) e.preventDefault();
        }}
      >
        {props.$icon}
        <p className="link-name">{props.$name}</p>
        {props.$length !== 0 && <p className="task-length">{props.$length}</p>}
      </NavLink>
    </StyledListItem>
  );
};

export default ListItem;

const StyledListItem = styled.div`
  * {
    transition: none;
  }
  position: relative;
  width: 100%;
  .link-item {
    padding: 12px 24px;
    font-size: 0.9rem;
    display: flex;
    text-decoration: none;
    color: var(--ms-black);
    .link-name {
      margin-left: 16px;
      letter-spacing: 1px;
    }
    .task-length {
      font-weight: 800;
      margin-left: auto;
    }
    &.active {
      background-color: rgb(239, 246, 252);
      font-weight: 600;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background-color: var(--ms-main-blue-light);
        width: 2px;
        height: 100%;
      }
    }
    &.static {
      color: #666;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        background-color: gray;
        width: 2px;
        height: 100%;
      }
      &:hover {
       background-color: var(--ms-main-bg-light);
      }
    }
  }
`;
