import styled from "styled-components";

interface PropType {
    $overlayTrigger: boolean,
}

const TaskDetail = (props: PropType) => {
    return (
        <StyledTaskDetail>
            {props.$overlayTrigger? 1 : 12}
        </StyledTaskDetail>
    )
}

export default TaskDetail;

const StyledTaskDetail = styled.div`

`