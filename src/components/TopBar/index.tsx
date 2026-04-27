import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import Truck from "../../assets/icons/Truck.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import './index.scss';

export default function TopBar() {
    return (
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
    )
}