import React, { useState, useContext } from "react";
import { httpPost } from "../../utils/httpApi";
import { UsuarioContext } from "../../UsuarioContext";

const Login = () => {
    const [, setUsuario] = useContext(UsuarioContext);
    const [objeto, setObjeto] = useState(
        { email: 0, senha: '' }
    );
    const [falha, setFalha] = useState(null);

    const atualizarCampo = (nome, valor) => {
        let objNovo = { ...objeto };
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    const sucessoLogin = (usuario) => {
        setUsuario(usuario);
    };

    const login = e => {
        e.preventDefault();
        httpPost('login/navegador', objeto, sucessoLogin, setFalha, setUsuario);
    }

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
        setTimeout(() => {
            setFalha(null);
        }, 10000);
    }

    return (
        <div className="">
            {mensagemFalha}
            <div className="d-flex justify-content-center">
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
        </div>
    );
};

export default Login;
