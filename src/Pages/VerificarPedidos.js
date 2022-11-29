import React, { useEffect, useState } from "react";
import styles from '../Styles/VerificarPedidos.module.css'
import logo from "../IMG/Logo WMS.png"
import { ListaPedidos } from "../Components/InfoPedido/ListaPedidos";
import api from "../Services/api";

import QrCode from '../IMG/QrCode.png'
import CodBarra from '../IMG/CodBarra.png'
import { PopUpInfo } from "../Components/ItensHome/PopUpInfo";

export default function VerificarPedidos() {

    const [itens, setItens] = useState([])


    async function getPedido(id) {
        return api.get(`api/pedido/${id}`).then(
            response => {
                console.log(response.data.itens);
                setItens(response.data.itens)

            }
        )
    }

    function GerarNota() {
        api.get(`api/notaFiscal/pega/${localStorage.getItem("idPedido")}`).then(response => {
            const notaFiscal = response.data
            console.log(notaFiscal);
            window.location.href = `http://localhost:8080/api/pedido/teste/${notaFiscal.codigoNota}`
        })

    }

    function ItemCall(item) {
        let produto = document.getElementById('produto')
        let descricao = document.getElementById('descricao')
        let qnd = document.getElementById('qnd')
        let valor = document.getElementById('valor')
        let sku = document.getElementById('sku')
        let valorTotal = document.getElementById('valorTotal')

        produto.innerText = item.produto.nome
        descricao.innerText = item.produto.descricao
        qnd.innerText = item.quantidade
        valor.innerText = item.produto.valorUnitario
        sku.innerText = item.produto.sku
        valorTotal.innerText = item.quantidade * item.produto.valorUnitario
    }

    useEffect(() => {
        getPedido(localStorage.getItem('idPedido'))
    }, [])

    return (
        <section className={styles.container}>
            <a className='voltar' href="Home">
                <lord-icon
                    src="https://cdn.lordicon.com/jxwksgwv.json"
                    trigger="hover"
                    colors="primary:#121331"
                    state="hover-1"
                    style={{ width: 32, height: 32 }}>
                </lord-icon>
            </a>

            <a className={styles.estocagem} href="Enderecamento">
                <lord-icon
                    src="https://cdn.lordicon.com/jxwksgwv.json"
                    trigger="hover"
                    colors="primary:#121331"
                    state="hover-1"
                    style={{ width: 32, height: 32 }}>
                </lord-icon>
            </a>
            <div className={styles.Pedidos}>
                <div className={styles.headerList}>
                    <span className={styles.headerLogo}>
                        <img src={logo} className={styles.logo}></img>
                    </span>
                    <span className={styles.headerTitle}>
                        <p className={styles.SubTitle}>Pedido</p>
                    </span>
                    <a className={styles.notaFiscal} onClick={GerarNota}>
                        <p className={styles.notaFiscalTitle}>Nota Fiscal</p>
                        <i className="fa-solid fa-paper-plane"></i>
                    </a>
                </div>
                <div className={styles.lists}>
                    {itens.map((i, key) => <ListaPedidos key={key} item={i} chamarItem={ItemCall} />)}
                </div>
            </div>

            <div className={styles.BasePoup} id="BasePoup">
                <div className={styles.PopUpInfo} id="PopUpInfo">
                    <span className={styles.close} onClick={fechar}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </span>

                    <div className={styles.BaseInfo}>
                        <div className={styles.InfoLeft}>
                            <span className={styles.titleInfo}>
                                Produto:<p id='produto' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                Descrição:<p id='descricao' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                Quantidade:<p id='qnd' className={styles.info}></p>
                            </span>
                        </div>

                        <div className={styles.InfoRight}>
                            <span className={styles.titleInfo}>
                                Valor:<p id='valor' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                SKU:<p id='sku' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                ValorTotal:<p id='valorTotal' className={styles.info}></p>
                            </span>
                        </div>
                    </div>
                    <div className={styles.InfoBottom}>
                        <div className={styles.QrCode}>
                            <img src={QrCode} className={styles.QrCodeImg} />
                        </div>
                        <div className={styles.CodBarra}>
                            <img src={CodBarra} className={styles.CodBarraImg} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    function fechar() {
        const BasePoup = document.getElementById('BasePoup')
        const PopUpInfo = document.getElementById('PopUpInfo')
        BasePoup.style.display = 'none'
        PopUpInfo.style.display = 'none'
    }
} 