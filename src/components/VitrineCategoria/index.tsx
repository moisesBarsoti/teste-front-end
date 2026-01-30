import './index.scss';
import CardVitrine from '../CardVitrine';
import { vitrineCategoria } from '../../data/vitrineCategoria';
import { useState } from 'react';

export default function VitrineCategoria() {
    const [categoriaAtiva, setCategoriaAtiva] = useState<number | null>(0);
    return (
        <div className="vitrine-categoria">
            {vitrineCategoria.map((categoria, index) => (
                <CardVitrine 
                    key={index}
                    src={categoria.src}
                    alt={categoria.alt}
                    span={categoria.span}
                    isAtivo={categoriaAtiva === index}
                    onToggle={() => setCategoriaAtiva(index)}
                />
            ))}
        </div>
    )
}