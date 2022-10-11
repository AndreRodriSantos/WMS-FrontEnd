import React from "react";
import styles from "../Styles/ItensHome/Home.module.css"
import { SideBar } from "../Components/ItensHome/SideBar";

export default function Home() {

    function abrirChat() {
        const btnOn = document.getElementById('btnOn')
        const btnOff = document.getElementById('btnOff')
        const BotChat = document.getElementById('chatbot')
        btnOn.style.opacity = '0'
        btnOn.style.zIndex = '0'  
        btnOff.style.opacity = '1' 
        BotChat.style.bottom = '0%'
    }
    function fecharChat() {
        const btnOn = document.getElementById('btnOn')
        const btnOff = document.getElementById('btnOff')
        const BotChat = document.getElementById('chatbot')
        btnOn.style.opacity = '1' 
        btnOff.style.opacity = '0' 
        btnOff.style.zIndex = '0'
        BotChat.style.bottom = '-57%' 
        
    }

    return (
        <section className={styles.components}>
            <div className={styles.home}>
                <SideBar />
                <div className={styles.cardTutorial}>

                </div>
                <div className={styles.listHistorico}>

                </div>
            </div>
            <div id='chatbot' className={styles.BotChat}>
                
                <span className={styles.title}>
                    <i className="fa-solid fa-comment"></i>
                    <h3>ChatBot</h3>
                </span>
                <div className={styles.baseAI}>
                    <div id='btnOff' onClick={fecharChat} className={styles.btnOff}>
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                    <div id='btnOn' onClick={abrirChat} className={styles.btnOn}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                    <div className={styles.foto}>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}
