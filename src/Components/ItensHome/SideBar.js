import React from "react";
import styles from "../../Styles/ItensHome/SideBar.module.css"
import logoBox from "../../IMG/Logo WMS2.png"
import { CadastroNcm } from "./CadastroNcm"

export class SideBar extends React.Component {
    render() {
        return (
            <div id='sideBar' className={styles.sidebar}>
                <div id='logo' className={styles.logo}>
                    <img src={logoBox} className={styles.logoBox}></img>
                </div>
                <div id='onBtn' onClick={onSideBar} className={styles.btn}>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div id='offBtn' onClick={offSideBar} className={styles.btnOff}>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <ul className={styles.nav_links}>
                    <li className={styles.link}>
                        <span className={styles.navOn}></span>
                        <a href="#">
                            <div className={styles.iconOn}>
                                <i className="fa-solid fa-house"></i>
                            </div>
                        </a>
                    </li>
                    <li className={styles.link}>
                        <span className={styles.navOf}></span>
                        <a href="#">
                            <div className={styles.icon}>
                                <i className="fa-solid fa-house"></i>
                            </div>
                        </a>
                    </li>         
                    
                    <li className={styles.link}>
                        <span className={styles.navOf}></span>
                        <a className={styles.baseIcon} href="#">
                            <div className={styles.OnIcon}>
                                <i className="fa-solid fa-house"></i>
                            </div>
                            <span className={styles.inconTitle}>
                                Tele Principal
                            </span>
                        </a>
                    </li>   

                    {/* NCM */}
                    <li className={styles.link}>
                        <a className={styles.iconNCM} onClick={chamarNCM}>
                            <span className={styles.textNcm}>NCM</span>
                        </a>
                    </li>
                    {/* Sair */}
                    <li className={styles.logout}>
                        <a className={styles.iconLogout} href="#">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        </a>
                    </li>
                </ul>
                <div id="popUp" className={styles.popUp}>
                    <CadastroNcm />
                </div>
            </div>
        );
    }
}

function onSideBar(){
    const sideBar = document.getElementById("sideBar");
    const logo = document.getElementById("logo");
    const onBtn = document.getElementById("onBtn");
    const offBtn = document.getElementById("offBtn");

    sideBar.classList.replace(styles.sidebar, styles.Onsidebar )
    logo.classList.replace(styles.logo, styles.onLogo )
    onBtn.style.display = 'none'
    offBtn.style.display = 'flex'
}

function offSideBar(){
    const sideBar = document.getElementById("sideBar");
    const logo = document.getElementById("logo");
    const offBtn = document.getElementById("offBtn");
    const onBtn = document.getElementById("onBtn");
    
    sideBar.classList.replace( styles.Onsidebar, styles.sidebar)
    logo.classList.replace(styles.onLogo, styles.logo )
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
