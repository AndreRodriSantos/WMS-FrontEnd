//Pegar Objetos e

import api from "./api"

export function getFornecedores(e) {
    return api.get("api/fornecedor/list").then(response => response.data)
}

export function getMedidas(e) {
    return api.get("api/unidade/list").then(response => response.data)
}

export function getDemandas(e) {
    return api.get("api/enumeracoes/demandas").then(response => response.data)
}

export function getNcm(e) {
    return api.get("api/ncm/").then(response => response.data)
}

export function getFornecedorID(id) {
    return api.get("api/fornecedor/" + id).then(response => response.data)
}

export function getMedidaID(id) {
    return api.get("api/unidade/" + id).then(response => response.data)
}

export function getNcmID(id) {
    return api.get("api/ncm/" + id).then(response => response.data)
}

export function getPeriodo(e) {
    return api.get("api/enumeracoes/periodos").then(response => response.data)
}


//Listagens

export async function fazOptionsFornecedor() {
    const fornecedor = await getFornecedores()
    const options = await fornecedor.map((f) => `<option value=${f.id}>${f.nome}</option>`)
    return options
}

export async function fazOptionsDemanda() {
    const demanda = await getDemandas()
    const options = demanda.map((d) => `<option value=${d}>${d}</option>`)
    return options
}

export async function fazOptionsPeriodo() {
    const periodo = await getDemandas()
    const options = periodo.map((p) => `<option value=${p}>${p}</option>`)
    return options
}

export async function fazOptionsMedida() {
    const medidas = await getMedidas()
    const options = await medidas.map((m) => `<option value=${m.id}>${m.nome + " (" + m.sigla + ")"}</option>`)
    return options
}

export async function fazOptionsNcm() {
    const ncm = await getNcm()
    const options = await ncm.map((n) => `<option value=${n.id}>${n.ncm}</option>`)
    return options
}