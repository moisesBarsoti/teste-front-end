import './index.scss'
import type { CardVitrineType } from '../../types/cardVitrine';

export default function CardVitrine({src, alt, span, isAtivo, onToggle}: CardVitrineType) {
    return (
        <button className="card-vitrine" title="Ver produtos" onClick={onToggle}>
            <div className={`container-icon ${isAtivo ? 'ativo' : ''}`}>
                <img src={src} alt={alt} className='icon'/>
            </div>
            <span className={`card-vitrine-span ${isAtivo ? 'ativo' : ''}`}>{span}</span>
        </button>
    )
}
