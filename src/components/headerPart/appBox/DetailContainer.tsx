import styled from "styled-components";
import AppBreifIcon from "./AppBreifIcon";
import AppsIcon from "./AppsIcon";

interface PropType {
    $onChange: (target: boolean) => void
}

export default (prop: PropType) => {
    return (
        <>
            <StyledDetailTitle onClick={() => prop.$onChange(false)}>
                <div className="icon-wrapper">
                    <AppBreifIcon $color='var(--ms-black)' />
                </div>
                <a href="https://www.microsoft365.com/" target="_blank" className="link-title">
                    <span>Microsoft 366</span>
                    <span style={{ letterSpacing: '-3px', margin: '0 3%', wordSpacing: 'nowarp', fontSize: '1.2rem' }}>{'->'}</span>
                </a>
            </StyledDetailTitle>
            <AppsIcon />
            <StyledShowButton href="https://www.microsoft365.com/apps" target="_blank">
                <span>所有应用</span>
                <span>{'->'}</span>
            </StyledShowButton>
        </>
    )
}

const StyledDetailTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    .icon-wrapper {
        height: 48px;
        &:hover {
            background-color: var(--ms-hover-gray-light);
        }
    }
    .link-title {
        font-size: 0.875rem;
        width: 150px;
        text-decoration: none;
        color: var(--ms-main-blue-light);
        &:hover {
            & span:first-child {
                text-decoration: underline;
            }
        }
        & span {
            font-size: 1rem;
            margin-right: 3%;
        }
    }
`
const StyledShowButton = styled.a`
    text-decoration: none;
    font-size: 0.875rem;
    width: 150px;
    text-decoration: none;
    color: var(--ms-main-blue-light);
    margin: 12px 0 35px 36px;
    &:hover {
        & span:first-child {
            text-decoration: underline;
        }
    }
    & span {
        font-size: 1rem;
        margin-right: 3%;
    }
`