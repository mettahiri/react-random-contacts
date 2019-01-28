import React, { Component } from 'react';
import DisplayContactsList from "./DisplayContactsList"

class ContactList extends Component {
    render() { 
        /**
         * Réception de toutes les informations de 50 Contacts si la requête "fetch" est réussie 
         * et envoie au component DisplayContactsList pour l'affichage
         */
        const CONTACTS = this.props.fetched &&
                      this.props.users.map( (user,i) => (
                         <DisplayContactsList 
                          key      = { i }
                          id       = { i } 
                          gender   = { user.gender }
                          name     = { user.name }
                          dob      = { user.dob}
                          phone    = { user.phone }
                          location = { user.location }
                          picture  = { user.picture }
                         />
                      )) 
                     console.log(this.props)

        // Attente de la fin de la requête avec un loader svg
        const LOADING = ! this.props.fetched
                        ?<center><img src="loader.svg" alt=""/></center> 
                        : "";
        // Affichage d'erreur si la connexion Echoue
        const ERROR   = this.props.error;
        
        if(!ERROR){
            return ( 
                <React.Fragment>
                    { LOADING }
                    <main className="contactListMain">
                        { LOADING ? <center>Loading...</center> : <h1> Liste de contacts</h1> }  
                        <section className="Container">
                            { CONTACTS }
                        </section>  
                    </main>
                </React.Fragment>
             );
        } else {
            return (
                <main className="error">
                    <i className="fas fa-exclamation fa-5x"></i>
                    <h1>Erreur de Connexion !</h1>
                </main>
                
            );
        }
    }
}

export default ContactList;