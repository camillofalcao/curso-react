import React, { useContext } from "react";
import { httpGet } from "../../utils/httpApi";
import { UsuarioContext } from "../../UsuarioContext";

const Logout = ({ setFalha }) => {
    const [usuario, setUsuario] = useContext(UsuarioContext);
    const realizarLogout = () => {
        httpGet('login/navegador/logout', () => {
            setUsuario(null);
        }, setFalha, setUsuario);
    }

    var nomeUsuario = usuario ? usuario.nome : null;

    if (nomeUsuario) {
        return (
            <div>
                <label>Usuário: {nomeUsuario}</label>
                <button className="btn btn-outline-danger m-2" onClick={realizarLogout}>Logout</button>
            </div>
        );
    } else {
        return null;
    }
};

export default Logout;
