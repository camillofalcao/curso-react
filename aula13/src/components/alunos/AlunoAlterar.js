import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AlunoAlterar = () => {
    const [objeto, setObjeto] = useState(
        { id: "2", matricula: 125, nome: 'Bruno' }
    );

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`).then(resp => {
            setObjeto(resp.data);
        })
    }, []);

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    const salvar = e => {
        e.preventDefault();
        axios.put(`http://localhost:3005/alunos/${id}`, objeto).then(resp => {
            navigate('/alunos');
        });
    };

    const voltar = e => {
        e.preventDefault();
        navigate('/alunos');
    }

    if (objeto == null) {
        return <div>Carregando...</div>;
    }

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

export default AlunoAlterar;
