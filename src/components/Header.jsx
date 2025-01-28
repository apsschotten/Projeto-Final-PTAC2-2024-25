import { Link } from "react-router-dom";
import '../styles/styles.css';

export default function Header() {
    return (
        <>
            <header>
                <img src='src\images\Logo.png' alt="Logo 'Fluff & Hug: Amor em cada pelúcia'" className="ImageHead"></img>
            </header>
            <div className="BtnsHeader">
            <button className="BtnHeader">
                <Link to="/Home" className="TxtBtnHeader">
                    <p>Página Inicial</p>
                </Link>
            </button>
            </div>
        </>
    );
}  