import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AlunoAlterar = () => {
    const [objeto, setObjeto] = useState(
        { id: "2", matricula: 125, nome: 'Bruno' }
    );

    const { id } = useParams();

    if (objeto == null) {
        return <div>Carregando...</div>;
    }

    return (
        <form>
            <div>
                <label className="form-label">Matrícula</label>
                <input className="form-control" value={objeto.matricula} type="text" />
            </div>
            <div>
                <label className="form-label">Nome</label>
                <input className="form-control" value={objeto.nome} type="text" />
            </div>
            <button className="btn btn-primary mt-2">Salvar</button>
            <button className="btn btn-secondary mt-2">Voltar</button>
        </form>
    );
}

export default AlunoAlterar;
