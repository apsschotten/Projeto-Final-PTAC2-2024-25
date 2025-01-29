import { useEffect, useState } from "react";
import Loading from "./Loading";
import '../styles/styles.css';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function Pessoas() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const buscarListaUsuários = async () => {
            try {
                const resposta = await fetch('src/objects/Users.json');
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert("Ocorreu um erro.")
            }
        }
        buscarListaUsuários();
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

    const exportarPDFPessoas = () => {
        const doc = new jsPDF();
        const usersDados = lista.map((user) => [
            user.id,
            user.nome,
            user.email,
            user.favPlush
        ]);

        doc.text("Lista de Usuários", 10, 10);
        doc.autoTable({
            head: [["ID", "Nome", "Preço", "Pelúcia Favorita"]],
            body: usersDados,
        });

        doc.save("users.pdf");
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
                <div className="PDFDiv">
                    <button onClick={() => exportarPDFPessoas()} className="PDFBtn">Gerar PDF</button>
                </div>
            </div>
        </>
    );
}