import Logo from "../../assets/icons/Logo.svg"; 
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import Caixa from "../../assets/icons/Caixa.svg";
import Heart from "../../assets/icons/Heart.svg";
import UserCircle from "../../assets/icons/UserCircle.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import { Link } from "react-router-dom";
import './index.scss';

export default function MainHeader() {
  return (
    <div className="sectionLogo">
      <div className="sectionLogoContent">
        <Link to="/">
          <img src={Logo} alt="Logo Econverse" />
        </Link>

        <div className="pesquisa-wrapper">
          <input
            type="text"
            placeholder="O que você está buscando?"
            className="pesquisa-input"
            aria-label="Campo de pesquisa"
          />
          <button className="pesquisa-button" type="submit">
            <img src={MagnifyingGlass} alt="Icone MagnifyingGlass" />
          </button>
        </div>
        <ul>
          <li>
            <button title="Meus Pedidos">
              <img src={Caixa} alt="Icone Caixa" />
            </button>
          </li>
          <li>
            <button title="Lista de Desejos">
              <img src={Heart} alt="Icone Heart" />
            </button>
          </li>
          <li>
            <button title="Minha Conta">
              <img src={UserCircle} alt="Icone UserCircle" />
            </button>
          </li>
          <li>
            <button title="Carrinho de Compras">
              <img src={ShoppingCart} alt="Icone ShoppingCart" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
