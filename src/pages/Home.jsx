import Header from "../components/Header";
import Produtos from "../components/Produtos";
import Footer from "../components/Footer";
import '../styles/styles.css';

export default function Home() {
    return (
        <div className="BodyR">
            <Header></Header>
            <div className="TitleDiv">
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
                <h1 className="Title">Produtos</h1>
                <div className="Dividers">
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                    <img src="src\images\Divider.png" alt="Divider." className="Divider"></img>
                </div>
            </div>
            <div className="Cards">
                <Produtos></Produtos>
            </div>
            <Footer></Footer>
        </div>
    );
}