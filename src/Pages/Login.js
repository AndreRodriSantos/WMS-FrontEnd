import React, { useState } from "react";
import styles from '../Styles/Login.module.css'
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha"
import logo from "../IMG/Logo WMS.png"
import api from "../Services/api";

export default function Login() {

    const [codMatricula, setCodMatricula] = useState("")
    const [senha, setSenha] = useState("")

    function LogAluno(e) {
        e.preventDefault()

        const body = {
            codMatricula, senha
        }

        api.post("api/aluno/login", body).then(
            response => {
                localStorage.setItem("token", response.data),
                console.log(localStorage.getItem("token"));
            })

    }

    function LogProf() {

    }

    return (
        <div className={styles.container}>

            <div className={styles.div_title}>
                <a className="navigation-link navigation-link-1" href="#">
                    <span data-text="Warehouse Management System" className={styles.span}>Warehouse Management System</span>
                </a>
            </div>

            <img src={logo} className={styles.logo}></img>
            <div className={styles.base}>
                <div className={styles.btns}>
                    <button id="btnAluno" type="button" className={styles.btnOn} onClick={loginAluno}>Aluno</button>
                    <button id="btnProf" type="button" className={styles.btn} onClick={loginProf}>Professor</button>
                </div>
                <span className={styles.title}>Gerenciamento de estoque nunca foi tão fácil</span>
                <div className={styles.base_form}>
                    <form id="loginAluno" className={styles.alunoOn} onSubmit={LogAluno} >
                        <Input onChange={(e) => setCodMatricula(e.target.value)} id="numero" label="Número de Matrícula" type="number" placeholder="Digite o Número de Matricula" name="numero" />
                        <InputSenha onChange={(e) => setSenha(e.target.value)} id="senhaAluno" id_eye="eye1" label="Senha" type="password" placeholder="Digite a senha" name="senhaAluno" />
                        <Button>Entrar</Button>
                        <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroAlunos" className={styles.btnCadastro}>Crie aqui!</a></p>
                    </form>

                    <form id="loginProf" className={styles.profOff} onSubmit={LogProf}>
                        <Input id="nif" label="Nif" type="number" placeholder="Digite o Número de Matricula" name="numero" />
                        <InputSenha id="senhaProf" id_eye="eye2" label="Senha" type="password" placeholder="Digite a senha" name="senhaProf" />
                        <Button>Entrar</Button>
                        <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroProfessores" className={styles.btnCadastro}>Crie aqui!</a></p>
                    </form>
                </div>
            </div>
            <div className={styles.cubo}>
                <iframe src='https://my.spline.design/untitled-da98f9f4bfe0d99057aa680c0c7ba3e8/' frameborder='0' width='100%' height='100%'></iframe>
            </div>
            <div className={styles.seila}></div>
        </div>
    );

    function loginProf() {
        console.log('aaaa')
        const aluno = document.getElementById('loginAluno')
        const prof = document.getElementById('loginProf')

        const btnAluno = document.getElementById('btnAluno')
        const btnProf = document.getElementById('btnProf')

        aluno.classList.replace(styles.alunoOn, styles.alunoOff)
        prof.classList.replace(styles.profOff, styles.profOn)

        btnAluno.classList.replace(styles.btnOn, styles.btn)
        btnProf.classList.replace(styles.btn, styles.btnOn)
    }

    function loginAluno() {
        const aluno = document.getElementById('loginAluno')
        const prof = document.getElementById('loginProf')

        const btnAluno = document.getElementById('btnAluno')
        const btnProf = document.getElementById('btnProf')

        aluno.classList.replace(styles.alunoOff, styles.alunoOn)
        prof.classList.replace(styles.profOn, styles.profOff)

        btnAluno.classList.replace(styles.btn, styles.btnOn)
        btnProf.classList.replace(styles.btnOn, styles.btn)
    }
}