import './index.scss';
import TituloAzul from '../TituloAzul';
import TagsTecnologia from '../TagsTecnologia';
import { useState } from 'react';
import { tagsTecnologia } from '../../data/tagsTecnologia';
import { Link } from 'react-router-dom';

export default function ProdutosRelacionados() {

    const [tagAtivo, setTagAtivo] = useState(0);

    return (
        <div className="produtos-relacionados">
            <TituloAzul titulo='Produtos relacionados' link={false} />
            <nav className="tags-container">
                {tagsTecnologia.map((tag, index) => (
                <TagsTecnologia
                    key={index}
                    isAtivo={tagAtivo === index}
                    onToggle={() => setTagAtivo(index)}
                    texto={tag.label}
                    title={tag.title}
                />
                ))}
                <Link to="/produtos" className="ver-todos" title="Ver todos os produtos">
                    VER TODOS
                 </Link>
            </nav>
        </div>
    )
}