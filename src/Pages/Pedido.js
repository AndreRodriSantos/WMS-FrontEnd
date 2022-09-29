import { useEffect, useState } from "react"
import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import ProdutoItem from "../Components/ProdutoItem"
import api from "../Services/api"
import styles from "../Styles/Pedido.module.css"

export default function Pedido() {

    const [pesquisa, setPesquisa] = useState('')
    const [produto, setProduto] = useState([])

    function getProduto(){
        return api.get('api/produto').then(
            response => {
                setProduto(response.data)
                return response.data
            }
        )
    }

    useEffect(() =>{
        getProduto()
    },[])


    return (
        <div className={styles.container}>
            <div className={styles.pedidoDiv}>

                <header className={styles.header}>

                    <div className={styles.divPesquisa}>
                        <InputPesquisa id="pesquisaProduto" onChange={(e) => setPesquisa(e.target.value)} placeholder="Pesquise pelo Produto"></InputPesquisa>
                    </div>

                    <div className={styles.btns}>
                        <button id="btnProduto" type="button" className={styles.btnOn} onClick={Produtos}>Produtos</button>
                        <button id="btnPedido" type="button" className={styles.btn} onClick={ItemsPedidos} >Item(s) Pedido</button>
                    </div>

                </header>

                <div className={styles.lista}>

                    <div className={styles.produtoOn} id="listaProdutos">
                        {produto.map(p => <ProdutoItem key={p.id} nome={p.nome} valor={"R$ " + p.valorUnitario}/>)}
                    </div>

                    <div className={styles.pedidoOff} id="itemsPedidos">

                    </div>

                </div>

                <div>

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
    const produto = document.getElementById('listaProdutos')
    const pedido = document.getElementById('itemsPedidos')

    const btnProduto = document.getElementById('btnProduto')
    const btnPedido = document.getElementById('btnPedido')

    produto.classList.replace(styles.ProdutoOff, styles.ProdutoOn)
    pedido.classList.replace(styles.PedidoOn, styles.PedidoOff)

    btnProduto.classList.replace(styles.btn, styles.btnOn)
    btnPedido.classList.replace(styles.btnOn, styles.btn)
}

function ItemsPedidos(){
    const produto = document.getElementById('listaProdutos')
    const pedido = document.getElementById('itemsPedidos')

    const btnProduto = document.getElementById('btnProduto')
    const btnPedido = document.getElementById('btnPedido')

    produto.classList.replace(styles.ProdutoOn, styles.ProdutoOff)
    pedido.classList.replace(styles.PedidoOff, styles.PedidoOn)

    btnPedido.classList.replace(styles.btn, styles.btnOn)
    btnProduto.classList.replace(styles.btnOn, styles.btn)
}
