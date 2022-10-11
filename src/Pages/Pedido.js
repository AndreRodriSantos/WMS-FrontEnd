import { useEffect, useState } from "react"
import { render } from "react-dom"
import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import ItemPedido from "../Components/ItemPedido"
import ProdutoItem from "../Components/ProdutoItem"
import api from "../Services/api"
import styles from "../Styles/Pedido.module.css"

export default function Pedido() {

    const [pesquisa, setPesquisa] = useState('')
    const [produto, setProduto] = useState([])
    let [produtoSelecionados, setProdutoSelecionados] = useState([])
    let [produtosAdicionados, setProdutosAdicionados] = useState([])

    function getProduto() {
        return api.get('api/produto/list').then(
            response => {
                setProduto(response.data)
                return response.data
            }
        )
    }

    function onCheck(produto, quantidade) {
        let valorSpan = document.getElementById("valorTotalSelec")
        let valorAtual = document.getElementById("valorTotalSelec").textContent
        valorAtual = parseInt(valorAtual)
        const valorProd = valorAtual + produto.valorUnitario * quantidade
        valorSpan.textContent = valorProd

        setProdutoSelecionados(produtosSelecionados => [...produtosSelecionados, {
            produto, quantidade
        }])
    }

    function unCheck(produto, qtd) {
        let valorSpan = document.getElementById("valorTotalSelec")
        let valorAtual = document.getElementById("valorTotalSelec").textContent
        valorAtual = parseInt(valorAtual)
        const valorProd = valorAtual - produto.valorUnitario * qtd
        valorSpan.textContent = valorProd

        produtoSelecionados.map((p, index) => {
            const prod = p.produto

            if (prod.codProduto == produto.codProduto) {
                produtoSelecionados.splice(index, 1)
            }
        })
    }

    function addLista() {
        produtoSelecionados.map(p => {
            setProdutosAdicionados(produtosAdicionados => [...produtosAdicionados, p])
        })
        console.log(produtoSelecionados)
        console.log(produtosAdicionados)

        ItemsPedidos()
    }

    function finalizarPedido() {
        const valorTotal = document.getElementById("valorTotalSelec").textContent
        const pedido = {
            "itens": produtosAdicionados,
            "valor": valorTotal
        }

        api.post("api/pedido/save", pedido)
    }

    function Pesquisar(texto) {
        api.get(`api/produto/findbyall/${texto}`).then(response => {
            setProduto(response.data)
            console.log(produto)
        })
    }

    useEffect(() => {
        getProduto()
    }, [])

    function tirarProdutoLista(id) {
        console.log();
        produtosAdicionados.map((p, index) => {
            const prod = p.produto
            if (prod.codProduto == id) {
                setProdutosAdicionados(produtosAdicionados => produtosAdicionados.splice(index, 1))
            }
        })
        console.log(produtosAdicionados);
    }

    return (
        <div className={styles.container}>
            <div className={styles.pedidoDiv}>

                <header className={styles.header}>

                    <div className={styles.divPesquisa}>
                        <InputPesquisa id="pesquisaProduto" search={Pesquisar} placeholder="Pesquise pelo Produto"></InputPesquisa>
                    </div>

                    <div className={styles.btns} >
                        <button id="btnProduto" type="button" className={styles.btnOn} onClick={Produtos}>Produtos</button>
                        <button id="btnPedido" type="button" className={styles.btn} onClick={ItemsPedidos} >Item(s) Pedido</button>
                    </div>

                </header>

                <div className={styles.lista}>

                    <div className={styles.produtoOn} id="listaProdutos">
                        {produto.map((p, key) => <ProdutoItem onCheck={onCheck} key={key} unCheck={unCheck} id={p.codProduto} produto={p} />)}
                    </div>

                    <div className={styles.pedidoOff} id="itemsPedidos">
                        {produtosAdicionados.map((p, key) => <ItemPedido tirarProduto={tirarProdutoLista} produto={p.produto} key={key} quantidade={p.quantidade}></ItemPedido>)}
                    </div>

                </div>

                <div>

                </div>

                <div className={styles.footer}>
                    <div>
                        <span className={styles.spanValor}>Valor: R$ </span>
                        <span className={styles.spanValor} id="valorTotalSelec">{0}</span>
                    </div>

                    <div className={styles.btnsFooter}>
                        <button className={styles.addProdutos} onClick={addLista} id="btnAdicionar">Adicionar</button>
                        <button className={styles.finalizarPedido} style={{ visibility: "hidden" }} onClick={finalizarPedido} id="btnFinalizar">Finalizar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Produtos() {
    const produto = document.getElementById('listaProdutos')
    const pedido = document.getElementById('itemsPedidos')

    const btnAdicionar = document.getElementById('btnAdicionar')
    const btnFinalizar = document.getElementById('btnFinalizar')

    btnAdicionar.style.visibility = "visible"
    btnFinalizar.style.visibility = "hidden"

    const btnProduto = document.getElementById('btnProduto')
    const btnPedido = document.getElementById('btnPedido')



    produto.classList.replace(styles.produtoOff, styles.produtoOn)
    pedido.classList.replace(styles.pedidoOn, styles.pedidoOff)

    btnProduto.classList.replace(styles.btn, styles.btnOn)
    btnPedido.classList.replace(styles.btnOn, styles.btn)
}

function ItemsPedidos() {
    const produto = document.getElementById('listaProdutos')
    const pedido = document.getElementById('itemsPedidos')

    const btnAdicionar = document.getElementById('btnAdicionar')
    const btnFinalizar = document.getElementById('btnFinalizar')

    btnAdicionar.style.visibility = "hidden"
    btnFinalizar.style.visibility = "visible"

    const btnProduto = document.getElementById('btnProduto')
    const btnPedido = document.getElementById('btnPedido')

    produto.classList.replace(styles.produtoOn, styles.produtoOff)
    pedido.classList.replace(styles.pedidoOff, styles.pedidoOn)

    btnPedido.classList.replace(styles.btn, styles.btnOn)
    btnProduto.classList.replace(styles.btnOn, styles.btn)
}
