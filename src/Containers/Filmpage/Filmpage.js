import React from 'react';
import './Filmpage.css';

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'

//code use
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Axios from 'axios';

//helpers
import { HandleDate } from '../../Helpers/HandleDate';
import { HandleRate } from '../../Helpers/HandleRate';
import { HandleLanguage } from '../../Helpers/HandleLanguage'


function Filmpage() {
    const [loading, setLoading] = useState(true);
    const [film, setFilm] = useState();
    const [video, setVideo] = useState()
    let { id } = useParams()

    useEffect(() => {

        Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6449bb19e8dc187f32dd62aa49300097&language=pt-BR`).then(response => {
            const filme = response.data
            setFilm(filme)
            setLoading(false)
        })
        Axios.get(`https://api.themoviedb.org/3/movie/${id}%7Bmovie_id%7D/videos?api_key=6449bb19e8dc187f32dd62aa49300097&language=pt-BR`).then(response => {
            const videox = response.data
            setVideo(videox.results[0])
        })
    }, [id])

    return (
        <div>
            <HeaderTop />
            {loading ? <div style={{ textAlign: 'center', fontFamily: 'Lato', color: '#2c62b8' }}><h2>Carregando...</h2></div> : (
                <main className="filmpage-box">
                    <div className="filmpage-topinfo">
                        <h1>{film.title}</h1>
                        <h3>{HandleDate(film.release_date)}</h3>
                    </div>
                    <div className="filmpage-details">
                        <div className="filmpage-info">
                            <div className="field">
                                <div ><h2 className="field-title">Sinopse</h2></div>
                                <p id="overview-">{film.overview === '' ? 'Ainda não há sinopse para este filme' : film.overview}</p>
                            </div>
                            <div className="field">
                                <div ><h2 className="field-title">Informações</h2></div>
                                <div className="filmpage-plus">
                                    <div>
                                        <h3>Situação</h3>
                                        <p>{film.status === 'Released' ? 'Lançado' : 'Não Lançado'}</p>
                                    </div>
                                    <div>
                                        <h3>Idioma</h3>
                                        <p>{HandleLanguage(film.original_language)}</p>
                                    </div>
                                    <div>
                                        <h3>Duração</h3>
                                        <p>{`${Math.floor(film.runtime / 60)}h ${Math.floor(film.runtime % 60)}m`}</p>
                                    </div>
                                    <div>
                                        <h3>Orçamento</h3>
                                        <p>{film.budget > 0 ? `$${film.budget},00` : 'Sem Informações'}</p>
                                    </div>
                                    <div>
                                        <h3>Receita</h3>
                                        <p>{film.revenue > 0 ? `$${film.revenue},00` : 'Sem Informações'}</p>
                                    </div>
                                    <div>
                                        <h3>Lucro</h3>
                                        <p>{film.revenue > 0 ? `$${film.revenue - film.budget},00` : 'Sem informações'}</p>
                                    </div>
                                </div>
                                <div className="filmpage-bottom">
                                    <div className="filmpage-genres">
                                        {film.genres.map((genre, i) => <div key={i} className="genre"><p>{genre.name}</p></div>)}
                                    </div>
                                    <div className="filmpage-score">
                                        {HandleRate(film.vote_average)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filmpage-poster">
                            <img alt="" src={`https://image.tmdb.org/t/p/w300/${film.poster_path}`} />
                        </div>
                    </div>
                    <div className="video">
                        {video ? (
                            <iframe width="100%" height="500px" title={video}
                                src={`https://www.youtube.com/embed/${video.key}`}>
                            </iframe>
                        ) : <h2 style={{ margin: 'auto' }}>Desculpe, não encontramos o trailer</h2>}

                    </div>
                </main>
            )}
        </div>
    )
}

export default Filmpage;
