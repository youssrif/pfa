import {
  SHOW_COMPANY_BYUSER_REQUEST,
  SHOW_COMPANY_BYUSER_SUCCESS,
  SHOW_COMPANY_BYUSER_FAIL,
}

  from './constant'
const initialState = {
  loading: false,
  data: {},
  error: ""
};

const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMPANY_BYUSER_REQUEST: {
      return {
        ...state,
        loading: false,
      }
    }
    case SHOW_COMPANY_BYUSER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    }
    case SHOW_COMPANY_BYUSER_FAIL: {
      return {
        loading: false,
        data: {},
        error: action.payload
      }
    }
    default:
      return state;
  }
}
export default CompanyReducer;
