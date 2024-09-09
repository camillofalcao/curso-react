import React, { useState, useEffect } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';
import Loader from './Loader';

const Loja = () => {
    const [estado, setEstado] = useState({ carregando: true, dados: [] });

    useEffect(() => {
        setTimeout(() => {
            setEstado({ carregando: false, dados: objetos });
        }, 2000);
    }, []);

    let componentes;

    if (estado.carregando) {
        componentes = <Loader />;
    } else {
        componentes = estado.dados.map(x => {
            return (
                <LojaSkin key={x.id}
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
    { id: 1, nome: 'Ariana Emberlym', imagem: 'a.png', gemas: 200 },
    { id: 2, nome: 'Elowen Starcrest', imagem: 'b.png', gemas: 100 },
    { id: 3, nome: 'Elias Nightshade', imagem: 'c.png', gemas: 2000 },
    { id: 4, nome: 'Jasper Moonshadow', imagem: 'd.png', gemas: 100 },
    { id: 5, nome: 'Ronan Thornfield', imagem: 'e.png', gemas: 2000 },
    { id: 6, nome: 'Lila Blackwood', imagem: 'f.png', gemas: 1000 },
    { id: 7, nome: 'Mira Sunvale', imagem: 'g.png', gemas: 2000 },
    { id: 8, nome: 'Finnian Stormrider', imagem: 'h.png', gemas: 6000 },
    { id: 9, nome: 'Liam Ravenscroftn', imagem: 'i.png', gemas: 1000 }
];

export default Loja;
