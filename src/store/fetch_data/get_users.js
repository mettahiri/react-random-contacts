const get_users = (dispatch) => {
    // debut de la requête
    dispatch({
        type : "GET_USERS_START"
    })

     fetch("https://randomuser.me/api/?results=50")
    .then( (result) => result.json())
    .then( (data) =>{
        //requête réussie
        dispatch({
            type: "GET_USERS",
            users : data
        });

        return data;
    })
    .catch(err => {
        //requête Échoué
        dispatch({
            type: "ERROR"
        });
    } );
}

export {get_users};