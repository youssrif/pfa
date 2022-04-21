import { CALANDER_FAIL, CALANDER_REQUEST, CALANDER_SUCCESS } from './constant'
import axios from 'axios'
import { baseUrl } from '../../config/base'

export const Home = (data) => {
    return (dispatch) => {
        dispatch({ type: CALANDER_REQUEST })
        return axios
            .get(`${baseUrl}/invoice/show/price/facture/${data}`)
            .then((res) => {
                dispatch({
                    type: CALANDER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: CALANDER_FAIL,
                    payload: err,
                })
            })
    }
}