import './index.scss';
import { useEffect, useRef, useState } from 'react';
import { tagsTechnologyData } from '../../data/tagsTechnologyData';
import { Link } from 'react-router-dom';
import BlueTitle from '../BlueTitle';
import TagsTechnology from '../TagsTechnology';
import ProductCard from '../ProductCard';
import type { RelatedProductsType } from '../../types/RelatedProductsType';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function RelatedProducts({seeAll = false, tags = true}: RelatedProductsType) {

  const [tagActive, setTagActive] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);


  // Produtos do JSON   
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api-produtos');

        const data = await response.json();

        setProducts(data.products);
        setCurrentSlide(0);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, [tagActive]);

  // Filtrando os produtos pela tag
  const filteredsProducts = (() => {
    const currentTag = tagsTechnologyData[tagActive]?.label.toUpperCase();

    if (currentTag === 'CELULAR') {
      return products.filter(p =>
        p.productName.toUpperCase().includes('IPHONE')
      );
    }

    return [];
  })();

  // Carrossel
  const itemsPerSlide = 4;
  const slides: Product[][] = [];

  for (let i = 0; i < filteredsProducts.length; i += itemsPerSlide) {
    slides.push(filteredsProducts.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;

  // Navegação do carrossel
  const proximoSlide = () => {
    if (totalSlides === 0) return;
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const anteriorSlide = () => {
    if (totalSlides === 0) return;
    setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
  };

  // Quando clicar em comprar produto 
  const handleComprar = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const fecharModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Aumentar e diminuir do contador
  const aumentar = () => {
    setQuantity(prev => prev + 1);
  };

  const diminuir = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Animação do Scrool
  useEffect(() => {
  if (!sectionRef.current) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -200px 0px'
    }
  );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

    return (
        <div 
          ref={sectionRef}
          className={`produtos-relacionados ${visible ? 'ativo' : ''}`
        }>
            <BlueTitle title='Produtos relacionados' link={seeAll} />
            {tags && (
              <nav className="tags-container">
                  {tagsTechnologyData.map((tag, index) => (
                  <TagsTechnology
                      key={index}
                      isAtivo={tagActive === index}
                      onToggle={() => setTagActive(index)}
                      text={tag.label}
                      title={tag.title}
                  />
                  ))}
                  <Link to="/produtos" className="ver-todos" title="Ver todos os produtos">
                      VER TODOS
                  </Link>
              </nav>
            )}
            
            {/* Cards */}
            <div className="conteudo-dinamico">
                 {slides.length > 0 ? (
                  <div className="carrossel-container">
                    <button className="carrossel-btn anterior" onClick={anteriorSlide} title="Anterior">
                      ‹
                    </button>
                 <div className="carrossel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` 
                }}>
                    {slides.map((slide, slideIndex) => (
                     <div className="carrossel-slide" key={slideIndex}>
                  {slide.map((product, index) => {
                    const originalValue = `R$ ${Math.round(product.price * 1.2).toLocaleString('pt-BR')}`;
                    const discountValue = `R$ ${product.price.toLocaleString('pt-BR')}`;
                    const installmentValue = `R$ ${Math.round(product.price / 12).toLocaleString('pt-BR')}`;

                    return (
                      <ProductCard
                        key={`${product.productName}-${index}`}
                        product={product.productName}
                        image={product.photo}
                        originallValue={originalValue}
                        discountValue={discountValue}
                        quantityInstallments={12}
                        installmentValue={installmentValue}
                        onClickBuy={() => handleComprar(product)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>

            <button className="carrossel-btn proximo" onClick={proximoSlide} title="Próximo">
              ›
            </button>
          </div>
        ) : (
          <p>Nenhum produto para "{tagsTechnologyData[tagActive]?.label}"</p>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>

            <button className="modal-fechar" onClick={fecharModal}>✕</button>

            <div className="img-produto">
              <img src={selectedProduct.photo} alt={selectedProduct.productName} />
            </div>

            <div className="modal-info">
              <h3>{selectedProduct.productName}</h3>
              <p className="modal-preco">
                R$ {selectedProduct.price.toLocaleString('pt-BR')}
              </p>
              <div className='modal-desc'>
                <p>{selectedProduct.descriptionShort}</p>
                <Link to="/" className='ver-produto'>
                  Veja mais detalhes do produto ›
                </Link>
              </div>

              <div className="modal-footer">
                <div className="contador-quantidade">
                  <button onClick={diminuir}>−</button>
                  <span>{String(quantity).padStart(2, '0')}</span>
                  <button onClick={aumentar}>+</button>
                </div>

                <button className="modal-comprar">
                  COMPRAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}