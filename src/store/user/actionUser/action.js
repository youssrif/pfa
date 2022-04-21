import {
    SHOW_USER_REQUEST,
    SHOW_USER_SUCCESS,
    SHOW_USER_FAIL,

    UPD_USER_REQUEST,
    UPD_USER_SUCCESS,
    UPD_USER_FAIL,

    UPD_ABON_FAIL,
    UPD_ABON_REQUEST,
    UPD_ABON_SUCCESS,
}

    from './constant'
import axios from 'axios'
import { baseUrl } from '../../../config/base'
import { Home } from '../../home/action'
import { Show_All_company } from '../../company/action'


export const ShowUser = () => {
    return (dispatch) => {
        dispatch({ type: SHOW_USER_REQUEST })
        return axios
            .get(`${baseUrl}/user/show`)
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

export const UpdUser = (iduser, data, id = null) => {
    return (dispatch) => {
        dispatch({ type: UPD_USER_REQUEST })
        return axios
            .put(`${baseUrl}/user/upd/${iduser}`, data)
            .then(async (res) => {
                dispatch({
                    type: UPD_USER_SUCCESS,
                    payload: res.data,
                })
                if (id !== null)
                    await dispatch(Home(id))
            })
            .catch((err) => {
                dispatch({
                    type: UPD_USER_FAIL,
                    payload: err,
                })
            })
    }


}

export const Upd_abon_user = (iduser, data, id = null) => {
    console.log('data is', iduser, data)
    return async (dispatch) => {
        dispatch({ type: UPD_ABON_REQUEST })
        return await axios
            .put(`${baseUrl}/user/upd/abon/${iduser}`, data)
            .then(async (res) => {
                dispatch({
                    type: UPD_ABON_SUCCESS,
                    payload: res.data,
                })
                if (id !== null)
                    await dispatch(Show_All_company(id))
            })
            .catch((err) => {
                dispatch({
                    type: UPD_ABON_FAIL,
                    payload: err,
                })
            })
    }

}
