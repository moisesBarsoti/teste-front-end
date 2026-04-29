import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

export default function PartnerCard({ direction }: { direction: "left" | "right" }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 },
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card-parceiro ${direction} ${active ? "ativo" : ""}`}
    >
      <img src="./img-parceiros.png" alt="Imagem loja da Apple" />
      <div className="content">
        <h4>Parceiros</h4>
        <p>
          Lorem ipsum dolor sit <br /> amet, consectetur
        </p>
        <Link to="" className="link-partner">
          CONFIRA
        </Link>
      </div>
    </div>
  );
}
