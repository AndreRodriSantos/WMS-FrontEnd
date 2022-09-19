import React from "react";
import styles from '../Styles/Login.module.css'
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha" 

export default function Login() {

    var aluno = document.getElementById('loginAluno')
    var prof = document.getElementById('loginProf')
    
    function loginProf(){
        aluno.style.left = "-500px";
        prof.style.left = "-332px";
        
    }

    function loginAluno() {
        aluno.style.left = "232px";
        prof.style.left = "500px";
    }

    return(
        <div className={styles.container}>
            <div className={styles.base}>
                <div className={styles.btns}>
                    <button onClick={loginAluno}>Aluno</button>
                    <button onClick={loginProf}>Professor</button>
                </div>
                <span className={styles.title}>Gerenciamento de estoque nunca foi tão fácil</span>                            
                <div className={styles.base_form}>
                <form id="loginAluno" className={styles.form}>
                    <Input  id="numero" label="Número de Matricula" type="number" placeholder="Digite o Número de Matricula" name="numero"/>
                    <InputSenha id="senhaAluno" label="Senha" type="password" placeholder="Digite a senha" name="senhaAluno" />
                    <Button>Entrar</Button>
                    <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroAlunos" className={styles.btnCadastro}>Crie aqui!</a></p>
                </form>

                <form id="loginProf" className={styles.form}>
                    <Input  id="nif" label="Número de Matricula" type="number" placeholder="Digite o Número de Matricula" name="numero"/>
                    <InputSenha id="senhaProf" label="Senha" type="password" placeholder="Digite a senha" name="senhaProf" />
                    <Button>Entrar</Button>
                    <p className={styles.telaCadastro}>Não tem uma conta? <a href="../CadastroAlunos" className={styles.btnCadastro}>Crie aqui!</a></p>
                </form>     
                </div>               
            </div>
        </div>
    );
}