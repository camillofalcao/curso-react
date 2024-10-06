import React, { useState } from "react";
import { Link } from "react-router-dom";

const AlunoListar = () => {
    const [objetos, setObjetos] = useState([
        { id: "1", matricula: 123, nome: 'Ana' },
        { id: "2", matricula: 125, nome: 'Bruno' }
    ]);

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
                                        <button className="btn btn-danger">Excluir</button>
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
