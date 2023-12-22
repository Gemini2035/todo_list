/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-19 10:11:30
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 15:46:11
 * @FilePath: \todo_list\src\components\mainPart\sideAndData\dataArea\todayData\TodayDataList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useSelector, shallowEqual } from "react-redux";
import { RootStoreType } from "../../store";
import TaskItem from "./TaskItem";
import { ClassifyKey } from "../../store/taskModule/taskModule";
import GroupList from "../../components/mainPart/sideAndData/dataArea/groupList";

interface ActiveInfo {
  name: string;
  key: number;
}

interface PropType {
  $groupActive?: ActiveInfo;
  $sortActive?: ActiveInfo;
  $reverse: boolean;
}

const TodayData = (props: PropType) => {
  const taskData = useSelector((store: RootStoreType) => {
    const initData = store.taskReducer;
    if (!props.$sortActive) return store.taskReducer;
    let result = [];
    switch (props.$sortActive.key) {
      case 0:
        result = [...initData].sort(
          (a, b) => Number(b.isMarked) - Number(a.isMarked)
        );
        break;
      case 1:
        result = [...initData].sort((a, b) => {
          if (!a.deadTime && !b.deadTime) return 0;
          if (!a.deadTime) return Infinity;
          if (!b.deadTime) return -Infinity;
          return a.deadTime - b.deadTime;
        });
        break;
      case 2:
        result = [...initData].sort();
        break;
      case 3:
        result = [...initData].sort((a, b) => {
          if (!a.startTime && !b.startTime) return 0;
          if (!a.startTime) return Infinity;
          if (!b.startTime) return -Infinity;
          return a.startTime - b.startTime;
        });
        break;
      default:
        result = initData;
    }
    return props.$reverse ? result : result.reverse();
  }, shallowEqual);

  return (
    <StyledTodayData>
      {props.$groupActive ? (
        <>
          {ClassifyKey.map((item, index) => {
            const itemList = [...taskData].filter((taskItem) =>
              taskItem.classify?.find((a) => a.key === item)
            );
            return (
              itemList &&
              itemList.length !== 0 && (
                <GroupList
                  key={index}
                  $data={itemList}
                  $title={
                    itemList[0].classify!.find(
                      (classifyItem) => classifyItem.key === item
                    )?.name
                  }
                />
              )
            );
          })}
          {taskData.filter(
            (item) => item.classify === undefined || !item.classify.length
          ).length !== 0 && (
            <GroupList
              $data={taskData.filter(
                (item) => item.classify === undefined || !item.classify.length
              )}
              $title="未分类"
            />
          )}
        </>
      ) : (
        <>
          {taskData.map((item) => {
            return <TaskItem key={item.key} $key={item.key} />;
          })}
        </>
      )}
    </StyledTodayData>
  );
};

export default TodayData;

const StyledTodayData = styled.div`
  height: 60%;
  width: 100%;
  overflow-y: auto;
`;
