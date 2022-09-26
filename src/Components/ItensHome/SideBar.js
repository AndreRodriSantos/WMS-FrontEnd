import React from "react";
import styles from "../../Styles/ItensHome/SideBar.module.css"
import logoBox from "../../IMG/Logo WMS2.png"
import { CadastroNcm } from "./CadastroNcm"

export class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <div className={styles.logo}>
                    <img src={logoBox} className={styles.logoBox}></img>
                </div>
                <div className={styles.btn}>
                    <i className="fa-solid fa-arrow-right"></i>
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

function chamarNCM() { 
    const payment = document.getElementById("payment");
    const principal = document.getElementById("principal");
    const popUp = document.getElementById("popUp");

    payment.style.display = "flex"
    principal.style.display = "flex"
    popUp.style.zIndex = 10


}