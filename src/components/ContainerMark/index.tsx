import "./index.scss";
import Logo from "../../assets/icons/Logo.svg";
import BlueTitle from "../BlueTitle";
import Mark from "../Mark";

export default function ContainerMark() {
  return (
    <div className="container-mark">
      <BlueTitle title="Navegue por marcas" line={false} />
      <ul>
        <li>
          <Mark logo={Logo} alt="Econverse" />
        </li>
        <li>
          <Mark logo={Logo} alt="Econverse" />
        </li>
        <li>
          <Mark logo={Logo} alt="Econverse" />
        </li>
        <li>
          <Mark logo={Logo} alt="Econverse" />
        </li>
        <li>
          <Mark logo={Logo} alt="Econverse" />
        </li>
      </ul>
    </div>
  );
}
