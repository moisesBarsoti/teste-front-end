import Logo from "../../assets/icons/Logo.svg";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import Caixa from "../../assets/icons/Caixa.svg";
import Heart from "../../assets/icons/Heart.svg";
import UserCircle from "../../assets/icons/UserCircle.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import { Link } from "react-router-dom";
import "./index.scss";

export default function MainHeader() {
  return (
    <div className="sectionLogo">
      <div className="sectionLogoContent">
        <Link to="/" aria-label="Ir para a página inicial">
          <img src={Logo} alt="Econverse" />
        </Link>

        <div className="pesquisa-wrapper">
          <input
            type="text"
            placeholder="O que você está buscando?"
            className="pesquisa-input"
            aria-label="Buscar produtos"
          />

          <button
            className="pesquisa-button"
            type="submit"
            aria-label="Pesquisar"
          >
            <img src={MagnifyingGlass} alt="" aria-hidden="true" />
          </button>
        </div>

        <ul aria-label="Ações do usuário">
          <li>
            <button aria-label="Meus pedidos" title="Meus pedidos">
              <img src={Caixa} alt="" aria-hidden="true" />
            </button>
          </li>

          <li>
            <button aria-label="Lista de desejos" title="Lista de desejos">
              <img src={Heart} alt="" aria-hidden="true" />
            </button>
          </li>

          <li>
            <button aria-label="Minha conta" title="Minha conta">
              <img src={UserCircle} alt="" aria-hidden="true" />
            </button>
          </li>

          <li>
            <button
              aria-label="Carrinho de compras"
              title="Carrinho de compras"
            >
              <img src={ShoppingCart} alt="" aria-hidden="true" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
