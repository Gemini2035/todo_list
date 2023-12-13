import styled from "styled-components";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { RootStoreType, AppDispatch } from "../../store";
import { changeState } from "../../store/refreshModule";

const HelpButton = () => {
  const state = useSelector((store: RootStoreType) => {
    return store.refreshReducer;
  }, shallowEqual);
  const dispatch: AppDispatch = useDispatch();
  const randomChange = () => {
    const randomNumber = Math.random();
    dispatch(changeState('refreshing'));
    setTimeout(() => dispatch(changeState(randomNumber > 0.5? 'success' : 'fail')), 1000);
  }

  return (
    <StyledHelpButton>
      <div className="button-container">
        <button
          className="refresh-button"
          onClick={() => randomChange()}
        >
          <span>同步</span>
        </button>
        <span className="result">
          {state.refreshState === "success"
            ? "最新"
            : state.refreshState === "refreshing"
            ? "正在进行同步"
            : "同步失败"}
        </span>
      </div>
    </StyledHelpButton>
  );
};

export default HelpButton;

const StyledHelpButton = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  .refresh-button {
    color: var(--ms-main-white);
    font-weight: bold;
    background: var(--ms-main-blue-light);
    height: 32px;
    width: 52px;
    border: none;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }
  .result {
    font-size: 0.875rem;
    padding: 5px;
    font-weight: 600;
  }
`;
