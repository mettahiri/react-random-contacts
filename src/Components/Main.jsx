import React, { Component } from 'react';
import ContactList from "./ContactList";
import ContactInfo from "./ContactInfo";
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import '../App.css';

/**
 * ContactWithId : 
 *      - Récupére les infos d'un contact
 *      - Les Stock en session
 *      - Les renvois au component ContactInfo
 * 
 * @param {fetched} Boolean ==> Les resultats de la requête "fetch"
 * @param {users}   Object  ==> Les contacts
 * @param {match}   Object  ==> les paramètres d'Url
 */

const ContactWithId = ({fetched,users,match}) => {

    let filter_user, user_session, contact ;
    
    if(fetched){

        // Filtrer un contact par son id (index)
        filter_user = users.filter( (user,i) => i === parseInt(match.params.userId) && user);

        // préparer le contact en format json pour le stocker en session (sessionStorage)
        user_session = JSON.stringify(filter_user);
        
        // Créer une session (contact) et stocker le contact
        sessionStorage.setItem("contact",user_session );

    }

    // Récupérer les informations du contact de la session "contact"
    contact = JSON.parse(sessionStorage.getItem("contact"));

    return(
        <ContactInfo user = { contact } />
    )
}

/**
 * Main Component :
 *          - reçoit les données via redux
 *          - les transfert aux différents components  
 */
class Main extends Component {
    render() { 
        const CONTACT_PROPS = { 
            "users" : this.props.users ,
            "fetched" : this.props.fetched ,
        }
        return ( 
            <Switch>
                <Route  path="/home" render={()=> <ContactList {...CONTACT_PROPS} />} />
                <Route  path="/contactInfo/:userId"  render={(props) => <ContactWithId {...props} {...CONTACT_PROPS} />} />
                <Redirect to="/home" /> 
            </Switch>
         );
    }
}
const mapStateToProps = (state) => {
    return { 
        users : state.users.results,
        fetched :state.fetched
    };
}
export default withRouter(connect(mapStateToProps)(Main));