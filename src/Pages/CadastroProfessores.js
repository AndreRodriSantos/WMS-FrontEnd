import React, { useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha"
import styles from "../Styles/Cadastros/Prof_Aluno.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Inputs/InputFoto"

import api from '../Services/api'

export default function CadastroProfessores() {

    const [nome, setNome] = useState('')
    const [nif, setNif] = useState('')
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
                <h1 className={styles.h1}>Cadastro de Professor(a)</h1>
                <form onSubmit={CadastrarProf}>
                    <Input id="nome" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Digite o seu Nome" name="nome" label="Nome" />
                    <Input id="nif" type="number" onChange={(e) => setNif(e.target.value)} name="nif" placeholder="Digite seu NIF" label="Nif" />
                    <InputSenha id="senha"  id_eye="eye" type="password" onChange={(e) => setSenha(e.target.value)} name="senha" placeholder="Digite sua Senha" label="Senha" />
                    <Button>Cadastrar</Button>
                </form>
            </div>
        </div>
    )

}

function CadastrarProf(event) {
    event.preventDefault()

    const nomeProf = document.getElementById('nome').value
    const nif = document.getElementById('nif').value
    const senha = document.getElementById('senha').value
    let imagem = document.getElementById("imgPhoto").getAttribute("src")

    const body = { 'nome': nomeProf, 'nif': nif, 'senha': senha, imagem };

    console.log(body)

    api.post(
        "api/professor/save", body
    )
}