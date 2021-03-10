import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Teams.css'

const Teams = (props) => {
    console.log(props)

    const {strTeam, strTeamBadge, strSport, idTeam} = props.teams

    const history = useHistory()

    const handleClick = (idTeam) => {

        history.push(`/details/${idTeam}`)
    }


    return (

        <div className="Team">
            <img className="images" src={strTeamBadge} alt="images"/>
            <h3>{strTeam}</h3>
            <p>Sports Type: {strSport}</p>
            <p>ID: {idTeam}</p>
            <button className="Button" onClick={() => handleClick(idTeam)}>
                Explore <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight} />
                </button>
            
        </div>
        
    );
};

export default Teams;