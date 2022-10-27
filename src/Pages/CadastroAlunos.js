import React, { useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha"
import styles from "../Styles/Cadastros/Prof_Aluno.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Inputs/InputFoto"

import api from "../Services/api"

export default function CadastroAlunos() {

    function CadastrarAluno(event) {
        let imagem = document.getElementById("imgPhoto").getAttribute("src")
        console.log(imagem)
        event.preventDefault()
        var body = {"nome":nome , "codMatricula":matricula , imagem , "email":emailAluno ,"senha":senha };
        console.log(body)
        api.post(
            "api/aluno/save",body
        );
    }

    const [nome, setNome] = useState('')
    const [matricula, setMatricula] = useState('')
    const [emailAluno, setEmailAluno] = useState('')
    const [senha, setSenha] = useState('')

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
                    <Input label="Nome" id="nome" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Digite o seu Nome" name="nome" />
                    <br/>
                    <Input label="N° Matricula" id="numMatricula" type="number" onChange={(e) => setMatricula(e.target.value)} name="numMatricula" placeholder="Digite o N° Matrícula" />
                    <br/>
                    <Input label="Email" id="emailAluno" type="email" onChange={(e) => setEmailAluno(e.target.value)} name="emailAluno" placeholder="Digite o Email" />
                    <br/>
                    <InputSenha label="Senha" id="senha"  id_eye="eye"  type="password" onChange={(e) => setSenha(e.target.value)} name="senha" placeholder="Digite sua Senha" />
                    <br/>
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}