import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: now_playing?api_key=6ccc1f58dd7b08bc7c3de8e0ac54f79b&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api; 