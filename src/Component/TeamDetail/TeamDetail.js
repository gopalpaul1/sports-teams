import React from 'react';
import './TeamDetail.css'
import found from '../images/found 1.png'
import flag from '../images/flag (1) 1.png'
import football from '../images/football (1) 1.png'
import facebook from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import youtube from '../images/YouTube.png'
import { Link } from 'react-router-dom';


const TeamDetail = (props) => {
    console.log(props)

    const {strTeam, strTeamBadge, intFormedYear, strCountry, strSport, strTwitter, strFacebook, strYoutube} = props.team


    return (
        <div>
            <div className="Banner"><img className="banner-image" src={strTeamBadge} alt=""/></div>
            <div className="TeamDetails">
                <h1>{strTeam}</h1>
                <p><img className="images-icon" src={found} alt=""/> Founded: {intFormedYear}</p>
                <p><img className="images-icon" src={flag} alt=""/> Country: {strCountry}</p>
                <p><img className="images-icon" src={football} alt=""/> Sport Type: {strSport}</p>
            </div>
            <div className="Text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <br/>
                <br/>
                <br/>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

            <div className="SocialMedia">
               <div>
                    <Link target="/blank" to={`/media/${strTwitter}`}><img className="media-icon" src={twitter} alt=""/></Link>
               </div>
               <div>
                    <Link target="/blank" to={`/media/${strFacebook}`}><img className="media-icon" src={facebook} alt=""/></Link>
               </div>
               <div>
                    <Link target="/blank" to={`/media/${strFacebook}`}><img className="media-icon" src={youtube} alt=""/></Link>
               </div>
            </div>

        </div>

    );
};

export default TeamDetail;