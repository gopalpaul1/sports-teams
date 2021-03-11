import React from 'react';
import './TeamDetail.css'
import found from '../images/found 1.png'
import flag from '../images/flag (1) 1.png'
import football from '../images/football (1) 1.png'
import Gender from '../images/male-gender-sign 1.png'
import facebook from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import youtube from '../images/YouTube.png'
import { Link } from 'react-router-dom'
import Male from '../images/male.png'
import Female from '../images/female.png'



const TeamDetail = (props) => {

    const {strTeam, strTeamBadge, intFormedYear, strGender, strCountry, strDescriptionEN, strStadiumDescription, strSport, strTwitter, strFacebook, strYoutube} = props.team

    const gender = (male, female) => {

        if(male === strGender){
            return Male
        }
        if(female === strGender){
            return Female
            
        }
    }

    return (

        <div>
            
            <div className="Banner"><img className="banner-image" src={strTeamBadge} alt=""/></div>
            <div className="TeamDetails">
                <div className="detail-card">
                    <h1>{strTeam}</h1>
                    <p><img className="images-icon" src={found} alt=""/> Founded: {intFormedYear}</p>
                    <p><img className="images-icon" src={flag} alt=""/> Country: {strCountry}</p>
                    <p><img className="images-icon" src={football} alt=""/> Sport Type: {strSport}</p>
                    <p><img className="images-icon" src={Gender} alt=""/> Gender: {strGender}</p>
                </div>
                <div className="gender-image">
                    <img src={gender(strGender)} alt=""/>
                </div>
            </div>
            <div className="Text">
                <p>{strDescriptionEN}</p>
                <br/>
                <p>{strStadiumDescription}</p>
            </div>
            <div className="SocialMedia">
                <div>
                    <a href={`http://${strTwitter}`}><img className="media-icon" src={twitter} alt=""/></a>
                </div>
                <div>
                    <a href={`http://${strFacebook}`}><img className="media-icon" src={facebook} alt=""/></a>
                </div>
                <div>
                    <a href={`http://${strYoutube}`}><img className="media-icon" src={youtube} alt=""/></a>
                </div>
            </div>

        </div>

    );
};

export default TeamDetail;