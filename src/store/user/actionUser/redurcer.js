import {
  SHOW_USER_REQUEST,
  SHOW_USER_SUCCESS,
  SHOW_USER_FAIL,
}

  from './constant'
const initialState = {
  loading: false,
  data: {},
  error: ""
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_USER_REQUEST: {
      return {
        ...state,
        loading: false,
      }
    }
    case SHOW_USER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    }
    case SHOW_USER_FAIL: {
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
export default UserReducer;
