import React from "react";
import styles from '../../Styles/PopUp.module.css'

export default class PopUp extends React.Component {
    render() {

        return (
            <div className={styles.container} id={"popUpDiv"}>
                <div id='PopUp' className={styles.popUp}>
                    <span className={styles.barraProgress}>
                        <span id='barra' className={styles.colorProgress} ></span>
                    </span>
                    <h3 id="texto" className={styles.Title}></h3>
                    <h3 id="mensagem" className={styles.TitleInfo}></h3>
                    <button className={styles.btn}>OK</button>
                </div>
            </div>
        );
    }
}

let isShowing = false

export function erro(mensagem) {
    setTimeout(() => {
        let mensagemDiv = document.getElementById("PopUp")
        let title = document.getElementById("texto")
        let texto = document.getElementById("mensagem")

        if (isShowing == false) {

            isShowing = true

            let count = 1

            setTimeout(() => {

                const barra = document.getElementById("barra")
    
                setInterval(() => {
    
                    if (count < 101) {
    
                        count += 1
    
                        barra.style.height = count + "%"
                    }
    
                }, 20)
    
            }, 500);

            mensagemDiv.style.top = "1%"
            mensagemDiv.classList.add("erro")
            texto.innerHTML = mensagem
            title.innerHTML = "Erro"

            setTimeout(() => {
                mensagemDiv.style.top = "-30%"
                setTimeout(() => {
                    mensagemDiv.classList.remove("erro")
                    isShowing = false
                }, 500);
            }, 2500);

        }
    }, 5);
}

export function sucesso(mensagem) {
    setTimeout(() => {
        let mensagemDiv = document.getElementById("PopUp")
        let texto = document.getElementById("mensagem")
        let title = document.getElementById("texto")

        if (isShowing == false) {

            isShowing = true

            let count = 1

            setTimeout(() => {

                const barra = document.getElementById("barra")
                barra.style.backgroundColor = 'green'
    
                setInterval(() => {
    
                    if (count < 101) {
    
                        count += 1
    
                        barra.style.height = count + "%"
                    }
    
                }, 20)
    
            }, 500);

            mensagemDiv.style.top = "1%"
            mensagemDiv.classList.add("sucesso")
            
            title.style.color = "green"
            texto.innerHTML = mensagem
            title.innerHTML = "Sucesso"

            setTimeout(() => {
                mensagemDiv.style.top = "-30%"
                setTimeout(() => {
                    mensagemDiv.classList.remove("sucesso")
                    isShowing = false
                }, 500);
            }, 2500);
        }
    }, 5);
}
