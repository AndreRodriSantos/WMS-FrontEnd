import React, { useEffect, useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { Select } from "../Components/Inputs/Select"
import { Foto } from "../Components/Inputs/InputFoto"
import logo from "../IMG/Logo WMS.png"
import styles from "../Styles/Cadastros/CadastroTurma.module.css"

import api from "../Services/api"
import { fazOptionsPeriodo } from "../Services/gets"
import { erro, sucesso } from "../Components/Avisos/Alert"

export default function CadastroTurma() {

    function getTurma() {
        const id = localStorage.getItem("idTurma")
        const periodo = document.getElementById("periodo")
        const participantes = document.getElementById("participantes")
        

        if(id != undefined || id != null){
            api.get(`api/turma/${id}`).then(
                response => {
                    const turma = response.data
                    participantes.innerHTML = turma.numParticipantes
                    setNome(turma.nome)
                    setDataComeco(turma.dataInicio)
                    setDataFinal(turma.dataFinal)
                    periodo.setAttribute('checked', turma.periodo)
                }
            )
        }
        
    }

    function CadastrarTurma(event) {
        event.preventDefault()

        const periodo = document.getElementById("periodo").value
        const participantes = document.getElementById("participantes").textContent
        let imagem = document.getElementById("imgPhoto").getAttribute("src")

        const body = {
            'nome': nome,
            'periodo': periodo,
            'dataInicio': dataC,
            'dataFinal': dataF,
            'numeroMembro': participantes,
            imagem
        };

        console.log(body)

        api.post(
            "api/turma/save", body
        ).then(
            response => {
                if (response.status == 201 || response.status == 200) {
                    sucesso(`A turma ${nome} cadastrado com sucesso!!!`)
                }
            },
            err => {
                erro("Ocorreu um erro ao Cadastrar esta Turma:" + err)
            }
        )
    }

    useEffect(() => {
        getTurma()
    },[])

    var [nome, setNome] = useState('')
    var [dataC, setDataComeco] = useState('')
    var [dataF, setDataFinal] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.baseForm}>
                <div className={styles.logo}>
                    <img src={logo} className={styles.logo}></img>
                </div>
                <div className={styles.AddFotos}>
                    <Foto />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.titles}>
                        <h1 className={styles.title}>Cadastro de Turmas</h1>
                        <span className={styles.subTitle}>Lógistica</span>
                    </div>
                    <form onSubmit={CadastrarTurma}>
                        <Input id="nome" label="Nome da Turma" defaultValue={nome} onChange={(e) => setNome(e.target.value)} type="text" name="nome" placeholder="Digite o Nome"></Input>
                        <Select data={fazOptionsPeriodo()} id="periodo" idArrow="arrow" title="Periodo"></Select>
                        <Input id="dataComeco" label="Data de Começo" defaultValue={dataC} onChange={(e) => setDataComeco(e.target.value)} type="date" name="nome" placeholder="Selecione a Data" ></Input>
                        <Input id="dataFinal" label="Data Final" defaultValue={dataF} onChange={(e) => setDataFinal(e.target.value)} type="date" name="nome" placeholder="Selecione a Data"></Input>
                        <label>Número de Participantes</label>
                        <div className={styles.slidecontainer}>
                            <input type="range" min="1" max="40" id="myRange" onChange={numero} className={styles.slider} />
                            <p className={styles.value}><span id="participantes"></span></p>
                        </div>
                        <Button>Criar Turma</Button>
                    </form>
                </div>
            </div>
        </div>
    )

}

function numero() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("participantes");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
}

