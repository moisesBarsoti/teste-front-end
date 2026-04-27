import { Link, useLocation } from "react-router-dom";
import CrownSimple from "../../assets/icons/CrownSimple.svg";
import "./index.scss";

export default function NavHeader() {
  const location = useLocation();

  return (
    <nav aria-label="Menu principal">
      <ul>
        <li>
          <Link
            to="/todasCategorias"
            className={
              location.pathname === "/todasCategorias"
                ? "link link-ativo"
                : "link"
            }
            aria-current={
              location.pathname === "/todasCategorias" ? "page" : undefined
            }
          >
            TODAS CATEGORIAS
          </Link>
        </li>
        <li>
          <Link
            to="/supermercado"
            className={
              location.pathname === "/supermercado" ? "link link-ativo" : "link"
            }
            aria-current={
              location.pathname === "/supermercado" ? "page" : undefined
            }
          >
            SUPERMERCADO
          </Link>
        </li>
        <li>
          <Link
            to="/livros"
            className={
              location.pathname === "/livros" ? "link link-ativo" : "link"
            }
            aria-current={location.pathname === "/livros" ? "page" : undefined}
          >
            LIVROS
          </Link>
        </li>
        <li>
          <Link
            to="/moda"
            className={
              location.pathname === "/moda" ? "link link-ativo" : "link"
            }
            aria-current={location.pathname === "/moda" ? "page" : undefined}
          >
            MODA
          </Link>
        </li>
        <li>
          <Link
            to="/lancamentos"
            className={
              location.pathname === "/lancamentos" ? "link link-ativo" : "link"
            }
            aria-current={
              location.pathname === "/lancamentos" ? "page" : undefined
            }
          >
            LANÇAMENTOS
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "link link-ativo" : "link"}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            OFERTAS DO DIA
          </Link>
        </li>
        <li>
          <Link
            to="/assinatura"
            className={
              location.pathname === "/assinatura" ? "link link-ativo" : "link"
            }
            id="assinatura-link"
            aria-current={
              location.pathname === "/assinatura" ? "page" : undefined
            }
          >
            <figure>
              <img src={CrownSimple} alt="" aria-hidden="true" />
              <figcaption>Assinatura</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
