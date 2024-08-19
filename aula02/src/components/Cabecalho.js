import React from 'react';

const Cabecalho = () => {
    return (
        <header>
            <button className="voltar">&lt;</button>
            <h1>Loja</h1>
            <div className="carteira">
                <img src="./assets/imgs/diamante.gif" />
                <p>5000</p>
            </div>
            <div className="tema-area">
                <button id="trocar-tema-azul" className="tema tema-azul"></button>
                <button id="trocar-tema-verde" className="tema tema-verde"></button>
                <button id="trocar-tema-vermelho" className="tema tema-vermelho"></button>
                <button id="trocar-tema-roxo" className="tema tema-roxo"></button>
                <button id="trocar-tema-preto" className="tema tema-preto"></button>
            </div>
        </header>
    );
};

export default Cabecalho;
