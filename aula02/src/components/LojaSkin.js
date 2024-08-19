import React from 'react';
import Loja from './Loja';

const LojaSkin = () => {
    return (
        <div className="card">
            <img src="./assets/imgs/a.png" alt="Personagem A" />
            <div className="container">
                <p>Ariana Emberlyn</p>
                <button className="botao-comprar">2000<img src="./assets/imgs/diamante.gif" /></button>
            </div>
        </div>
    );
}

export default LojaSkin;
