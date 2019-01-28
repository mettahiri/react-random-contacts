import React from 'react';
import {NavLink} from "react-router-dom";
/**
 * DisplayContacts :
 *          -Affichge de la liste de contact
 * @param {*} props 
 */
const DisplayContactsList = (props) => {

    const gender = props.gender === "male" ? "fa-mars" : "fa-venus";
    return (
        <article className="contact">
             <img src={props.picture.medium} alt={props.name.first+" "+props.name.last} />
             <div  className="info">
                <h2>
                    <span>{props.name.first+" "+props.name.last.toUpperCase()}</span> 
                </h2>
                <h4>
                    <i className="fas fa-map-marker-alt"></i>  
                     <span> { props.location.city } </span> 
                     <span> { props.location.state } </span>
                </h4>
             </div>
            <i className={`fas ${gender}`}></i> 
             <NavLink to={`/contactInfos/${props.id}`} >
                <button >
                    <span>Infos... </span>
                    <i className="fas fa-arrow-circle-right fa-2x"></i>
                </button>
            </NavLink>
        </article>
    )

}

export default DisplayContactsList;