import './index.scss';
import TituloAzul from '../TituloAzul';
import TagsTecnologia from '../TagsTecnologia';
import { useEffect, useState } from 'react';
import { tagsTecnologia } from '../../data/tagsTecnologia';
import { Link } from 'react-router-dom';
import CardProduto from '../CardProduto';
import produtosData from '../../data/produtos.json';
import type { ProdutosRelacionadosType } from '../../types/produtosRelacionados';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function ProdutosRelacionados({verTodos = false, tags = true}: ProdutosRelacionadosType) {

  const [tagAtivo, setTagAtivo] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Product | null>(null);
  const [quantidade, setQuantidade] = useState(1);


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
  const handleComprar = (product: Product) => {
    setProdutoSelecionado(product);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProdutoSelecionado(null);
  };

  // Aumentar e diminuir do contador
  const aumentar = () => {
    setQuantidade(prev => prev + 1);
  };

  const diminuir = () => {
    setQuantidade(prev => (prev > 1 ? prev - 1 : 1));
  };

    return (
        <div className="produtos-relacionados">
            <TituloAzul titulo='Produtos relacionados' link={verTodos} />
            {tags && (
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
                        onClickComprar={() => handleComprar(product)}
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

      {/* Modal */}
      {modalAberto && produtoSelecionado && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>

            <button className="modal-fechar" onClick={fecharModal}>✕</button>

            <div className="img-produto">
              <img src={produtoSelecionado.photo} alt={produtoSelecionado.productName} />
            </div>

            <div className="modal-info">
              <h3>{produtoSelecionado.productName}</h3>
              <p className="modal-preco">
                R$ {produtoSelecionado.price.toLocaleString('pt-BR')}
              </p>
              <div className='modal-desc'>
                <p>{produtoSelecionado.descriptionShort}</p>
                <Link to="/" className='ver-produto'>
                  Veja mais detalhes do produto ›
                </Link>
              </div>

              <div className="modal-footer">
                <div className="contador-quantidade">
                  <button onClick={diminuir}>−</button>
                  <span>{String(quantidade).padStart(2, '0')}</span>
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