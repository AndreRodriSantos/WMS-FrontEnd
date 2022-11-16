import React from "react";
import styles from "../../Styles/Recuperacao.module.css"
import { Input } from "../Inputs/InputText";


export class RecuperacaoSenha extends React.Component {
    render() {
        return (
            <div className={styles.container} id="recuperacaoDiv" >
                <div className={styles.recuperacao} id="recuperacao">

                    <header className={styles.header}>
                        <span className={styles.title}>Esqueceu a Senha?</span>
                        <span className={styles.close} onClick={fechar}><i className="fa-regular fa-circle-xmark"></i></span>
                    </header>

                    <div className={styles.rec}>

                        <div className={styles.recuperacaoContainer}>
                            <p>Não se preocupe, fizemos um sistema de recuperação de senha para pessoas como você que esquecem a própria senha que cadastrou. Digite seu email e um link será enviado para alterar sua senha</p>
                            <Input type={"email"} label={"Email"} ></Input>
                        </div>

                        <div className={styles.btn}>
                            <i className="fa-solid fa-key"></i>
                            <button className={styles.botao}>Enviar</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export function fechar() {
    const container = document.getElementById("recuperacaoDiv")
    const popup = document.getElementById("recuperacao")

    popup.classList.remove(styles.alertOn)
    container.style.display = "none"

}

export function abrirRecuperacao() {
    const container = document.getElementById("recuperacaoDiv")
    const popup = document.getElementById("recuperacao")

    popup.style.display = "flex"
    popup.classList.add(styles.alertOn)
    container.style.display = "flex"

}