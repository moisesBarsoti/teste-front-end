import "./index.scss";
import Newsletter from "../Newsletter";
import Logo from "../../assets/icons/Logo.svg";
import RedesSociais from "../RedesSociais";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <Newsletter />
            <div className="container-footer">
                <div className="container-logo">
                    <figure>
                        <img src={Logo} alt="Logo Econverse" />
                        <figcaption>
                            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                        </figcaption>
                    </figure>
                    <RedesSociais />
                </div>

                <div className="linha"></div>

                <div className="container-conteudo">
                    <ul className="conteudo">
                        <li>
                            <h6>Intitucional</h6>
                            <ul>
                                <li>
                                    <Link className="link-footer" to="">
                                        Sobre Nós
                                    </Link>
                                 </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Movimento
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Trabalhe conosco
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6>Ajuda</h6>
                            <ul>
                                <li>
                                    <Link className="link-footer" to="">
                                        Suporte
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Fale Conosco
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Perguntas Frequentes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h6>Termos</h6>
                            <ul>
                                <li>
                                    <Link className="link-footer" to="">
                                        Termos e Condições
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Política de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link-footer" to="">
                                        Troca e Devolução
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}