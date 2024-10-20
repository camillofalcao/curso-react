import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AlunoInserir = () => {
    const [objeto, setObjeto] = useState(
        { matricula: 0, nome: '' }
    );
    const navigate = useNavigate();

    const salvar = e => {
        e.preventDefault();
        axios.post('http://localhost:3005/alunos', objeto).then(resp => {
            navigate('/alunos');
        });
    };

    const voltar = e => {
        e.preventDefault();
        navigate('/alunos');
    }

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    return (
        <form>
            <div>
                <label className="form-label">Matrícula</label>
                <input className="form-control" value={objeto.matricula} onChange={e => atualizarCampo('matricula', e.target.value)} type="text" />
            </div>
            <div>
                <label className="form-label">Nome</label>
                <input className="form-control" value={objeto.nome} onChange={e => atualizarCampo('nome', e.target.value)} type="text" />
            </div>
            <button className="btn btn-primary mt-2" onClick={e => salvar(e)}>Salvar</button>
            <button className="btn btn-secondary mt-2" onClick={e => voltar(e)}>Voltar</button>
        </form>
    );
}

export default AlunoInserir;
