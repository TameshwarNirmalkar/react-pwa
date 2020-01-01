import { FETCH_EMP_DATA } from './action-types';

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