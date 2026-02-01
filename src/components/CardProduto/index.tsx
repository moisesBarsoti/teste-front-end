import type { CardProdutoType } from "../../types/cardProduto";
import "./index.scss";

export default function CardProduto({produto, imagem, valorOriginal, valorDesconto, quntidadeParcelas, valorParcela, onClickComprar}: CardProdutoType) {
    return (
        <div className="card-produto">
            <figure>
                <img src={imagem} alt={produto} />
                <figcaption>
                    {produto}
                </figcaption>
            </figure>
            <div className="valores">
                <span className="valor-original">{valorOriginal}</span>
                <p className="valor-desconto">{valorDesconto}</p>
                <span className="parcelas">ou {quntidadeParcelas}x de {valorParcela} sem juros</span>
                <p className="frete">Frete grátis</p>
            </div>
            <button title="Comprar produto" onClick={onClickComprar}>
                COMPRAR
            </button>
        </div>
    )
}