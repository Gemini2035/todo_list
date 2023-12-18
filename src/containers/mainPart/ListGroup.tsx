/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-15 13:45:05
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-18 13:47:20
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
          <div key={item.path}>
            {item.type === "list" ? (
              <ListItem
                $name={item.name}
                $path={item.path}
                $length={getLength(item.path)}
              />
            ) : (
              <DirItem
              $name={item.name}
              $path={item.path}
              $child={item.child}
               />
            )}
          </div>
        );
      })}
    </StyledListGroup>
  );
};

export default ListGroup;

const StyledListGroup = styled.div`
  width: 100%;
`;
