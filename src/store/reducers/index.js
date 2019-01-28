                /**
                 * Seulement un seul <reducer> dans l'index donc pas besoin de "combineRedcuers"
                 */

// state par default
let initstate = {
    fetching : false,
    fetched : false ,
    users : [],
    error : false
}
/**
 * users_reducer :
 *          - récupération des contacts
 *          - envoie des données au component "Main"
 * 
 * @param {*} state ==> initState par default
 * @param {*} action ==> les processus de la requête
 */
let users_reducer = (state = initstate , action) => {
    switch(action.type){
        // Debut de la requête
        case "GET_USERS_START" :
        state = {
            ...state,
            fetching : true
        }
        break;
        // Requête Réussie
        case "GET_USERS" :
        state = {
            ...state,
            fetched : true,
            users : action.users
        }
        break;
        // Requête Échoué
        case "ERROR" :
        state = {
            ...state,
            error : true
        }
        break;
    }
    return state;
}

export default users_reducer;