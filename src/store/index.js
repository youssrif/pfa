import { combineReducers } from 'redux';
import LoginUserReducer from './user/login/redurcer'
import RegistreUserReducer from './user/registre/user/reducer'
import { EtatsInvoiceReducer, HomeReducer } from './home/redurcer'
import RegistreCompanyReducer from './user/registre/company/reducer'
import { ShowALLCompanyReducer, UpCompanyReducer } from './company/redurcer';
import { CompanyReducer } from './company/redurcer';
import { UpdAbonUserReducer, UpdUserReducer, UserReducer } from './user/actionUser/redurcer'
import {
   ShowServiceReducer,
   DeleteServiceReducer,
   AddServiceReducer,
   UpdateServiceReducer,


} from './service/redurcer'
import {
   AddMaterialReducer,
   DeleteMaterialReducer,
   ShowMaterialReducer,
   UpdateMaterialReducer
} from './material/redurcer';
import { AddClientReducer, DeleteClientReducer, ShowClientReducer, ShowInvoiceBYClientReducer, UpdateClientReducer } from './client/redurcer';
import { AddInvoiceReducer, DelInvoicClienteReducer, DelInvoiceReducer } from './invoice/reducers';
import { Refresh_Reducer } from './user/refresh/reducer';




const rootReducer = combineReducers({
   LoginUser: LoginUserReducer,
   RegisterUser: RegistreUserReducer,
   Home: HomeReducer,
   Upd_etat_invoice: EtatsInvoiceReducer,
   RegiSCompany: RegistreCompanyReducer,
   ShowUser: UserReducer,
   refresh_access: Refresh_Reducer,

   //user
   UpdUser: UpdUserReducer,
   Upd_abon_user: UpdAbonUserReducer,

   //company
   Show_company_byUser: CompanyReducer,
   Up_company: UpCompanyReducer,
   Show_All_company: ShowALLCompanyReducer,

   //service
   Show_service_byCompany: ShowServiceReducer,
   Add_service: AddServiceReducer,
   Del_service: DeleteServiceReducer,
   Upd_service: UpdateServiceReducer,

   //material
   Show_material_byCompany: ShowMaterialReducer,
   Add_material: AddMaterialReducer,
   Del_material: DeleteMaterialReducer,
   Upd_material: UpdateMaterialReducer,

   //client
   Show_client_byCompany: ShowClientReducer,
   Add_client: AddClientReducer,
   Del_client: DeleteClientReducer,
   Upd_client: UpdateClientReducer,
   Show_invoice_byClient: ShowInvoiceBYClientReducer,
   //invoice
   Add_Invoice: AddInvoiceReducer,
   del_Invoice: DelInvoiceReducer,
   del_Invoice_byclient: DelInvoicClienteReducer,

})
export default rootReducer;