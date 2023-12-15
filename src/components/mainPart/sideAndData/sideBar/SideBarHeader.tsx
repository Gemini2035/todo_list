import styled from "styled-components";

interface PropType {
  $clickEvent: (target: boolean) => void;
}

const SideBarHeader = (props: PropType) => {
  return (
    <StyledSideBarHeader>
      <button className="cls-btn" onClick={() => props.$clickEvent(false)}>
        <svg
          fill="currentColor"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </StyledSideBarHeader>
  );
};

export default SideBarHeader;

const StyledSideBarHeader = styled.div`
  height: 48px;
  margin-top: 16px;
  padding: 0 24px;
  .cls-btn {
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: var(--ms-button-hover);
    }
  }
`;