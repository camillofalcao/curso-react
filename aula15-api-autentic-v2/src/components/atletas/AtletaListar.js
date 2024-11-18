import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { httpDelete, httpGet } from "../../utils/httpApi";
import Carregando from "../Carregando";
import { formatarNumero } from "../../utils/formatar";
import { UsuarioContext } from "../../UsuarioContext";

const AlunoListar = () => {
    const [, setUsuario] = useContext(UsuarioContext);
    const [objetos, setObjetos] = useState(null);
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const carregarDados = () => {
            httpGet('atletas', dados => setObjetos(dados), erro => setFalha(erro), setUsuario);
        };
        carregarDados();
    }, [setUsuario]);

    const excluir = (e, id) => {
        e.preventDefault();
        httpDelete('atletas', id, _ => navigate(0), erro => setFalha(erro), setUsuario);
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
