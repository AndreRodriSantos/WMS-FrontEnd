import React, { Component, createElement } from "react";
import { Button } from "../Button"
import { Input } from "../Inputs/InputText"
import logo from "../../IMG/Logo WMS.png"
import styles from "../../Styles/CadastroMedidas.module.css"

import api from '../../Services/api'
import { erro, sucesso } from "../Avisos/Alert";

export default class CadastroMedidas extends React.Component {
    render() {

        return (
            <div className={styles.conteiner} id='containerMedida'>
                <div className={styles.form__base} id='base'>
                    <span className={styles.close} onClick={Fechar} ><i className="fa-regular fa-circle-xmark"></i></span>
                    <div className={styles.logo}>
                        <img src={logo}></img>
                    </div>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>Cadastro de Medida</h1>
                    </div>
                    <div className={styles.formContainer}>
                        <form onSubmit={CadastrarMedida}>
                            <Input id="nomeMedida" label="Nome" type="text" placeholder="Digite o Nome" ></Input>
                            <Input id="sigla" label="Sigla" type="text" placeholder="Digite a Sigla"></Input>

                            <Button>Criar Medida</Button>
                            <br />
                            <div className={styles.listaMedida}>
                                <div className={styles.labelMedida}>
                                    <span>Medidas Cadastradas</span>
                                </div>
                                <ul id="listMedidas" className={styles.ListMedidas}>
                                    {medidas.map((m, index) => {
                                        return <li onClick={chamarBtns} className={styles.linhaMedida} key={index}><p>Nome: {m.nome}</p> <p>Sigla: {m.sigla}</p></li>
                                    })}
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div id="BtnsOption" className={styles.btns}>
                    <button id='btnY' onClick={alterar} className={styles.btn} >
                            <span className={styles.rounded2}>
                                <span className={styles.text_green}>alterar</span>
                            </span>

                        </button>

                        <button id='btnX' className={styles.btn} onClick={excluir} >
                            <span id='btnAnimation' className={styles.rounded}>
                                <span className={styles.text_green}>excluir</span>
                            </span>

                        </button>
                    </div>
                </div>    
            </div>
        );
    }
}

let medidas = [];

export function getMedida() {
    return api.get(`api/unidade/list`).then(response => {
        medidas = response.data
    })
}

function CadastrarMedida(event) {
    event.preventDefault()

    const nomeMedida = document.getElementById('nomeMedida').value
    const siglaMedida = document.getElementById('sigla').value

    const body = {
        'nome': nomeMedida,
        'sigla': siglaMedida
    }

    console.log(body)

    api.post(
        "api/unidade/save", body
    ).then(
        response => {
            if (response.status == 201 || response.status == 200) {
                sucesso(`Medida ${nomeMedida} cadastrada com sucesso!!!`)
            }
        },
        err => {
            erro("Ocorreu um erro ao Cadastrar a Medida:" + err)
        }
    )
}

function Fechar() {
    const base = document.getElementById("base");
    const containerMedida = document.getElementById("containerMedida");
    const popUpMedidas = document.getElementById("popUpMedidas");

    base.style.display = "none"
    containerMedida.style.display = "none"
    popUpMedidas.style.zIndex = "-1"
} 

function chamarBtns(){  
    const btnY = document.getElementById('btnY')
}

function alterar(){
    alert('aaaaaa')
}

function excluir(){
    alert('excluir')
}