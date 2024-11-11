import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Carregando from "../Carregando";
import { formatarNumero } from "../../utils/formatar";

const AlunoAlterar = () => {
    const [objeto, setObjeto] = useState(
        { id: "2", matricula: 125, nome: 'Bruno' }
    );
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        api.get(`atletas/${id}`, dado => {
            setObjeto(dado);
        }, setFalha);
    }, []);

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    const salvar = e => {
        e.preventDefault();
        api.put(`atletas/${id}`, id, objeto, _ => {
            navigate('/atletas');
        }, setFalha);
    };

    const voltar = e => {
        e.preventDefault();
        navigate('/atletas');
    }

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
    }

    if (!objeto) {
        return (<div>
            <Carregando mensagem="" />
            {mensagemFalha}
        </div>);
    }

    return (
        <div className="p-2">
            <h3>Alterando Atleta</h3>
            {mensagemFalha}
            <form>
                <div>
                    <label className="form-label">Nome</label>
                    <input className="form-control" value={objeto.nome} onChange={e => atualizarCampo('nome', e.target.value)} type="text" />
                </div>
                <div>
                    <label className="form-label">Altura</label>
                    <input className="form-control" value={objeto.altura} onChange={e => atualizarCampo('altura', e.target.value)} type="number" step="0.1" />
                </div>
                <div>
                    <label className="form-label">Peso</label>
                    <input className="form-control" value={objeto.peso} onChange={e => atualizarCampo('peso', e.target.value)} type="number" step="0.1" />
                </div>
                <button className="btn btn-primary mt-2" onClick={e => salvar(e)}>Salvar</button>
                <button className="btn btn-secondary mt-2" onClick={e => voltar(e)}>Voltar</button>
            </form>
        </div>
    );
}

export default AlunoAlterar;
