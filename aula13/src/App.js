import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlunoListar from './components/alunos/AlunoListar';
import AlunoConsultar from './components/alunos/AlunoConsultar';
import AlunoAlterar from './components/alunos/AlunoAlterar';
import AlunoInserir from './components/alunos/AlunoInserir';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AlunoListar />} />
        <Route path="/alunos/listar" element={<AlunoListar />} />
        <Route path="/alunos/inserir" element={<AlunoInserir />} />
        <Route path="/alunos/consultar/:id" element={<AlunoConsultar />} />
        <Route path="/alunos/alterar/:id" element={<AlunoAlterar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
