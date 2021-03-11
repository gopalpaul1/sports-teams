import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
    
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))

    }, [])

    return (

        <div className="Container">

            <div className="TeamTracker">
                <h1 className="TeamText">Sports Teams</h1>
            </div>
            <div className="Teams">
                {
                    teams.map(team => <Teams teams = {team} />)
                }
            </div>
            
        </div>
    );
};

export default Home;