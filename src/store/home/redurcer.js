import { CALANDER_REQUEST, CALANDER_FAIL, CALANDER_SUCCESS } from './constant'
const initialState = {
  loading: false,
  data: {},
  error: ""
};
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CALANDER_REQUEST: {
      return {
        ...state,
        loading: false,
      }
    }
    case CALANDER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    }
    case CALANDER_FAIL: {
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
export default HomeReducer;
