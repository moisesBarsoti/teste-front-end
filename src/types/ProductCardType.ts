export interface ProductCardType {
    product: string;
    image: string;
    originallValue: string;
    discountValue: string;
    quantityInstallments: number;
    installmentValue: string;
    onClickBuy: () => void;
} 