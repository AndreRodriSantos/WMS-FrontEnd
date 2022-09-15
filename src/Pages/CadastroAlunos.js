import React from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import { InputSenha } from "../Components/Inputs/InputSenha"
import styles from "../Styles/CadastroAlunos/Prof.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Foto"

import api from "../Services/api"

export default function CadastroAlunos() {
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
                <h1 className={styles.h1}>Cadastro de Aluno(a)</h1>
                <form onSubmit={CadastrarAluno}>
                    <Input id="nome" type="text" placeholder="Digite o seu Nome" name="nome" label="Nome" />
                    
                    <Input id="numMatricula" type="number" name="numMatricula" placeholder="Digite o N° Matrícula" label="N° Matrícula" />
                   
                    <InputSenha name="senha" placeholder="Digite sua Senha" label="Senha"/>
                    
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}

function CadastrarAluno(event) {
    event.preventDefault()

    var nome = document.getElementById("nome").value
    var numMatricula = document.getElementById("numMatricula").value
    var senha = document.getElementById("senha").value

    var body = {"nome":nome , "codMatricula":numMatricula , "senha":senha };

    console.log(body)

    api.post(
        "api/aluno/save",body
    );

}