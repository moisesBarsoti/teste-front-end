import { useState } from "react";
import { showcaseCategoriesData } from "../../data/showcaseCategoriesData";
import ShowcaseCard from "../ShowcaseCard";
import './index.scss';

export default function ShowcaseCategory() {

    const [categoriaAtiva, setCategoriaAtiva] = useState(0);

  return (
    <div className="vitrine-categoria">
      {showcaseCategoriesData.map((categoria, index) => (
        <div
          key={index}
          className="card-vitrine-item"
          style={{ "--index": index } as React.CSSProperties}
        >
          <ShowcaseCard
            src={categoria.src}
            alt={categoria.alt}
            span={categoria.span}
            isAtivo={categoriaAtiva === index}
            onToggle={() => setCategoriaAtiva(index)}
          />
        </div>
      ))}
    </div>
  );
}
