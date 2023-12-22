/*
 * @Date: 2023-12-09 14:54:06
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-21 17:53:19
 * @FilePath: /todo_list/src/components/headerPart/AppBox.tsx
 */
import styled from "styled-components";
import { useState } from "react";
import AsideView from "../../utils/asideView";
import AppBreifIcon from "./appBox/AppBreifIcon";
import DetailContainer from "./appBox/DetailContainer";

const AppBox = () => {
    const [openDetail, setOpenDetail] = useState(false);
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
                $style={{ height: '100vh', top: 0, width: '320px', backgroundColor: '#fff', zIndex: 2 }}
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

export default AppBox;

const StyledAppBox = styled.div`
    transition: none;
    &:hover {
        background-color: var(--ms-hover-color-light);
        cursor: pointer;
        height: 100%;
    }
`