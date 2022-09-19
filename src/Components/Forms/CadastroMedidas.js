import React, { Component } from "react";
import { Button } from "../Button"
import { Input } from "../Components/Inputs/Input"
import logo from "../IMG/Logo WMS.png"
import styles from "../Styles/CadastroMedidas.module.css"

import api from '../../Services/api'

export default class CadastroMedidas extends React.Component {
    render() {
        return (
            <div className={styles.conteiner}>
                <div className={styles.form__base}>
                    <div className={styles.logo}>
                        <img src={logo}></img>
                    </div>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>Cadastro de Medida</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <form onSubmit={CadastrarMedida}>
                            <Input id="nome" label="Nome" type="text" placeholder="Digite o Nome" ></Input>
                            <Input id="sigla" label="Sigla" type="text" placeholder="Digite a Sigla"></Input>
                            <Button>Criar Medida</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function CadastrarMedida(event) {
    event.preventDefault()

    const nomeMedida = document.getElementById('nome').value
    const siglaMedida = document.getElementById('sigla').value

    const body = { 'nome': nomeMedida, 'sigla': siglaMedida }

    console.log(body)

    api.post(
        "api/unidade/save", body
    );
}