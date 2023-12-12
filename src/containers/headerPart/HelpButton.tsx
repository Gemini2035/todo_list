import styled from "styled-components";

const HelpButton = () => {
  return (
    <StyledHelpButton>
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
