import React, { useState } from "react";
import styles from "../../Styles/Recuperacao.module.css"
import { Input } from "../Inputs/InputText";
import loading from "../../IMG/loading.gif"

export class RecuperacaoSenha extends React.Component {
    render() {

        const { onChange, onClick } = this.props

        return (
            <div className={styles.container} id="recuperacaoDiv" >
                <div className={styles.recuperacao} id="recuperacao">

                    <header className={styles.header}>
                        <span className={styles.title}>Esqueceu a Senha?</span>
                        <span className={styles.close} id="close" onClick={fechar}><i className="fa-regular fa-circle-xmark"></i></span>
                    </header>


                    <div className={styles.recuperacaoContainer}>
                        <p>Não se preocupe, fizemos um sistema de recuperação de senha para pessoas como você que esquecem a própria senha que cadastrou. Digite seu email e um link será enviado para alterar sua senha</p>
                        <i className="fa-solid fa-key"></i>
                    </div>

                    <div className={styles.btn}>
                        <form onSubmit={onClick}>
                            <input type={"hidden"} id={"user"}></input>
                            <Input width={400} onChange={onChange} type={"email"} label={"Email"} ></Input>
                            <button className={styles.botao}>Enviar</button><img title={"Aguarde..."} id="loading" className={styles.loading} src={loading}></img>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export function fechar() {

    if (document.getElementById("loading").style.visibility != "visible") {
        const container = document.getElementById("recuperacaoDiv")
        const popup = document.getElementById("recuperacao")

        popup.classList.remove(styles.alertOn)
        container.style.display = "none"
    }
}

export function abrirRecuperacao(usuario) {
    const container = document.getElementById("recuperacaoDiv")
    const popup = document.getElementById("recuperacao")
    const inputUser = document.getElementById("user")
    inputUser.value = usuario

    popup.style.display = "flex"
    popup.classList.add(styles.alertOn)
    container.style.display = "flex"
}