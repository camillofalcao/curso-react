import React from "react";
import { Link } from "react-router-dom";
import Logout from "./acessos/Logout";

const BarraNavegacao = ({ setFalha }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h3>Meu Sistema</h3>
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/atletas">Atletas</Link>
                <Logout setFalha={setFalha} />
            </div>
        </nav>
    );
};

export default BarraNavegacao;
