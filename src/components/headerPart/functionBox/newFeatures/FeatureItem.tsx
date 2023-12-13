/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-13 10:13:18
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 11:25:17
 * @FilePath: \todo_list\src\components\headerPart\functionBox\newFeatures\FeatureItem.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

interface PropType {
  img: string;
  buttonText?: string;
  content: string;
  buttonFunction?: (...args: unknown[]) => unknown;
}

const FeatureItem = (props: PropType) => {
  return (
    <StyledFeatureItem>
      <img
        src={"data:image/svg+xml;charset=utf-8;base64," + props.img}
        alt=""
      />
      <div className="main-content">
        <p className="description">{props.content}</p>
        <button
          onClick={() => {
            props.buttonFunction ? props.buttonFunction() : () => {};
          }}
        >
          <span>{props.buttonText || '明白了'}</span>
        </button>
      </div>
    </StyledFeatureItem>
  );
};

export default FeatureItem;

const StyledFeatureItem = styled.div`
  background-color: var(--ms-main-white);
  box-shadow: 0px 0.3px 0.9px var(--ms-bg-shadow), 0px 1.6px 3.6px var(--ms-bg-shadow);
  border-radius: 4px;
  padding: 0;
  margin-top: 14px;
  width: 95%;
  & img {
    height: auto;
    width: 100%;
    margin: 0 auto;
  }
  .main-content {
    padding: 20px 28px;
    .description {
        font-weight: 600;
    }
    button {
        margin-top: 24px;
        cursor: pointer;
        background-color: transparent;
        box-shadow: none;
        border-radius: 4px;
        border: 1px solid var(--ms-button-gray);
        font-size: 0.875rem;
        padding: 6px;
        &:hover {
            background-color: var(--ms-button-hover);
        }
    }
  }
`;
