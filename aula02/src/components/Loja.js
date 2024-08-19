import React from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';

const Loja = () => {
    return (<>
        <Cabecalho />
        <main>
            <div className="loja">
                <LojaSkin
                    nome="Ariana Emberlym"
                    imagem="a.png"
                    gemas="2000"
                />
                <LojaSkin
                    nome="Jasper Moonshadow"
                    imagem="d.png"
                    gemas="2000"
                />
            </div>
        </main>
        <Rodape />
    </>);
};

export default Loja;
