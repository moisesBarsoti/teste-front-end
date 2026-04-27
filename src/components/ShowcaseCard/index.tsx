import './index.scss'
import type { ShowcaseCardType } from '../../types/showcaseCardType';

export default function ShowcaseCard({src, alt, span, isAtivo, onToggle}: ShowcaseCardType) {
    return (
        <button className="card-vitrine" title="Ver produtos" onClick={onToggle}>
            <div className={`container-icon ${isAtivo ? 'ativo' : ''}`}>
                <img src={src} alt={alt} className='icon'/>
            </div>
            <span className={`card-vitrine-span ${isAtivo ? 'ativo' : ''}`}>{span}</span>
        </button>
    )
}
