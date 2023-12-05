import styled from "styled-components"

const StyledTitle = styled.p`
color: var(--ms-main-white);
font-weight: bold;
&:hover {
    cursor: pointer;
    text-decoration: underline;
}
`

export default () => {
    return (
        <StyledTitle>To Do</StyledTitle>
    )
}