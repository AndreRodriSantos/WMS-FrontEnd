import React from "react";
import styles from "../../Styles/ItensHome/SideBar.module.css"
import logo from "../../IMG/Logo WMS.png"
import logoBox from "../../IMG/Logo WMS2.png"

export class SideBar extends React.Component {
    render() {
        return (
            <div className={styles.sidebar} >
                <div className={styles.btn}>
                <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div className={styles.logo_details}>
                    <div className={styles.logos}>
                        <img src={logoBox} className={styles.logoBox}></img>
                        <img src={logo} className={styles.logo}></img>
                    </div>
                    <ul className={styles.nav_links}>
                        <li>
                            <a className={styles.link} href="#">
                                <div className={styles.link_icon}>
                                    <span className={styles.icon}><i class="fa-solid fa-house"></i></span>
                                </div>
                                <div className={styles.link_name}>
                                    <span className={styles.name}>Home</span>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        );
    }
}