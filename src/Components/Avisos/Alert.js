import React from "react";
import styles from "../../Styles/Alert.module.css"


export class Alert extends React.Component {
    render() {

        return (
            <div className={styles.container} id="alertDiv" style={{ display: "none" }}>
                <div className={styles.alert} id="alert">
                    <div className={styles.barra} id={"barra"}></div>

                    <div className={styles.alertContainer}>
                        <p className={styles.title} id="title"></p>
                        <span id="mensagem"></span>

                        <button onClick={fechar} className={styles.btn}>
                            OK
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

let count = 1

export function sucesso(mensagem) {

    setTimeout(() => {
        const container = document.getElementById("alertDiv")
        const alert = document.getElementById("alert")
        const barra = document.getElementById("barra")
        const msg = document.getElementById("mensagem")
        const title = document.getElementById("title")

        container.style.display = "flex"
        alert.classList.add(styles.alertOn)
        barra.style.backgroundColor = "green"
        msg.innerHTML = mensagem
        title.style.color = "green"
        title.innerHTML = "Sucesso"


        setTimeout(() => {
            count = 1
            var intervalsucesso = setInterval(() => {
                if (count < 101) {
                    count += 1
                    barra.style.height = count + "%"
                } else {
                    fechar()
                    clearInterval(intervalsucesso)
                }
            }, 30)
        }, 500);

    }, 100);

}

export function erro(mensagem) {


    setTimeout(() => {

        const container = document.getElementById("alertDiv")
        const alert = document.getElementById("alert")
        const barra = document.getElementById("barra")
        const msg = document.getElementById("mensagem")
        const title = document.getElementById("title")

        container.style.display = "flex"
        alert.classList.add(styles.alertOn)
        barra.style.backgroundColor = "red"
        msg.innerHTML = mensagem
        title.style.color = "red"
        title.innerHTML = "Erro"

        setTimeout(() => {
            count = 1
            var intervalerro = setInterval(() => {

                if (count < 101) {
                    count += 1
                    barra.style.height = count + "%"
                } else {
                    fechar(intervalerro)
                    clearInterval(intervalerro)
                }
            }, 30)
        }, 500);

    }, 100);

}

export function fechar() {
    const container = document.getElementById("alertDiv")
    const barra = document.getElementById("barra")
    const alert = document.getElementById("alert")

    alert.classList.remove(styles.alertOn)
    count = 100
    barra.style.height = "0%"


    container.style.display = "none"
    barra.style.height = "0%"
}