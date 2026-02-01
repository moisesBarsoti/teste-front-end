import './index.scss'

export default function BannerBlackFriday() {
    return (
        <div className="banner-black-friday">
            <img src="./img-black-friday.png" alt="Banner Black Friday" />
            <div className="content">
                <h1>Venha conhecer nossas <br /> promoções</h1>
                <h2><span>50% Off</span> nos produtos</h2>
                <a href="#produtos" className="btn-produto" title="Ver produtos">Ver Produtos</a>
            </div>
        </div>
    )
}