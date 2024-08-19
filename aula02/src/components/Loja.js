import React, { useState, useEffect } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';
import Loader from './Loader';

const Loja = () => {
    const [estado, setEstado] = useState({ carregando: true, dados: [] });

    useEffect(() => {
        if (estado.carregando) {
            setTimeout(() => {
                setEstado({ carregando: false, dados: objetos });
            }, 2000);
        }
    }, [estado.carregando]);

    let componentes;

    if (estado.carregando) {
        componentes = <Loader />;
    } else {
        componentes = estado.dados.map(x => {
            return (
                <LojaSkin
                    nome={x.nome}
                    imagem={x.imagem}
                    gemas={x.gemas}
                />
            );
        })
    }

    return (<>
        <Cabecalho />
        <main>
            <div className="loja">
                {
                    componentes
                }
            </div>
        </main>
        <Rodape />
    </>);
};

const objetos = [
    { nome: 'Ariana Emberlym', imagem: 'a.png', gemas: 2000 },
    { nome: 'Elowen Starcrest', imagem: 'b.png', gemas: 2000 },
    { nome: 'Elias Nightshade', imagem: 'c.png', gemas: 2000 },
    { nome: 'Jasper Moonshadow', imagem: 'd.png', gemas: 2000 },
    { nome: 'Ronan Thornfield', imagem: 'e.png', gemas: 2000 },
    { nome: 'Lila Blackwood', imagem: 'f.png', gemas: 2000 },
    { nome: 'Mira Sunvale', imagem: 'g.png', gemas: 2000 },
    { nome: 'Finnian Stormrider', imagem: 'h.png', gemas: 2000 },
    { nome: 'Liam Ravenscroftn', imagem: 'i.png', gemas: 2000 }
];

export default Loja;
