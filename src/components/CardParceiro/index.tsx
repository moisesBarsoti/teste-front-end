import { Link } from "react-router-dom"
import "./index.scss"

export default function CardParceiro() {
    return (
        <div className="card-parceiro">
            <img src="./img-parceiros.png" alt="" />
            <div className="content">
                <h4>Parceiros</h4>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                <Link to="" className="link-parceiro" title="Ver Parceiro">CONFIRA</Link>
            </div>
        </div>
    )
}