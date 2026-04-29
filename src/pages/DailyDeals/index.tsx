import BannerBlackFriday from "../../components/BannerBlackFriday";
import ContainerMark from "../../components/ContainerMark";
import ContainerPartner from "../../components/ContainerPartner";
import Newsletter from "../../components/Newsletter";
import RelatedProducts from "../../components/RelatedProducts";
import ShowcaseCategory from "../../components/ShowcaseCategory";

export default function DailyDeals() {
    return (
        <section aria-label="Ofertas do Dia">
            <BannerBlackFriday />

            <ShowcaseCategory />

            <RelatedProducts tags />

            <ContainerPartner />

            <RelatedProducts tags seeAll/>

            <ContainerPartner />

            <ContainerMark />

            <RelatedProducts tags seeAll/>

        </section>
    )
}