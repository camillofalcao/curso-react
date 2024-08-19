import React from 'react';

const LojaSkin = (props) => {
    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`} />
            <div className="container">
                <p>{props.nome}</p>
                <button className="botao-comprar">
                    {props.gemas}
                    <img src="./assets/imgs/diamante.gif" />
                </button>
            </div>
        </div>
    );
}

export default LojaSkin;
