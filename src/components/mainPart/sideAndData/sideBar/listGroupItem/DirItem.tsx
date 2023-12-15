import { useState } from "react";
import styled from "styled-components";
import { ItemInfo } from "../../../../../store/listGroupModule/listGroupModule";
import ListItem from "./ListItem";

interface PropType {
  $name: string;
  $path: string;
  $child?: ItemInfo[];
  $lengthArray?: number[];
}

const DirItem = (props: PropType) => {
  const [openDir, setOpenDir] = useState(false);
  return (
    <StyledDirItem>
      <div className="group-title" onClick={() => setOpenDir(!openDir)}>
        {!openDir && (
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
        )}
        <p className="group-name">{props.$name}</p>
        <p className={openDir ? "arrow down" : "arrow"}>{">"}</p>
      </div>
      <div className="list-content">
      {openDir && (props.$child && props.$child.length ? (
      <div>
        111
      </div>
      ) : (
        <ListItem $name="拖到此处来添加列表" $path="" $prevent $staicStyle />
      ))}
      </div>
    </StyledDirItem>
  );
};

export default DirItem;

const StyledDirItem = styled.div`
  * {
    transition: 0.3s ease-in-out;
  }
  padding: 12px 24px;
  font-size: 0.9rem;
  .group-title {
    display: flex;
    align-items: center;
    cursor: default;
    .group-name {
      margin-left: 16px;
      letter-spacing: 1px;
    }
    .arrow {
      margin-left: auto;
      &.down {
        transform: rotate3d(0, 0, 1, 90deg);
      }
    }
  }
  .list-content {
    padding-left: 16px;
  }

  &:hover {
    background-color: var(--ms-hover-gray-light);
  }
`;
