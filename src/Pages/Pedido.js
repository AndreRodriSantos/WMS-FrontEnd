import { useState } from "react"
import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import styles from "../Styles/Pedido.module.css"

export default function Pedido() {

    const [pesquisa, setPesquisa] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.pedidoDiv}>

                <header className={styles.header}>

                    <div className={styles.divPesquisa}>
                        <InputPesquisa id="pesquisaProduto" onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquise pelo Produto"></InputPesquisa>
                    </div>

                    <div className={styles.btns}>
                        <button id="btnAluno" type="button" className={styles.btnOn} onClick={Pedido}>Produtos</button>
                        <button id="btnProf" type="button" className={styles.btn} onClick={Produtos}>Item(s) Pedido</button>
                    </div>

                </header>

                <div className={styles.lista}>

                    <div className={styles.listaProdutos} id="listaProdutos">
                    
                    </div>

                    <div className={styles.itemsPedidos} id="itemsPedidos">

                    </div>

                </div>

                <div className={styles.footer}>
                    <span>Valor:</span>
                    <button className={styles.addProdutos}>Adicionar</button>
                </div>

            </div>
        </div>
    )
}

function Produtos(){

}

function ItemsPedidos(){
    
}
