import {
    SHOW_USER_REQUEST,
    SHOW_USER_SUCCESS,
    SHOW_USER_FAIL,
}

    from './constant'
import axios from 'axios'
import { baseUrl } from '../../config/base'

export const ShowUser = (data) => {
    return (dispatch) => {
        dispatch({ type: SHOW_USER_REQUEST })
        return axios
            .get(`${baseUrl}/user/show`, data)
            .then((res) => {
                dispatch({
                    type: SHOW_USER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: SHOW_USER_FAIL,
                    payload: err,
                })
            })
    }


}
