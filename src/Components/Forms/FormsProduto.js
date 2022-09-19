import React from "react";
import api from "../../Services/api";
import styles from '../../Styles/Cadastros/FormsProduto.module.css'
import { Foto } from "../Inputs/InputFoto";
import { Input } from "../Inputs/InputText";

export class DadosPrincipais extends React.Component {

    render() {
        return (
            <form className={styles.form}>
                <div className={styles.column}>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Descrição</label>
                        <Input id="descricao" type="text" placeholder="Digite a Descrição" name="descricao" ></Input>
                    </div>



                    <div className={styles.divInput}>
                        <label className={styles.label}>Fornecedor</label>
                        <select id="nome" type="text" placeholder="Digite o Nome do Fornecedor" name="fornecedor" >
                            {}
                        </select>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Ponto de Pedido</label>
                        <Input id="nome" type="text" placeholder="Digite o Ponto de Pedido" name="pontoPedido" ></Input>
                    </div>

                </div>

                <div className={styles.column}>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Validade</label>
                        <Input id="nome" type="text" placeholder="Digite a Validade do Produto" name="validade" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Demanda</label>
                        <Input id="nome" type="text" placeholder="Digite a Demanda por esse Produto" name="demanda" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Valor</label>
                        <Input id="nome" type="text" placeholder="Digite o Valor do Produto" name="valor" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite a Unidade de Medida do Produto" name="medida" ></Input>
                    </div>

                </div>
            </form>
        )
    }

}

export class Taxas_Impostos extends React.Component {
    render() {
        return (
            <form className={styles.form}>

                <div className={styles.column}>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                </div>

                <div className={styles.column}>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                    <div className={styles.divInput}>
                        <label className={styles.label}>Nome</label>
                        <Input id="nome" type="text" placeholder="Digite o Nome do Produto" name="nome" ></Input>
                    </div>

                </div>
            </form>
        )
    }
}

export class ImagemProduto extends React.Component {
    render() {
        return (
            <form className={styles.form}>
                <Foto></Foto>
            </form>
        )
    }
}


function ListarFornecedores() {
    api.get("api/fornecedor/list").then(function (response){
        const fornecedores = response.data
        console.log(fornecedores)
        for (let i= 0; i < fornecedores.length; i++) {
            const f = fornecedores[i];

            return (<option>{f.nome}</option>) 
        }
    })

}