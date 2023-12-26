/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-26 14:06:10
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-26 15:01:46
 * @FilePath: \todo_list\src\containers\mainPart\taskDetail\TagsSetting.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

interface PropType {
  $tags: { key: string; name: string }[];
  $key: number;
}

const TagsSetting = (props: PropType) => {
  return (
    <StyledTagsSetting>
      {props.$tags.map((item) => (
        <div key={item.key} className={`tag-item ${item.key}`}>
          <p className="name">{item.name}</p>
          <p className="close-btn">x</p>
        </div>
      ))}
    </StyledTagsSetting>
  );
};

export default TagsSetting;

const StyledTagsSetting = styled.div`
  padding: 16px;
  margin-top: 16px;
  background-color: var(--ms-main-white);
  width: 90%;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .tag-item {
    display: flex;
    width: calc(100% / 3 - 24px);
    justify-content: space-around;
    margin-right: 16px;
    border-radius: 5px;
    padding: 2px 4px;
    border: 1px solid;
    font-size: 0.875rem;
    .description {
        word-wrap: none;
    }
    &.red {
        
    }
  }
`;
