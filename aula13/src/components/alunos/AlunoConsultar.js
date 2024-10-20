import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AlunoConsultar = () => {
    const [objeto, setObjeto] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`).then(resp => {
            setObjeto(resp.data);
        })
    }, []);

    const voltar = e => {
        e.preventDefault();
        navigate('/alunos');
    };

    if (objeto == null) {
        return <div>Carregando...</div>;
    }

    return (
        <form>
            <div>
                <label className="form-label">Matrícula</label>
                <input className="form-control" disabled={true} value={objeto.matricula} type="text" />
            </div>
            <div>
                <label className="form-label">Nome</label>
                <input className="form-control" disabled={true} value={objeto.nome} type="text" />
            </div>
            <button className="btn btn-secondary mt-2" onClick={e => voltar(e)}>Voltar</button>
        </form>
    );
}

export default AlunoConsultar;
