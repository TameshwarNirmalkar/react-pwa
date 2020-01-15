import { FETCH_CITIES } from './action.types';

export const getCities = () => {
    return dispatch => {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => response.json())
            .then(res => {
                dispatch({
                    type: FETCH_CITIES,
                    payload: { cities: res }
                })
            })
    }
}