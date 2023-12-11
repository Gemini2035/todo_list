import styled from "styled-components";

const Help = () => {
  return (
    <StyledHelp>
      <h2 className="title">帮助</h2>
      <a
        href="https://support.microsoft.com/zh-cn/todo"
        target="_blank"
        className="learn-more"
      >
        <span>了解详细信息</span>
      </a>
      <div className="button-container">
        <button
          className="refresh-button"
          onClick={() => {
            console.log("TO Refresh");
          }}
        >
          <span>同步</span>
        </button>
        <span className="result">最新</span>
      </div>
    </StyledHelp>
  );
};

export default Help;

const StyledHelp = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 16px;
  .title {
    font-size: 1.25rem;
    line-height: 65px;
    padding: 3px 0 0 0;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: default;
    height: 65px;
  }
  .learn-more {
    text-decoration: none;
    color: var(--ms-main-blue-light);
    font-size: 0.875rem;
    &:hover {
      text-decoration: underline;
    }
  }
  .button-container {
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
  }
`;
