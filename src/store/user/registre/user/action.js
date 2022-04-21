import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from './constant'
import axios from 'axios'
import { baseUrl } from '../../../../config/base'

export const RegisterUser = (data) => {
    return (dispatch) => {
        dispatch({ type: REGISTER_REQUEST })
        return axios
            .post(`${baseUrl}/registre/user`, data)
            .then((res) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: err,
                })
            })
    }
}