import React, { useEffect, useState } from "react";
import styles from '../Styles/VerificarPedidos.module.css'
import logo from "../IMG/Logo WMS.png"
import { ListaPedidos } from "../Components/InfoPedido/ListaPedidos";
import api from "../Services/api";

export default function VerificarPedidos() {

    const [vp, setVp] = useState([

    ])

    function getPedido(){
       
    }

    useEffect(() => {
        getPedido()
    },[])

    return (
        <section className={styles.container}>

            <a className={styles.voltar} href="/Home">
                <i className="fa-solid fa-arrow-rotate-left"></i>
            </a>

            <a className={styles.estocagem} href="#">               
                <i className="fa-solid fa-arrow-rotate-right"></i>
            </a>
            <div className={styles.Pedidos}>
                <div className={styles.headerList}>
                    <span className={styles.headerLogo}>
                        <img src={logo} className={styles.logo}></img>
                    </span>
                    <span className={styles.headerTitle}>                   
                        <p className={styles.SubTitle}>Pedido</p>
                    </span>
                    <a href="#" className={styles.notaFiscal}>               
                        <p className={styles.notaFiscalTitle}>Nota Fiscal</p>
                        <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </div>
                <div className={styles.lists}>
                    {vp.map((p) => <ListaPedidos produto={p} descricao={p} qnd={p} valor={p} fornecedor={p} volorTotal={p}/> )}    
                    <ListaPedidos />
                </div>
            </div>
        </section>
    )
} 