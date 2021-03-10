import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetail from '../TeamDetail/TeamDetail';
import './Details.css'


const Details = () => {

    let { idTeam } = useParams();

    const [team, setTeam] = useState([])

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`

        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))

    }, [])

    return (
        <div>

            <div>
                {
                    team.map(team => <TeamDetail team = {team} />)
                }
            </div>

        </div>
    );
};

export default Details;