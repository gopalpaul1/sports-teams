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
    console.log(props)

    const {strTeam, strTeamBadge, intFormedYear, strGender, strCountry, strDescriptionEN, strSport, strTwitter, strFacebook, strYoutube} = props.team

    const gender = (male, female) =>{
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
                <div style={{marginRight:"35%"}}>
                    <h1>{strTeam}</h1>
                    <p><img className="images-icon" src={found} alt=""/> Founded: {intFormedYear}</p>
                    <p><img className="images-icon" src={flag} alt=""/> Country: {strCountry}</p>
                    <p><img className="images-icon" src={football} alt=""/> Sport Type: {strSport}</p>
                    <p><img className="images-icon" src={Gender} alt=""/> Gender: {strGender}</p>
                </div>
                <div className="gender-image">
                    <img style={{width:"360px"}} src={gender(strGender)} alt=""/>
                </div>
            </div>

            <div className="Text">
                <p>{strDescriptionEN}</p>
            </div>

            <div className="SocialMedia">
               <div>
                    <Link target="/blank" to={`/media/${strTwitter}`}><img className="media-icon" src={twitter} alt=""/></Link>
               </div>
               <div>
                    <Link target="/blank" to={`/media/${strFacebook}`}><img className="media-icon" src={facebook} alt=""/></Link>
               </div>
               <div>
                    <Link target="/blank" to={`/media/${strYoutube}`}><img className="media-icon" src={youtube} alt=""/></Link>
               </div>
            </div>

        </div>

    );
};

export default TeamDetail;