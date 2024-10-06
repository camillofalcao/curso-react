import React, { useState } from "react";
import { useParams } from "react-router-dom";

const AlunoInserir = () => {
    const [objeto, setObjeto] = useState(
        { matricula: 0, nome: '' }
    );

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

export default AlunoInserir;
