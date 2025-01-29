import { useEffect, useState } from "react";
import Loading from "./Loading";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function Produtos() {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        const receberListaProdutos = async () => {
            try {
                const resposta = await fetch('src/objects/Produtos.json');
                const dados = await resposta.json();
                setLista(dados);
            } catch {
                alert("Ocorreu um erro.")
            }
        }
        receberListaProdutos();
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

    const orderVMm = () => {
        const listaAux = [...lista].sort((a, b) => b.preço - a.preço);
        setLista(listaAux);
    }

    const orderVmM = () => {
        const listaAux = [...lista].sort((a, b) => a.preço - b.preço);
        setLista(listaAux);
    }

    const exportarPDFProdutos = () => {
        const doc = new jsPDF();
        const produtosDados = lista.map((produto) => [
            produto.id,
            produto.nome,
            produto.preço
        ]);

        doc.text("Lista de Produtos", 10, 10);
        doc.autoTable({
            head: [["ID", "Nome", "Preço"]],
            body: produtosDados,
        });

        doc.save("produtos.pdf");
    }

    return (
        <>
            <div className="Bdy">
                <div className="Btns">
                    <button onClick={orderAZ} className="BtnsBtn">A à Z</button>
                    <button onClick={orderZA} className="BtnsBtn">Z à A</button>
                    <button onClick={orderVmM} className="BtnsBtn">Menor para o Maior Preço</button>
                    <button onClick={orderVMm} className="BtnsBtn">Maior para o Menor Preço</button>
                </div>
                <div className="Cards">
                    <div className="OutCard">
                        {
                            lista.map((produto) =>
                                <li key={produto.id} className="InCard">
                                    <img src={produto.imagem} className="ImageProd" />
                                    <h3 className="NameProd">{produto.nome}</h3>
                                    <h3 className="preçoProd">R${produto.preço}</h3>
                                    <button className="ButtonProd">Comprar!</button>
                                </li>
                            )
                        }
                    </div>
                </div>
                <div className="PDFDiv">
                    <button onClick={() => exportarPDFProdutos()} className="PDFBtn">Gerar PDF</button>
                </div>
            </div>
        </>
    );
}