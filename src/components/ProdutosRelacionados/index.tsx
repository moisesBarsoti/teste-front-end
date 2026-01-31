import './index.scss';
import TituloAzul from '../TituloAzul';
import TagsTecnologia from '../TagsTecnologia';
import { useEffect, useState } from 'react';
import { tagsTecnologia } from '../../data/tagsTecnologia';
import { Link } from 'react-router-dom';
import CardProduto from '../CardProduto';
import produtosData from '../../data/produtos.json';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function ProdutosRelacionados() {

  const [tagAtivo, setTagAtivo] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Produtos do JSON   
  useEffect(() => {
    setProducts(produtosData.products);
    setCurrentSlide(0);
  }, [tagAtivo]);

  // Filtrando os produtos pela tag
  const produtosFiltrados = (() => {
    const tagAtual = tagsTecnologia[tagAtivo]?.label.toUpperCase();

    if (tagAtual === 'CELULAR') {
      return products.filter(p =>
        p.productName.toUpperCase().includes('IPHONE')
      );
    }

    return [];
  })();

  // Carrossel
  const itensPorSlide = 4;
  const slides: Product[][] = [];

  for (let i = 0; i < produtosFiltrados.length; i += itensPorSlide) {
    slides.push(produtosFiltrados.slice(i, i + itensPorSlide));
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
  const handleComprar = (productName: string) => {
    console.log('Comprar:', productName);
  };

    return (
        <div className="produtos-relacionados">
            <TituloAzul titulo='Produtos relacionados' link={false} />
            <nav className="tags-container">
                {tagsTecnologia.map((tag, index) => (
                <TagsTecnologia
                    key={index}
                    isAtivo={tagAtivo === index}
                    onToggle={() => setTagAtivo(index)}
                    texto={tag.label}
                    title={tag.title}
                />
                ))}
                <Link to="/produtos" className="ver-todos" title="Ver todos os produtos">
                    VER TODOS
                 </Link>
            </nav>
            
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
                    const valorOriginal = `R$ ${Math.round(product.price * 1.2).toLocaleString('pt-BR')}`;
                    const valorDesconto = `R$ ${product.price.toLocaleString('pt-BR')}`;
                    const valorParcela = `R$ ${Math.round(product.price / 12).toLocaleString('pt-BR')}`;

                    return (
                      <CardProduto
                        key={`${product.productName}-${index}`}
                        produto={product.productName}
                        imagem={product.photo}
                        valorOriginal={valorOriginal}
                        valorDesconto={valorDesconto}
                        quntidadeParcelas={12}
                        valorParcela={valorParcela}
                        onClickComprar={() => handleComprar(product.productName)}
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
          <p>Nenhum produto para "{tagsTecnologia[tagAtivo]?.label}"</p>
        )}
      </div>
        </div>
    )
}