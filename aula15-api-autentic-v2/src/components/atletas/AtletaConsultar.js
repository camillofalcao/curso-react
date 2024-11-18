import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { httpGet } from "../../utils/httpApi";
import Carregando from "../Carregando";
import { formatarNumero } from "../../utils/formatar";
import { UsuarioContext } from "../../UsuarioContext";

const AlunoConsultar = () => {
    const [, setUsuario] = useContext(UsuarioContext);
    const [objeto, setObjeto] = useState(null);
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();

    if (objeto == null) {
        httpGet(`atletas/${id}`, dado => {
            setObjeto(dado);
        }, setFalha, setUsuario);
    }

    const voltar = e => {
        e.preventDefault();
        navigate('/atletas');
    };

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
        setTimeout(() => {
            setFalha(null);
        }, 10000);
    }

    if (!objeto) {
        return (<div>
            <Carregando mensagem="" />
            {mensagemFalha}
        </div>);
    }

    return (
        <div className="p-2">
            <h3>Consultando Atleta</h3>
            {mensagemFalha}
            <form>
                <div>
                    <label className="form-label">Nome</label>
                    <input className="form-control" disabled={true} value={objeto.nome} type="text" />
                </div>
                <div>
                    <label className="form-label">Altura</label>
                    <input className="form-control" disabled={true} value={formatarNumero(objeto.altura)} type="text" />
                </div>
                <div>
                    <label className="form-label">Peso</label>
                    <input className="form-control" disabled={true} value={formatarNumero(objeto.peso, 1)} type="text" />
                </div>
                <button className="btn btn-secondary mt-2" onClick={e => voltar(e)}>Voltar</button>
            </form>
        </div>
    );
}

export default AlunoConsultar;
