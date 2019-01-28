import React from 'react';

/**
 * DisplayContactInfo:
 *          - Affichage des données
 * 
 * props :
 * @param {icon} htmlTag ==> icône 
 * @param {title} String ==> Titre de l'information 
 * @param {info} String ==>  L'information 
 */

const DisplayContactInfo = ({icon,title,info}) =>{
    return (
        <tr>
            <td>{icon}</td>
            <td>{title}</td>
            <td>{info}</td>
        </tr>
    )
}

export default DisplayContactInfo;