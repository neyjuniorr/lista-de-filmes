import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import api from '../../services/api'; 
import './home.css';


//URL DA API: https://api.themoviedb.org/3/movie/11?api_key=6ccc1f58dd7b08bc7c3de8e0ac54f79b


function Home() {
    const [filmes, SetFilmes] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key:"6ccc1f58dd7b08bc7c3de8e0ac54f79b",
                    language: "pt-BR",
                    page: 1,
                }
            })

            SetFilmes(response.data.results.slice(0,10))
            setLoading(false);
        }    

        loadFilmes();

    }, [])
    
    if(loading){
        return(
            <div className="loading">
                <h2>
                    Carregando Filmes.. 
                </h2>

            </div>
        )
    }


    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                           <strong>{filme.title}</strong>  
                           <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/> 
                           <Link to={`/filme/${filme.id}`}>Acessar</Link>

                        </article>
                    )
                })}


            </div>

        </div>
    )
}

export default Home;