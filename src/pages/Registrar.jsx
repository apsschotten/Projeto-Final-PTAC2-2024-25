import Header from "../components/Header";
import Registro from "../components/Registro";
import Pessoas from "../components/Pessoas";
import Footer from "../components/Footer";
import '../styles/styles.css';

export default function Registrar() {
    return (
        <div className="BodyR">
            <Header></Header>
            <div className="TitleDiv">
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
                <h1 className="Title">Cadastre-se!</h1>
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
            </div>
            <Registro></Registro>
            <div className="TitleDiv">
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
                <h1 className="Title">Usuários Cadastrados</h1>
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
            </div>
            <Pessoas></Pessoas>
            <Footer></Footer>
        </div>
    );
}