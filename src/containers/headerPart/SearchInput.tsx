/*
 * @Date: 2023-12-07 19:17:27
 * @LastEditors: Gemini2035 76091679+Gemini2035@users.noreply.github.com
 * @LastEditTime: 2023-12-09 17:05:36
 * @FilePath: /todo_list/src/containers/headerPart/SearchInput.tsx
 */
import { Component, ReactNode } from 'react';
import styled from 'styled-components';

interface StateType {
    isFocus: boolean,
    inputContent: string
}

class SearchInput extends Component<Record<string, never>, StateType> {
    constructor(prop: Record<string, never>) {
        super(prop);
        this.state = {
            isFocus: false,
            inputContent: ''
        }
    }

    private deleteHandle = () => {
        if (!this.state.isFocus) return;
        this.setState({ inputContent: '' });
        console.log(this.state.inputContent)
    }

    render(): ReactNode {
        return (
            <>
                <StyledInput
                    onFocus={() => this.setState({ isFocus: true })}
                    onBlur={() => this.setState({ isFocus: false })}
                    type="text" placeholder={this.state.isFocus ? '搜索' : ''}
                    value={this.state.inputContent}
                    onChange={event => this.setState({ inputContent: event.target.value })}
                />
                {/* onMouseDown > onBlur > onClick */}
                <StyledButton onMouseDown={this.deleteHandle}>
                    {
                        this.state.isFocus &&
                        <p className='button-content'>x</p>
                    }
                </StyledButton>
            </>
        )
    }
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