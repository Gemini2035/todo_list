import styled from "styled-components";
import { useState } from "react";
import AsideView from "../../utils/asideView";
import AppBreifIcon from "./appBox/AppBreifIcon";
import DetailContainer from "./appBox/DetailContainer";

export default () => {
    const [openDetail, setOpenDetail] = useState(true);
    const changeOpenDetailState = (target: boolean) => {
        setOpenDetail(target);
    }
    return (
        <>
            <StyledAppBox onClick={() => changeOpenDetailState(!openDetail)}>
                <AppBreifIcon />
            </StyledAppBox>
            <AsideView
                $showModel={[openDetail, changeOpenDetailState]}
                $direction="left"
                $style={{ height: '100vh', top: 0, width: '320px', backgroundColor: '#fff' }}
                $position="fixed"
                $childNode={<DetailContainer $onChange={changeOpenDetailState} />}
            />
            {openDetail &&
                (
                    <div style={{ position: "fixed", top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0.5 }}
                        onClick={() => changeOpenDetailState(false)}
                    />
                )
            }
        </>
    )
}

const StyledAppBox = styled.div`
    &:hover {
        background-color: var(--ms-hover-color-light);
        cursor: pointer;
        height: 100%;
    }
`