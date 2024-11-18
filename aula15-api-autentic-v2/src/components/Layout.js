import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "./acessos/Login";
import { UsuarioContext } from "../UsuarioContext";
import BarraNavegacao from "./BarraNavegacao";

const Layout = () => {
    let usuarioLocalStorage;
    try {
        usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"));
    } catch {
        usuarioLocalStorage = null;
    }

    const [falha, setFalha] = useState(null);
    const [usuario, setUsuario] = useState(usuarioLocalStorage);

    const gravarUsuario = usuario => {
        try {
            localStorage.setItem("usuario", JSON.stringify(usuario));
        } catch {
            localStorage.setItem("usuario", null);
        }
        setUsuario(usuario);
    };

    let mensagemFalha = null;

    if (falha) {
        mensagemFalha = (<div className="alert alert-danger">{falha}</div>);
    }

    const apenasLogin = !usuario;

    return (
        <UsuarioContext.Provider value={[usuario, gravarUsuario]}>
            <React.Fragment>
                <BarraNavegacao setFalha={setFalha} />
                {mensagemFalha}
                {apenasLogin ? (<Login reportarSucesso={gravarUsuario} />) : null}
                <div style={{ visibility: (apenasLogin ? "hidden" : "visible") }}>
                    <Outlet />
                </div>
            </React.Fragment>
        </UsuarioContext.Provider>
    );
};
export default Layout;
