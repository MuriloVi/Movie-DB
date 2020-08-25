import React, { useState } from 'react';
import './DefaultHome.css';
import { useEffect } from 'react'
import Axios from 'axios';

//Components 
import Card from '../Card/Card'

//helpers
import { HandleDate } from '../../Helpers/HandleDate'
import { HandleDescription } from '../../Helpers/HandleDescription'
import { HandleRate } from '../../Helpers/HandleRate'

function DefaultHome(props) {
    const [pops, setPops] = useState([])
    useEffect(() => {
        Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=6449bb19e8dc187f32dd62aa49300097&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(response => {
            const firstpops = response.data.results
            setPops(firstpops.slice(0, 5))
        })
    }, [])
    return (
        <div className="default-box">
            <div style={{ textAlign: 'center', fontFamily: 'Lato', color: '#2c62b8' }}><h3>Mais Populares Hoje!</h3></div>

            <div className="default-board">
                {pops.map((pop, i) => {
                    return (
                        <Card
                            key={i}
                            picpath={pop.poster_path}
                            title={pop.title}
                            release={HandleDate(pop.release_date)}
                            description={HandleDescription(pop.overview)}
                            rate={HandleRate(pop.vote_average)}
                            id={pop.id}
                            genre={pop.genre_ids}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default DefaultHome;
