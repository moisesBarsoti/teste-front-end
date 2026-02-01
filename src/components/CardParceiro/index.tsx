import "./index.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function CardParceiro({ direction }: { direction: "left" | "right" }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [ativo, setAtivo] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAtivo(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card-parceiro ${direction} ${ativo ? "ativo" : ""}`}
    >
      <img src="./img-parceiros.png" alt="Imagem loja da Apple" />
      <div className="content">
        <h4>Parceiros</h4>
        <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
        <Link to="" className="link-parceiro">CONFIRA</Link>
      </div>
    </div>
  );
}