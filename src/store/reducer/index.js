import {combineReducers} from 'redux';
import Kategori from './kategori'
import Auth from './AuthReducer'
const rootReducers = combineReducers({
    Kategori,
    Auth
})

export default rootReducers