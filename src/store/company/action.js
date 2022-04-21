import {
    SHOW_COMPANY_BYUSER_REQUEST,
    SHOW_COMPANY_BYUSER_SUCCESS,
    SHOW_COMPANY_BYUSER_FAIL,
}

    from './constant'
import axios from 'axios'
import { baseUrl } from '../../config/base'
/* const Iduser= useSelector(state => state?.LoginUser?.data?.new?._id) */

export const Show_company_byUser = (data) => {
    return (dispatch) => {
        dispatch({ type: SHOW_COMPANY_BYUSER_REQUEST })
        return axios
            .get(`${baseUrl}/company/show/user/company/${data}`)
            .then((res) => {
                dispatch({
                    type: SHOW_COMPANY_BYUSER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch((err) => {
                dispatch({
                    type: SHOW_COMPANY_BYUSER_FAIL,
                    payload: err,
                })
            })
    }


}
