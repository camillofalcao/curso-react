import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5132'
})

export const httpGet = (path, sucesso, falha, setUsuario) => {
    instance.get(`/${path}`)
        .then(resp => sucesso(resp.data))
        .catch(err => {
            tratar(err, falha, setUsuario);
        });
}

export const httpPost = (path, objeto, sucesso, falha, setUsuario) => {
    instance.post(`/${path}`, objeto)
        .then(resp => sucesso(resp.data))
        .catch(err => {
            tratar(err, falha, setUsuario);
        });
}

export const httpPut = (path, id, objeto, sucesso, falha, setUsuario) => {
    instance.put(`/${path}`, objeto)
        .then(resp => sucesso(resp.data))
        .catch(err => {
            tratar(err, falha, setUsuario);
        });
}

export const httpDelete = (path, id, sucesso, falha, setUsuario) => {
    instance.delete(`/${path}/${id}`)
        .then(resp => sucesso(resp.data))
        .catch(err => {
            this.tratar(err, falha, setUsuario);
        });
}

const tratar = (err, falha, setUsuario) => {
    console.log(err);
    if (err.status === 401) {
        setUsuario(null);
    } else {
        if (falha) {
            if (err.code === 'ERR_NETWORK') {
                falha('O servidor parece estar inacessível neste momento.');
            } else if (err.status === 403) {
                falha('Acesso não autorizado.');
            } else {
                falha('Erro interno do servidor.');
            }
        }
    }
};
