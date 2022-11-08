export function dataFormatada(date) {
    var data = new Date(date),
        dia = data.getDate(),
        dia = (dia + 1).toString(),
        dia = (dia == 32) ? "01" : dia,
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

export function dataDesformatada(date) {
    var data = new Date(date),
        dia = data.getDate(),
        dia = (dia + 1).toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return  anoF  + "-" + mesF + "-" + diaF;
}
