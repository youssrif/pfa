import { combineReducers } from 'redux';
import LoginUserReducer from './user/login/redurcer'
import RegistreUserReducer from './user/registre/user/reducer'
import HomeReducer from './home/redurcer'
import RegistreCompanyReducer from './user/registre/company/reducer'
import UserReducer from './company/redurcer';
import CompanyReducer from './company/redurcer';



const rootReducer=combineReducers({
   LoginUser:LoginUserReducer,
   RegisterUser: RegistreUserReducer,
   Home:HomeReducer,
   RegiSCompany:RegistreCompanyReducer,
   ShowUser:UserReducer,
   Show_company_byUser:CompanyReducer,
})
export default rootReducer;