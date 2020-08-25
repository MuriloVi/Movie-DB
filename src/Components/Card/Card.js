import React from 'react';
import './Card.css';

//codeuse
import { Link } from 'react-router-dom'
import { HandleGenre } from '../../Helpers/HandleGenre';


function Card(props) {
    return (
        <div>
            <Link to={{
                pathname: `film/${props.id}`,
                state: { id: props.id }
            }}
            >
                <div className="card-box">
                    <div className="card-poster">
                        {props.picpath === null ? <img alt="" src='https://i.imgur.com/3ZWOC55.png' /> : <img alt="" src={`https://image.tmdb.org/t/p/w200/${props.picpath}`} />}
                    </div>
                    <div className="card-info">
                        <div className="film-top-data">
                            <div className="top-info-box">
                                <div className="top-info">
                                    <h1>{props.title}</h1>
                                </div>
                                <div className="release">
                                    <h2>{props.release}</h2>
                                    <div className="film-rate" title="score">
                                        <p>{props.rate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="film-specs-data">
                            <p>{props.description}</p>
                        </div>
                        <div className="film-genre-data">
                            {props.genre.map((genre, i) => {
                                return <p className="genres" key={i}>{HandleGenre(genre)}</p>
                            })}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card;
