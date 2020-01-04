import { FETCH_EMP_DATA, SET_ACTIVE_TAB } from './action-types';

export const fetchEmployeeData = () => {
    return dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => response.json())
        .then(res => {
            dispatch({
                type: FETCH_EMP_DATA,
                payload: { employeeData: res }
            })
        })
    }
}

export const nextActiveTab = (activeTab) => {
    console.log('Next State from Action ', activeTab);
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_TAB,
            payload: { activeTab: activeTab }
        })
    }
}