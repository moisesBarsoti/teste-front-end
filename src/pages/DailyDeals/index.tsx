import BannerBlackFriday from "../../components/BannerBlackFriday";
import ContainerPartner from "../../components/ContainerPartner";
import RelatedProducts from "../../components/RelatedProducts";
import ShowcaseCategory from "../../components/ShowcaseCategory";

export default function DailyDeals() {
    return (
        <section aria-label="Ofertas do Dia">
            <BannerBlackFriday />

            <ShowcaseCategory />

            <RelatedProducts tags />

            <ContainerPartner />
        </section>
    )
}