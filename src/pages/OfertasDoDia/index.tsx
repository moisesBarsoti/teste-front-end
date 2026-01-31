import "./index.scss";
import BannerBlackFriday from "../../components/BannerBlackFriday";
import CardParceiro from "../../components/CardParceiro";
import ProdutosRelacionados from "../../components/ProdutosRelacionados";
import VitrineCategoria from "../../components/VitrineCategoria";

export default function OfertasDoDia() {
    return (
        <section className="ofertas-do-dia">
            <BannerBlackFriday />
            <VitrineCategoria />
            <ProdutosRelacionados />
            <div className="container-parceiros">
                <CardParceiro />
                <CardParceiro />
            </div>
        </section>
    )
}