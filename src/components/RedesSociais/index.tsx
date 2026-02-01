import './index.scss';
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

export default function RedesSociais() {
    return (
        <ul>
            <li>
                <a href="https://www.instagram.com/econverse.ag/" title='Ver instagram Econverse'>
                    <img src={Instagram} alt="Instagram" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/agenciaeconverse/" title='Ver facebook Econverse'>
                    <img src={Facebook} alt="Facebook" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/econverse/" title='Ver linkedin Econverse'>
                    <img src={Linkedin} alt="Linkedin" />
                </a>
            </li>
        </ul>
    )
}