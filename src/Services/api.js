import axios from 'axios'

const key = '6449bb19e8dc187f32dd62aa49300097'


const api = axios.create({
    baseURL:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&&query=`,
    
})

export default api;