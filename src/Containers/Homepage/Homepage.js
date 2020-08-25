import React from 'react';
import './Homepage.css';

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import Card from '../../Components/Card/Card';
import Pagebar from '../../Components/Pagebar/Pagebar';
import DefaultHome from '../../Components/DefaultHome/DefaultHome';

//code use
import { useState } from 'react';
import api from '../../Services/api';

//helpers
import { HandleDate } from '../../Helpers/HandleDate'
import { HandleDescription } from '../../Helpers/HandleDescription'
import { HandleRate } from '../../Helpers/HandleRate';


function Homepage() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState('')
    const totalPages = Math.floor(totalMovies / 20)

    function SelectPage(pages) {
        api.get(`${searchText}&page=${pages}`).then(response => {
            setLoading(true)
            const film = response.data
            setMovies([...film.results])
            setPage(pages)
            setLoading(false)
        })
    }
    function HandleForm(e) {
        e.preventDefault()
        api.get(searchText).then(response => {
            const film = response.data
            setMovies([...film.results])
            setTotalMovies(film.total_results)
            setLoading(false)            
        })
    }
    return (
        <div>
            <HeaderTop />
            <div className="search-bar-box">
                <form onSubmit={HandleForm}>
                    <input placeholder="Busque por um filme..." onChange={e => setSearchText(e.target.value)} />
                </form>
            </div>
            <main className="film-board-box">
                <div className="film-board">
                    {movies.length === 0 ? <DefaultHome /> : (
                        loading ? <div style={{ textAlign: 'center', fontFamily: 'Lato', color: '#2c62b8' }}><h2>Carregando...</h2></div> : (
                            movies.map((film, i) => {
                                return (
                                    <Card
                                        key={i}
                                        picpath={film.poster_path}
                                        title={film.title}
                                        release={HandleDate(film.release_date)}
                                        description={HandleDescription(film.overview)}
                                        rate={HandleRate(film.vote_average)}
                                        id={film.id}
                                        genre={film.genre_ids}
                                    />
                                )
                            })
                        )
                    )}
                </div>
            </main>
            {totalMovies > 20 ? <Pagebar total={totalPages} current={page} selectPage={SelectPage} /> : ''}
        </div>
    )
}

export default Homepage;
