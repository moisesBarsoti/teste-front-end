import "./index.scss";
import type { TagsTecnologiaType } from "../../types/tagsTecnologia";

export default function TagsTecnologia({isAtivo, onToggle, texto, title}: TagsTecnologiaType) {
    return (
        <div className="tags">
            <ul>
                <li>
                    <button className={`button-tags ${isAtivo ? 'button-tags-ativo' : ''}`} onClick={onToggle} title={title}>
                        {texto}
                    </button>
                </li>
            </ul>
        </div>
    )
}