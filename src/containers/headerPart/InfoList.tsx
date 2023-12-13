/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 14:56:55
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 16:20:59
 * @FilePath: \todo_list\src\containers\headerPart\LogInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useSelector, shallowEqual } from "react-redux";
import { RootStoreType } from "../../store";
import styled from "styled-components";

const InfoList = () => {
  const userInfo = useSelector((store: RootStoreType) => {
    return store.userInfoReducer;
  }, shallowEqual);
  return (
    <StyledLogInfo>
      <img
        className="avatar"
        src={userInfo.userAvatar}
        alt="头像加载失败"
        title="添加或更改头像"
      />
      <div className="description">
        <p className="name">{userInfo.userName}</p>
        <p className="mail">{userInfo.userMail}</p>
        <a href="https://account.microsoft.com/">
          <span>我的Xxxxxxxxx账户</span>
        </a>
        <a href="https://account.microsoft.com/profile/">
          <span>我的个人资料</span>
        </a>
      </div>
    </StyledLogInfo>
  );
};

export default InfoList;

const StyledLogInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  .avatar {
    width: 100px;
    height: auto;
    min-height: 100px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover::before {
      z-index: 1;
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' fill='%23fff' stroke='%23fff'%3E%3Ccircle cx='72.8' cy='106.3' r='7' stroke='none'/%3E%3Cg class='mectrl_stroke' fill='none'%3E%3Ccircle cx='150' cy='155' r='49' stroke-width='15'/%3E%3Cpath d='M45 79v153h210V79h-55l-15-15h-70l-15 15z' stroke-width='14'/%3E%3C/g%3E%3C/svg%3E");
      background-size: 32px 32px;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    .name {
        font-size: 1.125rem;
        font-weight: bold;
        padding: 1px;
    }
    .mail {
        font-size: 0.8125rem;
        margin: 3px 0;
    }
    a {
        font-size: 0.8125rem;
        letter-spacing: 0.5px;
        font-weight: 600;
        color: var(--ms-main-blue-light);
        cursor: pointer;
        padding: 1px;
    }
  }
`;
