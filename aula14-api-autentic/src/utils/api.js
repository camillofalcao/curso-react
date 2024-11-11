import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5132'
})

class Api {
    get = (path, sucesso, falha) => {
        instance.get(`/${path}`)
            .then(resp => sucesso(resp.data))
            .catch(err => {
                this.tratar(err, falha);
            });
    }

    post = (path, objeto, sucesso, falha) => {
        instance.post(`/${path}`, objeto)
            .then(resp => sucesso(resp.data))
            .catch(err => {
                this.tratar(err, falha);
            });
    }

    put = (path, id, objeto, sucesso, falha) => {
        instance.put(`/${path}`, objeto)
            .then(resp => sucesso(resp.data))
            .catch(err => {
                this.tratar(err, falha);
            });
    }

    delete = (path, id, sucesso, falha) => {
        instance.delete(`/${path}/${id}`)
            .then(resp => sucesso(resp.data))
            .catch(err => {
                this.tratar(err, falha);
            });
    }

    tratar = (err, falha) => {
        console.log(err);
        if (err.status === 401) {
            if (!document.location.href.includes('login')) {
                document.location.href = `/login/${btoa(window.location.href)}`;
            } else {
                falha('Usuário e/ou senha incorretos.');
            }
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
}

const api = new Api();

export default api;
