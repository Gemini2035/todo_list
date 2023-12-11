/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-08 17:14:23
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-11 15:07:00
 * @FilePath: \todo_list\src\containers\headerPart\SettingsList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootStoreType, AppDispatch } from "../../store";
import { toggle } from "../../store/basicSettingsModule";

const SettingsList = () => {
  const settingsList = useSelector((state: RootStoreType) => {
    return state.settingReducer;
  }, shallowEqual);
  const dispatch: AppDispatch = useDispatch();
  return (
    <StyledSettingsList>
      {settingsList.map((itemGroup) => {
        return (
          <div className="item-group" key={itemGroup.key}>
            <h2 className="item-title">{itemGroup.name}</h2>
            {itemGroup.content.map((item) => {
              return (
                <div className="item" key={item.key}>
                  <label htmlFor={item.key} className="button-name">
                    {item.name}
                  </label>
                  <div
                    className={`button-group ${item.value ? "active" : ""}`}
                    onClick={() =>
                      dispatch(toggle({ key: item.key, value: !item.value }))
                    }
                  >
                    <button id={item.key} className="button-outline">
                      <div className="button-maintain" />
                    </button>
                    <span className="text">{item.value ? "开启" : "关闭"}</span>
                  </div>
                  {item.tips && <p className="tips">{item.tips}</p>}
                </div>
              );
            })}
          </div>
        );
      })}
    </StyledSettingsList>
  );
};

const StyledSettingsList = styled.div`
  transition: 0.3s ease-in-out;
  .item-group {
    font-weight: 600;
    margin-bottom: 16px;
    .item-title {
      font-size: 1.125rem;
      font-weight: inherit;
      height: 42px;
    }
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5px 0;
      .button-name {
        font-size: 0.875rem;
        padding: 5px 0;
      }
      .button-group {
        width: 100px;
        display: flex;
        position: relative;
        background-color: transparent;
        align-items: center;
        .button-outline {
          width: 40px;
          height: 20px;
          border-radius: 10px;
          border: 1px solid var(--ms-button-gray);
          padding: 0 3px;
          position: relative;
          &:hover {
            border-color: rgb(51, 51, 51);
            cursor: pointer;
            &::before {
              display: none;
            }
            .button-maintain {
                background-color: rgb(51, 51, 51)
            }
          }
          .button-maintain {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--ms-button-gray);
            position: relative;
          }
        }
        .text {
          font-size: 0.875rem;
          margin: 0 8px;
          font-weight: normal;
          cursor: default;
        }
      }
      .button-group.active {
        cursor: pointer;
        .button-outline {
          background-color: var(--ms-main-blue-light);
          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            background-color: var(--ms-main-blue-light);
            height: 22px;
            width: 42px;
            border-radius: 25px;
          }
          &:hover::before {
            display: none;
          }
          .button-maintain {
            background-color: var(--ms-main-white);
            transform: translate3d(175%, 0, 0);
          }
        }
      }
      .tips {
        font-size: 0.6875rem;
        margin: 3px 0;
        color: var(--ms-tips-gray);
      }
    }
  }
`;

export default SettingsList;
