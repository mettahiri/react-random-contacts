import React, { Component } from 'react';
import DisplayContacts from "./DisplayContacts"

class ContactList extends Component {
    render() { 
        /**
         * Réception de toutes les informations de 50 Contacts si la requête "fetch" est réussie 
         * et envoie au component DisplayContacts pour l'affichage
         */
        const CONTACTS = this.props.fetched &&
                      this.props.users.map( (user,i) => (
                         <DisplayContacts 
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
        return ( 
            <>
            { LOADING }
            <main className="contactListMain">
                { LOADING ? <center>Loading...</center> : <h1> Liste de contacts</h1> }  
               <section className="Container">
                  { CONTACTS }
               </section>  
            </main>
            </>
         );
    }
}

export default ContactList;