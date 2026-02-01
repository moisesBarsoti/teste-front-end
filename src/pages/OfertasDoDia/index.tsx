import BannerBlackFriday from "../../components/BannerBlackFriday";
import ProdutosRelacionados from "../../components/ProdutosRelacionados";
import VitrineCategoria from "../../components/VitrineCategoria";
import ContainerParceiros from "../../components/ContainerParceiros";
import ContainerMarcas from "../../components/ContainerMarcas";

export default function OfertasDoDia() {
    return (
        <section className="ofertas-do-dia">
            <BannerBlackFriday />
            
            <VitrineCategoria />
            
            <ProdutosRelacionados />
            
            <ContainerParceiros />
            
            <ProdutosRelacionados verTodos={true} tags={false} />
            
            <ContainerParceiros />

            <ContainerMarcas />
        </section>
    )
}