import "./index.scss";
import Logo from "../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia";
import Copyright from "../Copyright";
import Newsletter from "../Newsletter";

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
          <SocialMedia />
        </div>

        <div className="linha"></div>

        <div className="container-conteudo">
          <ul className="conteudo">
            <li>
              <ul>
                <li>
                  <h6>Intitucional</h6>
                </li>
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
              <ul>
                <li>
                  <h6>Ajuda</h6>
                </li>
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
              <ul>
                <li>
                  <h6>Termos</h6>
                </li>
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

      <Copyright />
    </footer>
  );
}
