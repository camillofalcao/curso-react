import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Carregando from "../Carregando";
import Logout from "../acessos/Logout";
import { formatarNumero } from "../../utils/formatar";

const AlunoListar = () => {
    const [objetos, setObjetos] = useState(null);
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();

    const carregarDados = () => {
        api.get('atletas', dados => setObjetos(dados), erro => setFalha(erro));
    };

    useEffect(() => {
        carregarDados();
    }, []);

    const excluir = (e, id) => {
        e.preventDefault();
        api.delete('atletas', id, _ => navigate(0), erro => setFalha(erro));
    };

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
    }

    if (!objetos) {
        return (<div>
            <Carregando mensagem="" />
            {mensagemFalha}
        </div>);
    }

    return (
        <div className="p-2">
            <div className="d-flex justify-content-between">
                <h1>Atletas</h1>
                <Logout setFalha={setFalha} />
            </div>
            {mensagemFalha}
            <Link to="/atletas/inserir" className="btn btn-primary">Inserir</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        objetos.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.nome}</td>
                                    <td>{formatarNumero(x.altura)}</td>
                                    <td>{formatarNumero(x.peso, 1)}</td>
                                    <td>
                                        <Link to={`/atletas/consultar/${x.id}`} className="btn btn-secondary">Consultar</Link>
                                        <Link to={`/atletas/alterar/${x.id}`} className="btn btn-warning">Alterar</Link>
                                        <button className="btn btn-danger" onClick={e => excluir(e, x.id)}>Excluir</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AlunoListar;
