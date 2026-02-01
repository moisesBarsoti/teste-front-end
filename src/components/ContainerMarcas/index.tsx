import "./index.scss"
import TituloAzul from "../TituloAzul"
import Marca from "../Marca"
import Logo from "../../assets/icons/Logo.svg";


export default function ContainerMarcas() {
    return (
        <div className="container-marcas">
            <TituloAzul titulo="Navegue por marcas" linha={false}/>
            <ul>
                <li>
                    <Marca logo={Logo} alt="Econverse"/>
                </li>
                <li>
                    <Marca logo={Logo} alt="Econverse"/>
                </li>
                <li>
                    <Marca logo={Logo} alt="Econverse"/>
                </li>
                <li>
                    <Marca logo={Logo} alt="Econverse"/>
                </li>
                <li>
                    <Marca logo={Logo} alt="Econverse"/>
                </li>
            </ul>
        </div>
    )   
}