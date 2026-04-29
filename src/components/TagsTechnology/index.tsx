import type { TagsTechnologyType } from "../../types/TagsTechnologyType";

export default function TagsTechnology({isAtivo, onToggle, text, title}: TagsTechnologyType) {
  return (
    <div className="tags">
      <ul>
        <li>
          <button
            className={`button-tags ${isAtivo ? "button-tags-ativo" : ""}`}
            onClick={onToggle}
            title={title}
          >
            {text}
          </button>
        </li>
      </ul>
    </div>
  );
}
