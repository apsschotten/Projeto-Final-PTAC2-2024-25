import { useState } from "react";
import '../styles/styles.css';

export default function Registro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [favPlush, setFavPlush] = useState('')

    const registrar = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    nome: nome,
                    email: email,
                    favPlush: favPlush
                })
            })
            alert("Registrado com sucesso!")
        }
        catch {
            alert("Ocorreu um erro.")
        }
    }

    return (
        <div className="FormReg">
            <form onSubmit={registrar}>
                <input placeholder="Nome" type="text" name="Nome" id="" value={nome} onChange={(event) => setNome(event.target.value)} className="RegInOne" />
                <input placeholder="E-mail" type="email" name="E-mail" id="" value={email} onChange={(event) => setEmail(event.target.value)} className="RegIn" />
                <input placeholder="Pelúcia Favorita" type="favPlush" name="Pelúcia Favorita" id="" value={favPlush} onChange={(event) => setFavPlush(event.target.value)} className="RegIn" />
                <button className="RegInBtn">Registrar</button>
            </form>
        </div>
    );
}