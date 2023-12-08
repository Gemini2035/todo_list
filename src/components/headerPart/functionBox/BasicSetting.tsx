import styled from "styled-components"

export default () => {
    return (
        <StyledSettingsContainer>
            <h2 className="title">设置</h2>
            
        </StyledSettingsContainer>
    )
}

const StyledSettingsContainer = styled.div`
    width: 100%;
    height: 100%;
    .title {
        font-size: 1.25rem;
        margin: 15px 0 18px 16px;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: default;
    }
`