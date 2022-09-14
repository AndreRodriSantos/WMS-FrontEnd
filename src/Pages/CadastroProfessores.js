import React from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import styles from "../Styles/Cadastros/Prof_Aluno.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Foto"

export default function CadastroProfessores() {
    return (
        <div className={styles.container}>
            <div className={styles.imagensContainer}>

                <div className={styles.logoDiv}>
                    <img src={logo} className={styles.logo}></img>
                </div>

                <div className={styles.fotoDiv}>
                    <Foto></Foto>
                </div>

                <div></div>

            </div>

            <div className={styles.formContainer}>
                <h1 className={styles.h1}>Cadastro de Professor(a)</h1>
                <form>
                    <label className={styles.label}>Nome</label>
                    <br />
                    <Input type="text" placeholder="Digite o seu Nome" name="nome" />
                    <br />
                    <label className={styles.label}>NIF</label>
                    <br />
                    <Input type="number" name="nif" placeholder="Digite seu NIF" />
                    <br />
                    <label className={styles.label}>Senha</label>
                    <br />
                    <Input type="password" name="senha" placeholder="Digite sua Senha" />
                    <br />
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}