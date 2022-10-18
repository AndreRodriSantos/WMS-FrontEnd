import React, { useState, useEffect } from "react";
import styles from "../Styles/ItensHome/Home.module.css"
import { SideBar } from "../Components/ItensHome/SideBar";
import { ListHome } from "../Components/ItensHome/ListHome";
import Caixas from '../IMG/Caixas.png'
import api from "../Services/api";

export default function Home() {

    const [fornecedor, setFornecedor] = useState([])
    const [pedido, setPedido] = useState([])
    const [produto, setProduto] = useState([])

    function getFornecedor() {
        api.get(`api/fornecedor/list`).then(
            response => {
                setFornecedor(response.data)
            }
        )
    }
    function getPedido() {
        api.get(`api/pedido/list`).then(
            response => {
                console.log(response.data);
                setPedido(response.data)
            }
        )
    }
    function getProduto() {
        api.get(`api/produto/list`).then(
            response => {
                console.log(response.data);
                setProduto(response.data)
            }
        )
    }


    useEffect(() => {
        getFornecedor()
        getPedido()
        getProduto()
    }, [])

    return (
        <section className={styles.components}>
            <div className={styles.home}>
                <SideBar />
                <div className={styles.cardTutorial}>
                    <h2 className={styles.titleCard}>Gerenciamento de estoque nunca foi tão fácil</h2>
                    <div className={styles.subCard}>
                        <p className={styles.subTitle}>
                            Está com duvidas?
                        </p>
                        <p className={styles.subTitle}>
                            Venha Conhecer nosso tutorial Rapido e Fácil!
                        </p>
                        <p className={styles.subTitle}>
                            Aprender nunca foi tão divertido
                        </p>
                    </div>
                    <div className={styles.btns}>
                        <button className={styles.tutorial}>TUTORIAL</button>
                        <button className={styles.simulacao}>simulação</button>
                    </div>
                    <div className={styles.Caixa}>
                        <img className={styles.C1} src={Caixas} />
                    </div>
                </div>
                <div className={styles.listHistorico}>

                </div>

                <div className={styles.base}>
                    <div className={styles.btnsList}>
                        <button id="btnPedodos" onClick={pedidoList} type="button" className={styles.btnPedidos}>Pedidos</button>
                        <button id="btnFornecedor" onClick={fornecedorList} type="button" className={styles.btnFornecedor}>Fornecedor</button>
                        <button id="btnProdutos" onClick={produtoList} type="button" className={styles.btnProdutos}>Produtos</button>
                    </div>
                    <div className={styles.base_form}>

                        <div id='pedidoList' className={styles.listaPedidos}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>

                                </span>
                                <a href="/Pedido" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Pedido</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    pedido.map((f) => <ListHome key={f.id} objeto={f} />)
                                }
                            </div>
                        </div>

                        <div id='fornecedorList' className={styles.listaFornecedor}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>

                                </span>
                                <a href="/CadastroFornecedores" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Fornecedor</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    fornecedor.map((f) => <ListHome key={f.id} objeto={f} />)
                                }
                            </div>
                        </div>

                        <div id='produtoList' className={styles.listaProdutos}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>

                                </span>
                                <a href="/CadastroProduto" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Produto</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    produto.map((f) => <ListHome key={f.id} objeto={f} />)
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id='chatbot' className={styles.BaseBotChat}>
                <div className={styles.baseAI}>
                    <div id='btnOff' onClick={fecharChat} className={styles.btnOff}>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                    <div id='btnOn' onClick={abrirChat} className={styles.btnOn}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                    <div id='balao' className={styles.interogacao}>
                        <i className="fa-solid fa-question"></i>
                        <span className={styles.triangulo}></span>
                    </div>
                </div>
                <div className={styles.foto}>

                </div>
                <div className={styles.BotChat}>

                    <span className={styles.title}>
                        <i className="fa-solid fa-comment"></i>
                        <h3>ChatBot</h3>
                    </span>

                </div>
            </div>

        </section>
    );

    function abrirChat() {
        const btnOn = document.getElementById('btnOn')
        const btnOff = document.getElementById('btnOff')
        const BotChat = document.getElementById('chatbot')
        const balao = document.getElementById('balao')
        btnOn.style.opacity = '0'
        btnOn.style.zIndex = '0'
        btnOff.style.opacity = '1'
        btnOff.style.zIndex = '1'
        BotChat.style.bottom = '0%'
        balao.style.opacity = '0'
    }

    function fecharChat() {
        const btnOn = document.getElementById('btnOn')
        const btnOff = document.getElementById('btnOff')
        const BotChat = document.getElementById('chatbot')
        const balao = document.getElementById('balao')
        btnOn.style.opacity = '1'
        btnOn.style.zIndex = '1'
        btnOff.style.opacity = '0'
        btnOff.style.zIndex = '0'
        BotChat.style.bottom = '-57%'
        balao.style.opacity = '1'
    }

    function produtoList() {
        const pedido = document.getElementById('pedidoList')
        const produto = document.getElementById('produtoList')
        const fornecedor = document.getElementById('fornecedorList')
        produto.style.right = '0'
        fornecedor.style.right = '500px'
        pedido.style.left = '500px'

    }

    function fornecedorList() {
        const produto = document.getElementById('produtoList')
        const pedido = document.getElementById('produtoList')
        const fornecedor = document.getElementById('fornecedorList')
        produto.style.right = '500px'
        fornecedor.style.right = '0'

    }

    function pedidoList() {
        const pedido = document.getElementById('pedidoList')
        const produto = document.getElementById('produtoList')
        const fornecedor = document.getElementById('fornecedorList')
        pedido.style.left = '0'
        fornecedor.style.right = '500px'
        produto.style.right = '500px'

    }

}
