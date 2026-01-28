import './index.css';
import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import Truck from "../../assets/icons/Truck.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import Logo from "../../assets/icons/Logo.svg"; 
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";
import Caixa from "../../assets/icons/Caixa.svg";
import Heart from "../../assets/icons/Heart.svg";
import UserCircle from "../../assets/icons/UserCircle.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";

export default function Header() {
    return (
        <header aria-label="Cabeçalho da página">
            <ul>
                <li>
                    <img src={ShieldCheck} alt="Icone ShieldCheck" />
                    <p>Compra <span>100% segura</span></p>
                </li>
                <li>
                    <img src={Truck} alt="Icone Truck" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </li>
                <li>
                    <img src={CreditCard} alt="Icone CreditCard" />
                    <p><span>Parcele</span> suas compras</p>
                </li>
            </ul>
            <div className="sectionLogo">
                <span>
                    <img src={Logo} alt="Logo Econverse" />
                </span>
                <div className="pesquisa-wrapper">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                        className="pesquisa-input"
                        aria-label="Campo de pesquisa"
                    />
                    <button className="pesquisa-button" type="submit" aria-label="Botão de pesquisa" title="Pesquisar">
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
            <nav></nav>
        </header>
    )
}