import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AtletaListar from './components/atletas/AtletaListar';
import AtletaConsultar from './components/atletas/AtletaConsultar';
import AtletaAlterar from './components/atletas/AtletaAlterar';
import AtletaInserir from './components/atletas/AtletaInserir';
import Login from './components/acessos/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AtletaListar />} />
        <Route path="/login/:redirecionarPara" element={<Login />} />
        <Route path="/atletas" element={<AtletaListar />} />
        <Route path="/atletas/listar" element={<AtletaListar />} />
        <Route path="/atletas/inserir" element={<AtletaInserir />} />
        <Route path="/atletas/consultar/:id" element={<AtletaConsultar />} />
        <Route path="/atletas/alterar/:id" element={<AtletaAlterar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
