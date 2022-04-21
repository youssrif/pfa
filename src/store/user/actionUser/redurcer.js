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
const initialState = {
  loading: false,
  data: {},
  error: ""
};

const initialState1 = {
  loading: false,
  data: {},
  error: ""
};

export const UserReducer = (state = initialState, action) => {
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


export const UpdUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPD_USER_REQUEST: {
      return {
        ...state,
        loading: false,
      }
    }
    case UPD_USER_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    }
    case UPD_USER_FAIL: {
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

export const UpdAbonUserReducer = (state = initialState1, action) => {
  switch (action.type) {
    case UPD_ABON_REQUEST: {
      return {
        ...state,
        loading: false,
      }
    }
    case UPD_ABON_SUCCESS: {
      return {
        loading: false,
        data: action.payload,
        error: ""
      }
    }
    case UPD_ABON_FAIL: {
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
