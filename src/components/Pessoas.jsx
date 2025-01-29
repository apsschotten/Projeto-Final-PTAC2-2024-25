import { useEffect, useState } from "react";
import Loading from "./Loading";
import '../styles/styles.css';

export default function Pessoas() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaUsuários = async () => {
            try {
                const resposta = await fetch('src/objects/Users.json');
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert("Ocorreu um erro.")
            }
        }
        receberListaUsuários();
    }, []);

    if (lista.length === 0) {
        return (
            <Loading></Loading>
        )
    }

    const orderAZ = () => {
        const listaAux = [...lista].sort((a, b) => a.nome.localeCompare(b.nome));
        setLista(listaAux);
    }

    const orderZA = () => {
        const listaAux = [...lista].sort((a, b) => b.nome.localeCompare(a.nome));
        setLista(listaAux);
    }


    
    return (
        <>
            <div className="Bdy">
                <div className="BtnsReg">
                    <button onClick={orderAZ} className="BtnsBtnReg">A à Z</button>
                    <button onClick={orderZA} className="BtnsBtnReg">Z à A</button>
                </div>
                <div className="Cards">
                    <div className="OutCard">
                        {
                            lista.map((user) =>
                                <li key={user.id} className="InPCard">
                                    <h3>{user.nome}</h3>
                                    <h3>{user.email}</h3>
                                    <h3>{user.favPlush}</h3>
                                </li>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}