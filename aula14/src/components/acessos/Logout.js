import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Logout = ({ setFalha }) => {
    const navigate = useNavigate();
    const realizarLogout = () => {
        api.get('login/navegador/logout', () => {
            localStorage.setItem('usuario-nome', '');
            navigate(0);
        }, setFalha);
    }

    var nomeUsuario = localStorage.getItem('usuario-nome');

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
