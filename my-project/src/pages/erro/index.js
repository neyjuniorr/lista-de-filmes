import {Link} from 'react-router-dom';
import Home from '../Home';
import './erro.css';

function Erro(){
    return(
        <div className='not-found'>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/" element={Home}> Voltar para o menu inicial. </Link>
        </div>
    )
}

export default Erro;