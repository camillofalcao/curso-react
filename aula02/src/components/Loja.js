import React from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';

const Loja = () => {
    return (<>
        <Cabecalho />
        <main>
            <div className="loja">
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
                <LojaSkin />
            </div>
        </main>
        <Rodape />
    </>);
};

export default Loja;
