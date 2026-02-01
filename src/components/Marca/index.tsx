import "./index.scss"
import type { MarcaType } from "../../types/marca";

export default function Marca({logo, alt}: MarcaType) {
    return (
        <div className="marca">
            <img src={logo} alt={alt} />
        </div>
    )
}