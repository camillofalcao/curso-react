import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Login = () => {
    const [objeto, setObjeto] = useState(
        { email: 0, senha: '' }
    );
    const [falha, setFalha] = useState(null);
    const navigate = useNavigate();
    const { redirecionarPara } = useParams();

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    const sucessoLogin = (usuario) => {
        localStorage.setItem("usuario-nome", usuario.nome);

        if (!redirecionarPara) {
            navigate(0);
        } else {
            const redirecionar = atob(redirecionarPara);
            document.location.href = redirecionar;
        }
    };

    const login = e => {
        e.preventDefault();
        api.post('login/navegador', objeto, sucessoLogin, setFalha);
    }

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
    }

    return (
        <div className="d-flex justify-content-center">
            {mensagemFalha}
            <form className="w-50 m-5">
                <h3>Login</h3>
                <div>
                    <label className="form-label">E-mail</label>
                    <input className="form-control" value={objeto.matricula} onChange={e => atualizarCampo('email', e.target.value)} type="email" />
                </div>
                <div>
                    <label className="form-label">Senha</label>
                    <input className="form-control" value={objeto.senha} onChange={e => atualizarCampo('senha', e.target.value)} type="password" />
                </div>
                <button className="btn btn-primary mt-2" onClick={e => login(e)}>Login</button>
            </form>
        </div>
    );
};

export default Login;
