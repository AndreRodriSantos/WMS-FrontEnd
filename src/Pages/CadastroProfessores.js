import React from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import styles from "../Styles/CadastroAlunos/Prof.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Foto"

import api from '../Services/api'

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
                <form onSubmit={CadastrarProf}>
                    <label className={styles.label}>Nome</label>
                    <br />
                    <Input id="nome" type="text" placeholder="Digite o seu Nome" name="nome" />
                    <br />
                    <label className={styles.label}>NIF</label>
                    <br />
                    <Input id="nif" type="number" name="nif" placeholder="Digite seu NIF" />
                    <br />
                    <label className={styles.label}>Senha</label>
                    <br />
                    <Input id="senha" type="password" name="senha" placeholder="Digite sua Senha" />
                    <br />
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}

function CadastrarProf(event){
    event.preventDefault()

    const nomeProf = document.getElementById('nome').value
    const nif = document.getElementById('nif').value
    const senha = document.getElementById('senha').value

    const body = {'nome':nomeProf, 'nif': nif, 'senha':senha };

    console.log(body)

    api.post(
        "api/professor/save",body
    );

}