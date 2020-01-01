import { FETCH_DATA, SET_TITLE } from './action-types';

export const fetchData = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
        .then(res => {
            dispatch({
                type: FETCH_DATA,
                payload: {userData: res}
            })
        })
    }
}

export const setTitle = () => {
    return dispatch => dispatch({
        type: SET_TITLE,
        payload: { title: 'Home is coming' }
    })
}
