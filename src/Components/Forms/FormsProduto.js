import React, { useState } from "react";
import api from "../../Services/api";
import styles from '../../Styles/Cadastros/FormsProduto.module.css'
import { Foto } from "../Inputs/InputFoto";
import { Input } from "../Inputs/InputText";
import { Select } from "../Inputs/Select";

export function DadosPrincipais({childtoParent}) {

    const [data, setData] = useState({});

    childtoParent = (e) => {
        e.preventDefault()
        setData({nome, descricao, fornecedor});
      }

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const fornecedor = document.getElementById("fornecedor").value
    const [pontoPedido, setPedido] = useState('')
    const [validade, setValidade] = useState('')
    const [demanda, setDemanda] = useState('')
    const [valor, setValor] = useState('')
    const [medida, setMedida] = useState('')

    return (
        <form className={styles.form} onSubmit={childtoParent}>
            <div className={styles.column}>
                <Input onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                <Input onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                <Select idArrow="arrow1" data={["Fornecedor", "Fornecedor2"]} id="fornecedor" name="fornecedor"></Select>
                <Input label="Ponto de Pedido" type="text" id="nome" name="pontoPedido"></Input>
            </div>

            <div className={styles.column}>
                <Input label="Validade" id="nome" type="date" name="validade"></Input>
                <Select idArrow="arrow2" data={["BAIXA", "MEDIA", "ALTA"]} id="demanda" name="demanda"></Select>
                <Input label="Valor" id="valor" type="number" name="valor"></Input>
                <Select idArrow="arrow3" data={["Medida 1", "Medida 2"]} id="nome" type="text" placeholder="Digite a Unidade de Medida do Produto" name="medida" ></Select>
            </div>

            <div className={styles.footerButtons}>
                <button>
                    Voltar
                </button>

                <button type="submit" onClick={() => console.log(data)}>
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


function ListarFornecedores() {
    api.get("api/fornecedor/list").then(function (response) {
        const fornecedores = response.data
        console.log(fornecedores)

        for (let i = 0; i < fornecedores.length; i++) {
            const f = fornecedores[i];

            return (<option>{f.nome}</option>)
        }
    })
}