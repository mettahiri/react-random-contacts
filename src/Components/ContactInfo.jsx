import React , {Component} from "react";
import Map from "./Map";
import pays from "../world/pays.js";
import DisplayContactInfo from "./DisplayContactInfo";
import {NavLink} from "react-router-dom";


/**
 * ContactInfo : 
 *      - Récupération des informations d'un contact
 *      - Traitement affichage et renvoie les infos à DisplayContactInfo component
 */

class ContactInfo extends Component {

    componentDidMount(){
        
        // Aller en haut de la page
        window.scrollTo(0, 0);
    }

    render(){
        
        const user = this.props.user
        
        // filtrage du Nom d'un pays suite à son code via le fichier "pays.js"
        const paysFiltred = pays.filter(p => p.code === user[0].nat ? p :"");

        return (
            <main className="userInfo" id="info">
            
                <article>
                    <header>
                        <h1>Infos</h1>
                        <center>
                            <img className="userImg" src={user[0].picture.large} alt={user[0].name.first+" "+user[0].name.last} alt={user[0].name.last} />
                            <h1>{user[0].name.first+" "+user[0].name.last.toUpperCase()}</h1>
                        </center>
                    </header>
                    <section className="userMain">
                         <div className="informations">
                            <table>
                                <tbody>
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-user"></i>}
                                    title = "Pseudo :"
                                    info  = {user[0].login.username}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-envelope"></i>}
                                    title = "Email :"
                                    info  = {user[0].email}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-mobile-alt"></i>}
                                    title = "N° Portable :"
                                    info  = {user[0].phone}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-phone"></i>}
                                    title = "N° tel fixe :"
                                    info  = {user[0].cell}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-genderless"></i>}
                                    title = "Civilité :"
                                    info  = {user[0].gender === "male" ?"Homme":"Femme"}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-birthday-cake"></i>}
                                    title = "Date de naissance :"
                                    info  = {new Intl.DateTimeFormat('en-US').format(new Date(Date.parse(user[0].dob.date)))}
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-table"></i>}
                                    title = "Âge:"
                                    info  = {user[0].dob.age+" ans"} 
                                    />
                                    <DisplayContactInfo 
                                    icon  = {<i className="fas fa-globe-africa"></i>}
                                    title = "Pays :"
                                    info  = { <div>
                                                    {paysFiltred[0].name+" "}
                                                    <img src={require(`../world/${user[0].nat.toLowerCase()}.png`)}/> 
                                                </div>} 
                                    />
                                </tbody>
                            </table>
                         </div>
                         <div className="location">
                            <div className="locationInfo">
                                 <i className="fas fa-map-marked-alt fa-2x"></i>
                                 <div>
                                     <h4><strong>Région :</strong> <span>{user[0].location.state.toUpperCase()}</span></h4>
                                     <h4><strong>Ville :</strong>  <span>{user[0].location.city.toUpperCase()}</span> </h4>
                                 </div>
                            </div>
                            <div className="map">
    
                            {/*Localisation du contact via GOOGLE MAP*/}
                            <Map
                             location = {user[0].location.coordinates}
                             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7hgk7SUDjru4F2afwQK8HtPiShdM7ZoU&v=3.exp&libraries=geometry,drawing,places"
                             loadingElement={<div style={{ height: `100%` }} />}
                             containerElement={<div style={{ height: `100%` }} />}
                             mapElement={<div style={{ height: `100%` }} />}
                            />
                            </div>
                        </div>
                    </section>
                    <NavLink className="retourList" to="/home">
                        <button><i class="fas fa-reply-all fa-2x"></i></button>
                    </NavLink>
                </article>
                
            </main>
        );

    }
   
}
export default ContactInfo;