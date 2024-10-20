import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AlunoListar = () => {
    const [objetos, setObjetos] = useState(null);
    const navigate = useNavigate();

    const carregarDados = () => {
        axios.get('http://localhost:3005/alunos').then(resp => {
            setObjetos(resp.data);
        });
    };

    useEffect(() => {
        carregarDados();
    }, []);

    const excluir = (e, id) => {
        e.preventDefault();
        axios.delete(`http://localhost:3005/alunos/${id}`).then(
            resp => {
                console.log(resp);
                navigate(0);
            }
        );
    };

    if (!objetos) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Link to="/alunos/inserir" className="btn btn-primary">Inserir</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        objetos.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.matricula}</td>
                                    <td>{x.nome}</td>
                                    <td>
                                        <Link to={`/alunos/consultar/${x.id}`} className="btn btn-secondary">Consultar</Link>
                                        <Link to={`/alunos/alterar/${x.id}`} className="btn btn-warning">Alterar</Link>
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
