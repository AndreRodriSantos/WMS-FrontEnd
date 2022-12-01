import React from "react"
import styles from "../../Styles/Relatorios.module.css"

export class Relatorios extends React.Component {
    render() {
        return (
            <div id="relatoriosContainer" className={styles.container}>
                <div  id="relatoriosDiv" className={styles.relatoriosDiv}>
                    <div className={styles.header}>
                        <span className={styles.title}>Relatórios</span>
                        <span onClick={fecharRelatorio} className={styles.close} id="closeRelatorio"><i className="fa-regular fa-circle-xmark"></i></span>
                    </div>
                    <div className={styles.relatoriosContainer}>
                        <div className={styles.relatorioBtn}>Relátorio 1</div>
                        <div className={styles.relatorioBtn}>Relátorio 2</div>
                        <div className={styles.relatorioBtn}>Relátorio 3</div>
                        <div className={styles.relatorioBtn}>Relátorio 4</div>
                    </div>
                </div>
            </div>
        )
    }
}

export function fecharRelatorio() {
    const container = document.getElementById("relatoriosContainer")
    const popup = document.getElementById("relatoriosDiv")
    popup.classList.remove(styles.alertOn)
    container.style.display = "none"
}

export function AbrirRelatorio() {
    const container = document.getElementById("relatoriosContainer")
    const popup = document.getElementById("relatoriosDiv")
    popup.classList.add(styles.alertOn)
    container.style.display = "flex"
}