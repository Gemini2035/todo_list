import styled from "styled-components";
import HoverTips from "../hoverTips";

interface PropType {
  $isMarked: boolean;
  $theme?: string
}

const MarkedIcon = (props: PropType) => {
  return (
    <HoverTips
      $direction="topMiddle"
      $context={props.$isMarked ? "删除重要性。" : "将任务标记为重要。"}
      $delayTime={600}
      $innerNode={
        <StyledMarkIcon {...props}>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <path d="M9.1 2.9a1 1 0 011.8 0l1.93 3.91 4.31.63a1 1 0 01.56 1.7l-3.12 3.05.73 4.3a1 1 0 01-1.45 1.05L10 15.51l-3.86 2.03a1 1 0 01-1.45-1.05l.74-4.3L2.3 9.14a1 1 0 01.56-1.7l4.31-.63L9.1 2.9z"></path>
          </svg>
        </StyledMarkIcon>
      }
    />
  );
};

export default MarkedIcon;

interface StylePropType {
    $theme?: string;
    $isMarked: boolean
}

const StyledMarkIcon = styled.div<StylePropType>`
    display: flex;
    align-items: center;
    justify-content: center;
  svg {
    stroke: ${(props) =>
      props.$theme ? props.$theme : "var(--ms-main-blue-light)"};
    fill: ${(props) =>
      props.$isMarked
        ? props.$theme
          ? props.$theme
          : "var(--ms-main-blue-light)"
        : "transparent"};
  }
`;
