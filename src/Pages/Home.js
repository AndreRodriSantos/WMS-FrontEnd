import React, { useState, useEffect, Children } from "react";
import styles from "../Styles/ItensHome/Home.module.css"
import { SideBar } from "../Components/ItensHome/SideBar";
import { ListHome } from "../Components/ItensHome/ListHome";
import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import Caixas from '../IMG/Caixas.png'
import api from "../Services/api";

export default function Home() {

    const [fornecedor, setFornecedor] = useState([])
    const [pedido, setPedido] = useState([])
    const [produto, setProduto] = useState([])
    const [movimentacoes, setMovimentacoes] = useState([])

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

    function getMovimentacao() {
        api.get(`api/movimentacao`).then(response => {
            setMovimentacoes(response.data)
        })
    }

    function search(texto) {
        api.get(`api/movimentacao/findbyall/${texto}`).then(response => {
            setMovimentacoes(response.data)
        })
    }


    useEffect(() => {
        getFornecedor()
        getPedido()
        getProduto()
        localStorage.removeItem('idPedido')
    }, [])

    return (
        <section className={styles.components}>
            <div className={styles.home}>
                <SideBar />
             
                <div className={styles.homeRidth}>
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
                        <div className={styles.headerListMovimentacao}>
                            <span className={styles.headerTitleMovimentacao}>
                                <i className="fa-solid fa-users"></i>
                                <p className={styles.SubTitleMovimentacao}>Histórico de Estoque</p>
                            </span>
                            <InputPesquisa placeholder={"Pesquise uma Movimentação"} search={search} />
                        </div>
                        <div className={styles.tabelaContainer}>
                            <table className={styles.tabelaMovimentacao}>
                                <thead className={styles.tabelaMovimentacaoHead}>
                                    <tr>
                                        <th>Produto</th>
                                        <th>Data</th>
                                        <th>Tipo</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.tabelaMovimentacaoBody}>
                                    {movimentacoes.map((m, key) =>
                                        <tr key={key}>
                                            <td className={styles.produtoNome}>{m.produto.nome}</td>
                                            <td className={styles.data}>{m.data}</td>
                                            <td style={m.tipo == "ENTRADA" ? { color: "green" } : { color: "red" }} className={styles.tipo}>{m.tipo}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className={styles.base}>
                    <div className={styles.btnsList}>
                        <button id="btnPedidos" onClick={pedidoList} type="button" className={styles.buttons}><i className="fa-solid fa-cart-plus"></i></button>
                        <button id="btnFornecedor" onClick={fornecedorList} type="button" className={styles.buttonsFocus}><i className="fa-solid fa-address-book"></i></button>
                        <button id="btnProdutos" onClick={produtoList} type="button" className={styles.buttons}><i className="fa-solid fa-box"></i></button>
                    </div>
                    <div id="baseForm" className={styles.base_form}>

                        <div id='pedidoList' className={styles.listaPedidos}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>
                                    <i className="fa-solid fa-cart-plus"></i>
                                    <p className={styles.SubTitle}>Pedido</p>
                                </span>
                                <a href="/Pedido" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Pedido</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    pedido.map((p) => <ListHome id={p.numPedido} key={p.id} objeto={p} Info1={p.numPedido} Info2={p.dataPedido} Info3={"R$ " + p.valor} />)
                                }
                            </div>
                        </div>

                        <div id='fornecedorList' className={styles.listaFornecedor}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>
                                    <i className="fa-solid fa-address-book"></i>
                                    <p className={styles.SubTitle}>Fornecedor</p>
                                </span>
                                <a href="/CadastroFornecedores" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Fornecedor</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    fornecedor.map((f) => <ListHome objeto={f} key={f.id} Info1={f.nome} Info2={f.cnpj} Info3={f.uf} />)
                                }
                            </div>
                        </div>

                        <div id='produtoList' className={styles.listaProdutos}>
                            <div className={styles.headerList}>
                                <span className={styles.headerTitle}>
                                    <i className="fa-solid fa-box"></i>
                                    <p className={styles.SubTitle}>Produto</p>
                                </span>
                                <a href="/CadastroProduto" className={styles.addFornecedor}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                    <p className={styles.addTitle}>Novo Produto</p>
                                </a>
                            </div>
                            <div className={styles.lista}>
                                {
                                    produto.map((p) => <ListHome objeto={p} key={p.id} Info1={p.sku} Info2={p.nome} Info3={"R$ " + p.valorUnitario} />)
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
        BotChat.style.bottom = '-67%'
        balao.style.opacity = '1'
    }

    function produtoList() {
        const baseForm = document.getElementById('baseForm')
        const fornecedor = document.getElementById('btnFornecedor')
        const pedidos = document.getElementById('btnPedidos')
        const produtos = document.getElementById('btnProdutos')

        fornecedor.classList.replace(styles.buttonsFocus, styles.buttons)
        pedidos.classList.replace(styles.buttonsFocus, styles.buttons)

        produtos.classList.replace(styles.buttons, styles.buttonsFocus)

        baseForm.style.left = '-900px'

    }

    function fornecedorList() {
        const baseForm = document.getElementById('baseForm')
        const fornecedor = document.getElementById('btnFornecedor')
        const pedidos = document.getElementById('btnPedidos')
        const produtos = document.getElementById('btnProdutos')

        produtos.classList.replace(styles.buttonsFocus, styles.buttons)
        pedidos.classList.replace(styles.buttonsFocus, styles.buttons)

        fornecedor.classList.replace(styles.buttons, styles.buttonsFocus)

        baseForm.style.left = '-450px'
    }

    function pedidoList() {
        const baseForm = document.getElementById('baseForm')
        const fornecedor = document.getElementById('btnFornecedor')
        const pedidos = document.getElementById('btnPedidos')
        const produtos = document.getElementById('btnProdutos')

        fornecedor.classList.replace(styles.buttonsFocus, styles.buttons)
        produtos.classList.replace(styles.buttonsFocus, styles.buttons)

        pedidos.classList.replace(styles.buttons, styles.buttonsFocus)

        baseForm.style.left = '0'
    }

}