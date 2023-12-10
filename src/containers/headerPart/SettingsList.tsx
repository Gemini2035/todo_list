import styled from 'styled-components';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootStoreType, AppDispatch } from '../../store';
import { toggle } from '../../store/basicSettingsModule';

const SettingsList = () => {
    const settingsList = useSelector((state: RootStoreType) => { return state.settingReducer}, shallowEqual);
    const dispatch: AppDispatch = useDispatch();
    return (
        <StyledSettingsList onClick={() => dispatch(toggle({key: '11', value: true}))}>
            { settingsList[0].content[0].value? '1' : '0' }
        </StyledSettingsList>
    )
};

const StyledSettingsList = styled.div`
    
`

export default SettingsList;