export interface CardProdutoType {
    produto: string;
    imagem: string;
    valorOriginal: string;
    valorDesconto: string;
    quntidadeParcelas: number;
    valorParcela: string;
    onClickComprar: () => void;
} 