import React, { useState, useEffect } from 'react';

const Dezenas = ({ cliques }) => {
  useEffect(() => {
    console.log(`dezenas: ${cliques}`);

    return () => console.log(`dezenas - descarga: ${cliques}`);
  }, []);
  return <h2>{parseInt(cliques / 10)} dezenas + {cliques % 10} cliques.</h2>;
};

const Unidades = ({ cliques }) => {
  useEffect(() => {
    console.log(`unidades: ${cliques}`);

    return () => console.log(`unidades - descarga: ${cliques}`);
  }, []);
  return <h2>{cliques} cliques.</h2>;
};

const App = () => {
  const [cliques, setCliques] = useState(0);

  let painel;

  if (cliques < 10) {
    painel = <Unidades cliques={cliques} />;
  } else {
    painel = <Dezenas cliques={cliques} />;
  }

  return (
    <div>
      {painel}
      <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
    </div>
  );
};

export default App;
