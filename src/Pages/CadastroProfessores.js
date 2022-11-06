import React, { useEffect, useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { InputSenha } from "../Components/Inputs/InputSenha"
import styles from "../Styles/Cadastros/Prof_Aluno.module.css"
import logo from "../IMG/Logo WMS.png"
import { Foto } from "../Components/Inputs/InputFoto"

import api from '../Services/api'
import { erro, sucesso } from "../Components/Avisos/Alert"

export default function CadastroProfessores() {

    const [nomeProf, setNome] = useState('')
    const [nif, setNif] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function CadastrarProf(event) {
        event.preventDefault()

        const nomeProf = document.getElementById('nome').value
        const nif = document.getElementById('nif').value
        const senha = document.getElementById('senha').value
        let imagem = document.getElementById("imgPhoto").getAttribute("src")

        const body = { 'nome': nomeProf, 'nif': nif, "email": email, 'senha': senha, imagem };

        console.log(body)

        api.post(
            "api/professor/save", body
        ).then(
            response => {
                if (response.status == 201 || response.status == 200) {
                    sucesso("Professor cadastrado com sucesso!!!")
                }
            },
            err => {
                erro("Ocorreu um erro ao Cadastrar este Professor:" + err)
            }
        )
    }

    //Fazendo o Perfil do Usuario
    useEffect(() => {
        const nome = document.getElementById('nome').value
        const nif = document.getElementById('nif').value
        const email = document.getElementById('email').value

        const nomeUser = document.getElementById('nomeUser')
        const iconEmal = document.getElementById('iconEmal')
        const iconMatricula = document.getElementById('iconMatricula')

        if (nome === '') {
            nomeUser.style.display = 'none'
        } else {
            nomeUser.style.display = 'flex'
        }

        if (email === '') {
            iconEmal.style.display = 'none'
        } else {
            iconEmal.style.display = 'block'
        }

        if (nif === '') {
            iconMatricula.style.display = 'none'
        } else {
            iconMatricula.style.display = 'block'
        }

    }, [nomeProf, nif, email]);

    return (
        <div className={styles.container}>

            <a className={styles.voltar} href="/">
                <i className="fa-solid fa-arrow-rotate-left"></i>
            </a>

            <div className={styles.logoDiv}>
                <img src={logo} className={styles.logo}></img>
            </div>

            <div className={styles.baseForm}>
                <div className={styles.Form}>
                    <h1 className={styles.h1}>Cadastro de Professor(a)</h1>
                    <form onSubmit={CadastrarProf}>
                        <Input id="nome" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Digite o seu Nome" name="nome" label="Nome" />
                        <Input id="nif" type="number" onChange={(e) => setNif(e.target.value)} name="nif" placeholder="Digite seu NIF" label="Nif" />
                        <Input label="Email" id="email" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Digite o Email" />
                        <InputSenha id="senha" id_eye="eye" type="password" onChange={(e) => setSenha(e.target.value)} name="senha" placeholder="Digite sua Senha" label="Senha" />
                        <Button>Cadastrar</Button>
                    </form>
                </div>
                <div className={styles.Perfil}>
                    {/* PERFIL */}
                    <div className={styles.Info}>
                        <div className={styles.fotoDiv}>
                            <div className={styles.personal_image}>
                                <label>
                                    <input type="file" id="fileImage" onChange={fileChange} accept=".jpg" />
                                    <span className={styles.btnFile}>
                                        <i className="fa-solid fa-file-circle-plus"></i>
                                    </span>
                                    <figure className={styles.personal_figure}>
                                        <img className={styles.personal_avatar} id="imgPhoto" />
                                    </figure>
                                </label>
                            </div>
                        </div>
                        <div id='nomeUser' className={styles.Nome}>
                            <span className={styles.titleNome}>Nome</span>
                            <span className={styles.InfoNome}>{nomeProf}</span>
                        </div>
                        <div className={styles.info2}>
                            <span className={styles.titleEmail}>
                                <i id='iconEmal' className="fa-solid fa-at"></i>
                                {email}
                            </span>
                            <span className={styles.InfoNum}>
                                <i id='iconMatricula' className="fa-solid fa-address-card"></i>
                                {nif}
                            </span>
                        </div>

                    </div>

                    <div className={styles.text_wrapper}>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.font_Size}>Warehouse Management System Warehouse Management System</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    function fileChange() {
        let photo = document.getElementById('imgPhoto');
        let file = document.getElementById('fileImage');

        if (file.files.length <= 0) {
            return;
        }

        let reader = new FileReader();

        reader.onload = () => {
            photo.src = reader.result;
        }

        reader.readAsDataURL(file.files[0]);
    }

}


