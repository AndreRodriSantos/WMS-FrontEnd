import React, { useState } from "react";
import styles from '../Styles/Login.module.css'
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha"
import logo from "../IMG/Logo WMS.png"
import api from "../Services/api";
import { erro, sucesso } from "../Components/Avisos/Alert";
import { refresh } from "../Services/gets";

export default function Login() {

    const [codMatricula, setCodMatricula] = useState("")
    const [nif, setNif] = useState("")
    const [senhaAluno, setSenhaAluno] = useState("")
    const [senhaProf, setSenhaProf] = useState("")

    function LogAluno(e) {
        e.preventDefault()

        if(localStorage.getItem("token") != undefined){
            erro("Você já está logado")
        }else{

            const body = {
                codMatricula, "senha": senhaAluno
            }

            console.log(body);
    
            api.post("api/aluno/login", body).then(
                response => {
                    localStorage.setItem("token", response.data.token)
                    refresh("login")
                    window.location.href = "/Home"
                },
                err => {
                    erro("Erro ao Realizar o Login, não foi encontrado um usuário com essas informaçoes, verifique se os dados estão corretos e tente novamente")
                }
            )
        }
    }

    function LogProf(e) {
        e.preventDefault()

        if(localStorage.getItem("token") != undefined){
            erro("Você já está logado")
        }else{
            
            const body = {
                nif, "senha": senhaProf
            }

            console.log(body);
    
            api.post("api/professor/login", body).then(
                response => {
                    localStorage.setItem("token", response.data.token)
                    refresh("login")
                    window.location.href = "/Turmas"
                },
                err => {
                    erro("Erro ao Realizar o Login, não foi encontrado um usuário com essas informações, verifique se os dados estão corretos e tente novamente")
                }
            )
        }
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
                <div className={styles.base_form} method="post">
                    <form id="loginAluno" className={styles.alunoOn} onSubmit={LogAluno} >
                        <Input onChange={(e) => setCodMatricula(e.target.value)} id="numero" label="Número de Matrícula" type="number" placeholder="Digite o Número de Matricula" name="numero" />
                        <InputSenha onChange={(e) => setSenhaAluno(e.target.value)} id="senhaAluno" id_eye="eye1" label="Senha" type="password" placeholder="Digite a senha" name="senhaAluno" />
                        <Button>Entrar</Button>
                        <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroAlunos" className={styles.btnCadastro}>Crie aqui!</a></p>
                    </form>

                    <form id="loginProf" className={styles.profOff} onSubmit={LogProf} method="post">
                        <Input onChange={(e) => setNif(e.target.value)} id="nif" label="Nif" type="number" placeholder="Digite o Número de Matricula" name="numero" />
                        <InputSenha onChange={(e) => setSenhaProf(e.target.value)} id="senhaProf" id_eye="eye2" label="Senha" type="password" placeholder="Digite a senha" name="senhaProf" />
                        <Button>Entrar</Button>
                        <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroProfessores" className={styles.btnCadastro}>Crie aqui!</a></p>
                    </form>
                </div>
            </div>
            <div className={styles.cubo}>
                <iframe src='https://my.spline.design/untitled-da98f9f4bfe0d99057aa680c0c7ba3e8/' frameBorder='0' width='100%' height='100%'></iframe>
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