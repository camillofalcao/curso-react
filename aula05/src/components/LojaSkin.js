import React, { useContext } from 'react';
import { CarteiraContext } from './Loja';

const LojaSkin = (props) => {
    const carteira = useContext(CarteiraContext);

    let botao;

    if (carteira.saldo >= props.gemas) {
        botao = (<button className="botao-comprar" onClick={() => carteira.debitar(props.gemas)}>
            {props.gemas}
            <img src="./assets/imgs/diamante.gif" />
        </button>);
    } else {
        botao = (<div className="botao-comprar-desabilitado">
            {props.gemas}
        </div>);
    }

    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`} />
            <div className="container">
                <p>{props.nome}</p>
                {botao}
            </div>
        </div>
    );
}

export default LojaSkin;
