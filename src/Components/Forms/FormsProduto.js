import React, { useState } from "react";
import api from "../../Services/api";
import styles from '../../Styles/Cadastros/FormsProduto.module.css'
import { Foto } from "../Inputs/InputFoto";
import { Input } from "../Inputs/InputText";
import { Select } from "../Inputs/Select";

export function DadosPrincipais({ saveData, addPasso }) {

    function handleSaveData(e) {
        e.preventDefault()
        const data = {
            nome, descricao, fornecedor, pedido, validade,
            demanda, valor, medida
        };
        saveData(data)
        addPasso(1)
    }

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [pedido, setPedido] = useState('')
    const [validade, setValidade] = useState('')
    const [demanda, setDemanda] = useState('')
    const [valor, setValor] = useState('')
    const [medida, setMedida] = useState('')

    function getFornecedores() {
        return api.get("api/fornecedor/list").then(response => response.data)
    }

    function getMedidas() {
        return api.get("api/unidade/list").then(response => response.data)
    }

    function getDemandas() {
        return api.get("api/enumeracoes/demandas").then(response => response.data)
    }

    async function fazOptionsFornecedor() {
        const fornecedor = await getFornecedores()
        const options = await fornecedor.map((f) => `<option value=${f.id}>${f.nome}</option>`)
        return options
    }

    async function fazOptionsDemanda() {
        const demanda = await getDemandas()
        const options = demanda.map((d) => `<option value=${d}>${d}</option>`)
        return options
    }

    async function fazOptionsMedida() {
        const medidas = await getMedidas()
        const options = await medidas.map((m) => `<option value=${m.id}>${m.nome + " ("  + m.sigla + ")"}</option>`)
        return options
    }

    return (
        <form className={styles.form} onSubmit={handleSaveData}>

            <div className={styles.column}>
                <Input onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                <Input onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                <Select value={fornecedor} onChange={(e) => setFornecedor(e.target.value)}  data={fazOptionsFornecedor()} idArrow="arrow1" id="fornecedor" name="fornecedor"></Select>
                <Input onChange={(e) => setPedido(e.target.value)} label="Ponto de Pedido" type="text" id="nome" name="pontoPedido"></Input>
            </div>

            <div className={styles.column}>
                <Input onChange={(e) => setValidade(e.target.value)} label="Validade" id="nome" type="date" name="validade"></Input>
                <Select onChange={(e) => setDemanda(e.target.value)} data={fazOptionsDemanda()} idArrow="arrow2" id="demanda" name="demanda"></Select>
                <Input onChange={(e) => setValor(e.target.value)} label="Valor" id="valor" type="number" name="valor"></Input>
                <Select onChange={(e) => setMedida(e.target.value)} data={fazOptionsMedida()} idArrow="arrow3" id="medida" name="medida"></Select>
            </div>

            <div className={styles.footerButtons}>
                <button type="button">
                    Voltar
                </button>

                <button type="submit">
                    Avançar
                </button >
            </div>

        </form>
    )
}

export function Taxas_Impostos({saveData}) {

    

    return (
        <form className={styles.form}>

            <div className={styles.column}>
                <Input label="IPI" id="nome" type="text" name="nome" ></Input>
                <Input label="PIS" id="descricao" type="text" name="descricao" ></Input>
                <Input label="COFINS" id="descricao" type="text" name="descricao" ></Input>
                <Input label="ICMS" id="descricao" type="text" name="descricao" ></Input>
            </div>

            <div className={styles.column}>
                <Input label="SKU" id="nome" type="text" name="nome" ></Input>
                <Select label="NCM" id="ncm" type="text" name="descricao" ></Select>
                <div className={styles.divInput}>
                    <label className={styles.label}>Produto Importado</label>

                    <div className={styles.importado}>
                        <div>
                            <label className={styles.label}>Sim</label>
                            <input id="sim" className={styles.radio} type="radio" value="true" name="homologado" ></input>
                        </div>

                        <div>
                            <label className={styles.label}>Não</label>
                            <input id="nao" className={styles.radio} type="radio" value="false" name="homologado"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerButtons}>
                <button>
                    Voltar
                </button>

                <button type="submit">
                    Avançar
                </button>
            </div>
        </form>
    )
}


export function ImagemProduto() {

    return (
        <form className={styles.form}>
            <div className={styles.divFotos}>
                <Foto></Foto>
            </div>

            <div className={styles.footerButtons}>
                <button>
                    Voltar
                </button>

                <button type="submit">
                    Confirmar
                </button>
            </div>
        </form>
    )
}

