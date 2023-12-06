import styled from "styled-components";

export default () => {
    return (
        <StyledSvgContainer>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#2564cf"><path d="M778-164 528-414q-30 26-69 40t-77 14q-92.231 0-156.115-63.837Q162-487.675 162-579.837 162-672 225.837-736q63.838-64 156-64Q474-800 538-736.115 602-672.231 602-580q0 41-15 80t-39 66l250 250-20 20ZM382-388q81 0 136.5-55.5T574-580q0-81-55.5-136.5T382-772q-81 0-136.5 55.5T190-580q0 81 55.5 136.5T382-388Z"/></svg>
        </StyledSvgContainer>
    )
}

const StyledSvgContainer = styled.div`
    transform: rotate3d(0, 1, 0, 180deg);
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
        height: 75%;
        width: auto;
    }
`