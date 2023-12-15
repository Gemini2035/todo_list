/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-15 13:45:05
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-15 17:16:20
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\sideBar\ListGroup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreType } from "../../store";
import ListItem from "../../components/mainPart/sideAndData/sideBar/listGroupItem/ListItem";
import DirItem from "../../components/mainPart/sideAndData/sideBar/listGroupItem/DirItem";

// TODO: 补充拖拽交换功能
const ListGroup = () => {
  const listGroup = useSelector((store: RootStoreType) => {
    return store.listGroupReducer;
  }, shallowEqual);
  const taskData = useSelector((store: RootStoreType) => {
    return store.taskReducer;
  });
  const getLength = (keyword: string) => {
    return taskData.filter((item) => item.group === keyword).length;
  };

  return (
    <StyledListGroup>
      {listGroup.map((item) => {
        return (
          <>
            {item.type === "list" ? (
              <ListItem key={item.name}
                $name={item.name}
                $path={item.path}
                $length={getLength(item.path)}
                $icon={
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6.5a1 1 0 100-2 1 1 0 000 2zm3-1c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h11a.5.5 0 000-1h-11zm-2.5.5a1 1 0 11-2 0 1 1 0 012 0zm-1-4a1 1 0 100-2 1 1 0 000 2z"
                      fill="currentColor"
                    ></path>
                  </svg>
                }
              />
            ) : (
              <DirItem key={item.name}
              $name={item.name}
              $path={item.path}
               />
            )}
          </>
        );
      })}
    </StyledListGroup>
  );
};

export default ListGroup;

const StyledListGroup = styled.div`
  width: 100%;
`;
