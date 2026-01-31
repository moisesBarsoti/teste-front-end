import './index.scss';
import TituloAzul from '../TituloAzul';
import TagsTecnologia from '../TagsTecnologia';
import { useEffect, useState } from 'react';
import { tagsTecnologia } from '../../data/tagsTecnologia';
import { Link } from 'react-router-dom';
import CardProduto from '../CardProduto';

interface Product {
    productName: string;
    photo: string;
    price: number;
}

export default function ProdutosRelacionados() {

    const [tagAtivo, setTagAtivo] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        .then(response => response.json())
        .then(data => {
            if (data.success) setProducts(data.products);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
            setIsLoading(false);
        });
    }, [])

    // Função para filtrar produtos pela tag ativa
    const produtosFiltrados = products.filter(product => {
     const tagLabel = tagsTecnologia[tagAtivo]?.label || '';
     return tagLabel === 'CELULAR' 
        ? product.productName.toUpperCase().includes('IPHONE') || product.productName.toUpperCase().includes('CELULAR')
        : product.productName.toUpperCase().includes(tagLabel);
    }).slice(0, 8);

    // Função para comprar o produto
    const handleComprar = (productName: string) => {
        console.log('Comprando:', productName);
    };

    if (isLoading) {
        return (
        <div className="produtos-relacionados">
            <TituloAzul titulo='Produtos relacionados' link={false} />
            <div>Carregando produtos...</div>
        </div>
        );
    }

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

            </div>
        </div>
    )
}