import styled from "styled-components"

export default () => {
    return (
        <StyledTitle>To Do</StyledTitle>
    )
}

const StyledTitle = styled.p`
    color: var(--ms-main-white);
    font-weight: bold;
    word-spacing: nowrap;
    min-width: 50px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`