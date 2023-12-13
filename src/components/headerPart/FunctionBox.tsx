/*
 * @Date: 2023-12-09 14:54:06
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-13 16:29:44
 * @FilePath: /todo_list/src/components/headerPart/FunctionBox.tsx
 */
import { ReactNode } from 'react'
import styled from "styled-components";
import BasicSetting from "./functionBox/BasicSetting";
import Help from './functionBox/Help';
import NewFeatures from './functionBox/NewFeatures';
import FunctionItem from "../../containers/headerPart/FunctionItem";
import LogInfo from './functionBox/LogInfo';
import { useState } from 'react'

const FunctionBox = () => {
    const functionArray: {key: number, hoverTitle?: string,  icon: ReactNode, childNode: ReactNode, model: [boolean, (target: boolean) => void]}[] = [
        {
            key: 0,
            icon: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m416-132-14-112q-21-6-46.5-20T313-294l-103 44-64-112 89-67q-2-12-3.5-25t-1.5-25q0-11 1.5-23.5T235-531l-89-67 64-110 102 43q20-17 43.5-30.5T401-716l15-112h128l14 113q26 9 45.5 20.5T644-665l106-43 64 110-93 70q4 14 4.5 25.5t.5 22.5q0 10-1 21.5t-4 28.5l91 68-64 112-104-45q-21 18-42 30.5T558-245l-14 113H416Zm24-28h78l15-109q30-8 53.5-21.5T636-329l100 43 40-68-88-66q5-18 6.5-32t1.5-28q0-15-1.5-28t-6.5-30l90-68-40-68-103 43q-17-19-47.5-37T532-691l-12-109h-80l-12 108q-30 6-55 20t-51 40l-100-42-40 68 87 65q-5 13-7 29t-2 33q0 15 2 30t6 29l-86 66 40 68 99-42q24 24 49 38t57 22l13 108Zm38-232q37 0 62.5-25.5T566-480q0-37-25.5-62.5T478-568q-37 0-62.5 25.5T390-480q0 37 25.5 62.5T478-392Zm2-88Z" /></svg>,
            childNode: <BasicSetting />,
            hoverTitle: '设置',
            model: useState(false)
        },
        {
            key: 1,
            icon:  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M462-344q0-47 17.5-84t71.5-84q35-32 52.5-62.5T621-643q0-57-39.5-95T474-776q-52 0-84 22t-53 59l-25-13q27-47 66-71.5t96-24.5q84 0 129.5 48.5T649-643q0 42-18.5 78.5T578-499q-57 49-72.5 81.5T490-344h-28Zm12 212q-11 0-19.5-8.5T446-160q0-11 8.5-19.5T474-188q11 0 19.5 8.5T502-160q0 11-8.5 19.5T474-132Z"/></svg>,
            childNode: <Help />,
            hoverTitle: '帮助与反馈',
            model: useState(false)
        },
        {
            key: 2,
            icon:  <svg xmlns="http://www.w3.org/2000/svg" id="ArrowUp" viewBox="0 0 32 32"><path d="M10.14,24.72a3.54,3.54,0,0,0,1.09.73,3.38,3.38,0,0,0,1.34.27,3.23,3.23,0,0,0,1.2-.22,3.27,3.27,0,0,0,1-.6,3.67,3.67,0,0,0,.75-.9A3.52,3.52,0,0,0,16,22.86L9.2,21.66a3.52,3.52,0,0,0-.06.63,3.38,3.38,0,0,0,.27,1.34A3.54,3.54,0,0,0,10.14,24.72Z"/><path d="M27.14,22.55V8.31L0,13.15v4.57H.2Z"/></svg>,
            childNode: <NewFeatures />,
            hoverTitle: '新增功能',
            model: useState(false)
        },
        {
            key: 3,
            icon:  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M252-256q51-36 106.5-57T480-334q66 0 121.5 21T708-256q41-41 66.5-98T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 69 25.5 126t66.5 98Zm228.03-210Q432-466 399-498.97t-33-81Q366-628 398.97-661t81-33Q528-694 561-661.03t33 81Q594-532 561.03-499t-81 33ZM480-132q-73 0-136.5-27T233-233q-47-47-74-110.5T132-480q0-73 27-136.5T233-727q47-47 110.5-74T480-828q73 0 136.5 27T727-727q47 47 74 110.5T828-480q0 73-27 136.5T727-233q-47 47-110.5 74T480-132Zm0-28q56 0 111.5-20.5T686-236q-39-32-91.5-51T480-306q-62 0-115 18.5T274-236q39 35 94.5 55.5T480-160Zm0-334q36 0 61-25t25-61q0-36-25-61t-61-25q-36 0-61 25t-25 61q0 36 25 61t61 25Zm0-86Zm0 347Z"/></svg>,
            childNode: <LogInfo />,
            model: useState(false)
        }
    ];
    const changeState = (target: boolean, index: number) => {
        functionArray.forEach(item => {
            item.model[1](false);
        })
        functionArray[index].model[1](target);
    }
    const renderContent = Array.from(functionArray, item => {
        return (
            <FunctionItem key={item.key} 
            $asideContent={item.childNode} 
            $icon={item.icon} 
            $title={item.hoverTitle} 
            $isOpenModel={[item.model[0], changeState]} 
            $index={item.key} />
        )
    })

    return (
        <StyledFunctionBox>
            {renderContent}
        </StyledFunctionBox>
    )
}

export default FunctionBox;

const StyledFunctionBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`