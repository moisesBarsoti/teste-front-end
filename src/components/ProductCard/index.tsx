import type { ProductCardType } from "../../types/ProductCardType";
import "./index.scss";

export default function ProductCard({product, image, originallValue, discountValue, quantityInstallments, installmentValue, onClickBuy}: ProductCardType) {
  return (
    <div className="product-card">
      <figure>
        <img src={image} alt={product} />
        <figcaption>{product}</figcaption>
      </figure>
      <div className="values">
        <span className="original-value">{originallValue}</span>
        <p className="discount-value">{discountValue}</p>
        <span className="installments">
          ou {quantityInstallments}x de {installmentValue} sem juros
        </span>
        <p className="shipping">Frete grátis</p>
      </div>
      <button title="Comprar produto" onClick={onClickBuy}>
        COMPRAR
      </button>
    </div>
  );
}
