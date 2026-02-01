import { Link } from 'react-router-dom';
import './index.scss';
import type { TituloAzulType } from '../../types/tituloAzul';

export default function TituloAzul({link, titulo, linha = true}: TituloAzulType) {    
    return (
        <div className="container-titulo-azul">
            <div className="titulo-azul">
                {linha && (
                    <div className="linha"></div>
                )}
                <h3>{titulo}</h3>
                {linha && (
                    <div className="linha"></div>
                )}
            </div>
            {link && (
                <div className="container-link">
                    <Link to="/produtos" className="link-ver-todos" title="Ver todos os produtos">Ver todos</Link>
                </div>
            )}
        </div>
    )
}