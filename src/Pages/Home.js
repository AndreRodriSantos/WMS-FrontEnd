import React from "react";
import styles from "../Styles/ItensHome/Home.module.css"
import { SideBar } from "../Components/ItensHome/SideBar";
import Caixas from '../IMG/Caixas.png'

export default function Home() {

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
                        <button id="btnPedodos" type="button" className={styles.btnPedidos}>Pedidos</button>
                        <button id="btnFornecedor" type="button" className={styles.btnFornecedor}>Fornecedor</button>
                        <button id="btnProdutos" type="button" className={styles.btnProdutos}>Produtos</button>
                    </div>
                    <div className={styles.base_form}>
                        <div className={styles.listaFornecedor}>
                            
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
}
