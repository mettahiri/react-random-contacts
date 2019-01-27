import  {createStore, applyMiddleware} from "redux";
import users_reducer  from  "./reducers";
import thunk from 'redux-thunk';

import {get_users} from "./fetch_data/get_users";



const store = createStore(users_reducer , applyMiddleware(thunk));


/**
 * envoie du dispatch pour contrôler les actions (processus de la requête)
 * dans le fichier "fetch_data/get_users" 
 * */
store.dispatch( (dispatch) => {
    get_users(dispatch)
});


export default store ;