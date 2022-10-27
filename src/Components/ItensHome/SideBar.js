
import React from "react";
import styles from "../../Styles/ItensHome/SideBar.module.css"
import logoBox from "../../IMG/Logo WMS2.png"
import { CadastroNcm } from "./CadastroNcm"
import CadastroMedidas from "../Forms/CadastroMedidas";

export class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div id='onBtn' onClick={onSideBar} className={styles.btn}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div id='offBtn' onClick={offSideBar} className={styles.btnOff}>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div id="sideBar" className={styles.base}>
                    <div className={styles.btnsList}>
                        <img className={styles.logo} src={logoBox} />
                    </div>

                    <div className={styles.base_form}>
                        {/* HOME */}
                        <a href="#" className={styles.list}>
                            <span className={styles.icon}>
                                <i className="fa-solid fa-house"></i>
                            </span>
                            <span className={styles.iconTitle}>
                                Home
                            </span>
                        </a>


                    </div>
                    {/* SOBRE */}
                    <div className={styles.sobre}>
                        <div className={styles.user}>
                            <div className={styles.ImgUser}>
                                <img />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

function onSideBar() {
    const sideBar = document.getElementById("sideBar");
    const onBtn = document.getElementById("onBtn");
    const offBtn = document.getElementById("offBtn");

    sideBar.style.width = '300px'
    onBtn.style.display = 'none'
    offBtn.style.display = 'flex'
}

function offSideBar() {
    const sideBar = document.getElementById("sideBar");
    const offBtn = document.getElementById("offBtn");
    const onBtn = document.getElementById("onBtn");

    sideBar.style.width = '100px'
    onBtn.style.display = 'flex'
    offBtn.style.display = 'none'
}

function chamarNCM() {
    const payment = document.getElementById("payment");
    const principal = document.getElementById("principal");
    const popUp = document.getElementById("popUp");

    payment.style.display = "flex"
    principal.style.display = "flex"
    popUp.style.zIndex = 10
}

function chamarMedidas() {
    const popUpMedidas = document.getElementById("popUpMedidas");
    const base = document.getElementById("base");
    const containerMedida = document.getElementById("containerMedida");

    base.style.display = "flex"
    containerMedida.style.display = "flex"
    popUpMedidas.style.zIndex = 10

}
