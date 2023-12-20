/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-19 10:11:30
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-20 15:40:48
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\dataArea\todayData\TodayDataList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreType } from "../../store";
import TaskItem from "./TaskItem";

interface ActiveInfo {
  name: string;
  optionModel: [boolean, (target: boolean) => void];
}

interface PropType {
  $groupActive?: ActiveInfo;
  $sortActive?: ActiveInfo;
}

const TodayData = (props: PropType) => {
  const taskData = useSelector(
    (store: RootStoreType) => store.taskReducer,
    shallowEqual
  );

  return (
    <StyledTodayData>
      
      {taskData.map((item) => {
        return <TaskItem key={item.key} $key={item.key}/>;
      })}
    </StyledTodayData>
  );
};

export default TodayData;

const StyledTodayData = styled.div`
  flex: 1.1;
  width: 100%;
  overflow-x: auto;
  overflow-y: auto;
`;
