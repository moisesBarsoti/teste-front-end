import type { VitrineCategoriaType } from "../types/vitrineCategoriaType";
import tecnologia from "../assets/icons/tecnologia.svg";
import supermercado from "../assets/icons/supermercados.svg";
import whiskey from "../assets/icons/whiskey.svg";
import ferramentas from "../assets/icons/ferramentas.svg";
import cuidadosDeSaude from "../assets/icons/cuidados-de-saude.svg";
import esporterEFitness from "../assets/icons/corrida.svg";
import moda from "../assets/icons/moda.svg";

export const vitrineCategoria: VitrineCategoriaType[] = [
    {
        src: tecnologia,
        alt: 'Ícone de tecnologia',
        span: 'Tecnologia'
    },
    {
        src: supermercado,
        alt: 'Ícone de supermercado',
        span: 'Supermercado'
    },
    {
        src: whiskey,
        alt: 'Ícone de bebidas',
        span: 'Bebidas'
    },
    {
        src: ferramentas,
        alt: 'Ícone de ferramentas',
        span: 'Ferramentas'
    },
    {
        src: cuidadosDeSaude,
        alt: 'Ícone de cuidados de saúde',
        span: 'Saúde'
    },
    {
        src: esporterEFitness,
        alt: 'Ícone de esporte e fitness',
        span: 'Esporte e Fitness'
    },
    {
        src: moda,
        alt: 'Ícone de moda',
        span: 'Moda'
    }
]