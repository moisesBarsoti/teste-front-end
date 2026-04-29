import { Link } from "react-router-dom";
import type { BlueTitleType } from "../../types/BlueTitleType";
import "./index.scss";

export default function BlueTitle({link, title, line = true}: BlueTitleType) {
  return (
    <div className="container-title-blue">
      <div className="title-blue">
        {line && <div className="line"></div>}
        <h3>{title}</h3>
        {line && <div className="line"></div>}
      </div>
      {link && (
        <div className="container-link">
          <Link
            to="/produtos"
            className="see-all-links"
            title="Ver todos os produtos"
          >
            Ver todos
          </Link>
        </div>
      )}
    </div>
  );
}
