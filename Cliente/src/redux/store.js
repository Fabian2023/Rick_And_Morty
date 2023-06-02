// primero la estructura de la store,, se puede copiar y pegar, luego hay que hacer el reducer 🚨

import { createStore,applyMiddleware,compose} from "redux";
import reducer from './reducer'
import  thunk  from "redux-thunk";

const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
    
    )
export default store