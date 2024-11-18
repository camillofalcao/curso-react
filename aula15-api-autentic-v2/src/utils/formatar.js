export const formatarNumero = (valor, decimais) => {
    if (!decimais)
        decimais = 2;

    return valor.toLocaleString('pt-br', {
        minimumFractionDigits: decimais,
        maximumFractionDigits: decimais
    });
};
