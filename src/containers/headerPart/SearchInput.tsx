/*
 * @Date: 2023-12-07 19:17:27
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-10 17:32:58
 * @FilePath: /todo_list/src/containers/headerPart/SearchInput.tsx
 */
import { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { changeKeyWord, changeState } from '../../store/searchModule';
import styled from 'styled-components';
import { RootStoreType } from '../../store';

const SearchInput = () => {
    const [isFocus, setIsFocus] = useState(false);
    const dispatch = useDispatch();
    const inputContent = useSelector((state: RootStoreType) => { return state.searchReducer.keyWord }, shallowEqual);
    const focusHandle = () => {
        setIsFocus(true);
        dispatch(changeState(true));
    }
    const blurHandle = () => {
        setIsFocus(false);
    }
    const deleteHandle = () => {
        if (!isFocus) return;
        blurHandle();
        dispatch(changeKeyWord(''));
    }

    return (
        <>
            <StyledInput
                onFocus={focusHandle}
                onBlur={blurHandle}
                type="text" placeholder={isFocus ? '搜索' : ''}
                value={inputContent}
                onChange={event => {dispatch(changeKeyWord(event.target.value))}}
            />
            {/* onMouseDown > onBlur > onClick */}
            <StyledButton onMouseDown={deleteHandle}>
                {
                    isFocus &&
                    <p className='button-content'>x</p>
                }
            </StyledButton>
        </>
    )
}

const StyledInput = styled.input`
    height: 100%;
    outline: none;
    border: none;
    margin-left: -1px;
    padding-left: 5px;
    font-size: 0.9rem;
    letter-spacing: 1px;
    font-weight: bold;
    width: 375px;
    background-color: transparent;
`;

const StyledButton = styled.div`
    font-size: 1.1rem;
    font-weight: 100;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 100%;
    background-color: transparent;
    .button-content {
        color: var(--ms-main-blue-light);
    }
`

export default SearchInput;