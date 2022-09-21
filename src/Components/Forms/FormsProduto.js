import axios from "axios";
import React, { useState } from "react";
import api from "../../Services/api";
import styles from '../../Styles/Cadastros/FormsProduto.module.css'
import { Foto } from "../Inputs/InputFoto";
import { Input } from "../Inputs/InputText";
import { Select } from "../Inputs/Select";

export function DadosPrincipais({ saveData }) {

    function handleSaveData(e) {
        e.preventDefault()
        const data = {
            nome, descricao, fornecedor, pedido, validade,
            demanda, valor, medida
        };
        saveData(data)
    }

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fornecedor, setFornecedor] = useState('')
    const [pedido, setPedido] = useState('')
    const [validade, setValidade] = useState('')
    const [demanda, setDemanda] = useState('')
    const [valor, setValor] = useState('')
    const [medida, setMedida] = useState('')

    function getFornecedores(){
        return api.get("api/fornecedor/list").then(response => response.data)
    }

    async function fazOptions(){
        const fornecedor = await getFornecedores()
        const options = await fornecedor.map((f) => <option value={f.id}>{f.nome}</option>)
        return options
    }

    return (
        <form className={styles.form} onSubmit={handleSaveData}>
            <div className={styles.column}>
                <Input onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                <Input onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                <Select data={fazOptions()} idArrow="arrow1" id="fornecedor" name="fornecedor"></Select>
                <Input onChange={(e) => setPedido(e.target.value)} label="Ponto de Pedido" type="text" id="nome" name="pontoPedido"></Input>
            </div>

            <div className={styles.column}>
                <Input onChange={(e) => setValidade(e.target.value)} label="Validade" id="nome" type="date" name="validade"></Input>
                <Select idArrow="arrow2" data={["BAIXA", "MEDIA", "ALTA"]} id="demanda" name="demanda"></Select>
                <Input onChange={(e) => setValor(e.target.value)} label="Valor" id="valor" type="number" name="valor"></Input>
                <Select idArrow="arrow3" data={["Medida 1", "Medida 2"]} id="nome" type="text" placeholder="Digite a Unidade de Medida do Produto" name="medida" ></Select>
            </div>

            <div className={styles.footerButtons}>
                <button>
                    Voltar
                </button>

                <button type="submit">
                    Avançar
                </button >
            </div>

        </form>
    )
}

export function Taxas_Impostos() {

    return (
        <form className={styles.form}>

            <div className={styles.column}>
                <Input label="IPI" id="nome" type="text" name="nome" ></Input>
                <Input label="PIS" id="descricao" type="text" name="descricao" ></Input>
                <Input label="COFINS" id="descricao" type="text" name="descricao" ></Input>
            </div>

            <div className={styles.column}>
                <Input label="SKU" id="nome" type="text" name="nome" ></Input>
                <Input label="ICMS" id="descricao" type="text" name="descricao" ></Input>
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

