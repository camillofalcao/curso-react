import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { httpPost } from "../../utils/httpApi";
import { UsuarioContext } from "../../UsuarioContext";

const AlunoInserir = () => {
    const [, setUsuario] = useContext(UsuarioContext);
    const [objeto, setObjeto] = useState(
        { matricula: 0, nome: '' }
    );
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();

    const salvar = e => {
        e.preventDefault();
        httpPost('atletas', objeto, resp => {
            navigate('/atletas');
        }, setFalha, setUsuario);
    };

    const voltar = e => {
        e.preventDefault();
        navigate('/atletas');
    }

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
        setTimeout(() => {
            setFalha(null);
        }, 10000);
    }

    return (
        <div className="p-2">
            <h3>Inserindo Atleta</h3>
            {mensagemFalha}
            <form>
                <div>
                    <label className="form-label">Nome</label>
                    <input className="form-control" value={objeto.nome} onChange={e => atualizarCampo('nome', e.target.value)} type="text" />
                </div>
                <div>
                    <label className="form-label">Altura</label>
                    <input className="form-control" value={objeto.altura} onChange={e => atualizarCampo('altura', e.target.value)} type="number" step=".1" />
                </div>
                <div>
                    <label className="form-label">Peso</label>
                    <input className="form-control" value={objeto.peso} onChange={e => atualizarCampo('peso', e.target.value)} type="number" step=".1" />
                </div>
                <button className="btn btn-primary mt-2" onClick={e => salvar(e)}>Salvar</button>
                <button className="btn btn-secondary mt-2" onClick={e => voltar(e)}>Voltar</button>
            </form>
        </div>
    );
}

export default AlunoInserir;
