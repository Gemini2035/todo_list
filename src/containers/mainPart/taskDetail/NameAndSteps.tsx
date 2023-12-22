/*
 * @Author: gemini2035 2530056984@qq.com
 * @Date: 2023-12-22 17:19:41
 * @LastEditors: gemini2035 2530056984@qq.com
 * @LastEditTime: 2023-12-22 17:27:43
 * @FilePath: \todo_list\src\containers\mainPart\NameAndSteps.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styled from "styled-components";

interface PropType {
    $name: string,
    $hasDone: boolean,
    $steps?: {content: string, hasDone: boolean}[]
}

const NameAndSteps = (props: PropType) => {
    return (<StyledNameAndSteps>
        111
    </StyledNameAndSteps>)
}

export default NameAndSteps;

const StyledNameAndSteps = styled.div``