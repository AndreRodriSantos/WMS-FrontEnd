import React, { useState } from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Inputs/InputText"
import { Select } from "../Components/Inputs/Select"
import { Foto } from "../Components/Inputs/InputFoto"
import logo from "../IMG/Logo WMS.png"
import styles from "../Styles/Cadastros/CadastroTurma.module.css"

import api from "../Services/api"

export default function CadastroTurma() {

    function CadastrarTurma(event){
        event.preventDefault()

        const periodo = document.getElementById("periodo").value
        const participantes = document.getElementById("participantes").textContent
    
        const body = {
            'nome':nome, 
            'periodo':periodo,
            'dataInicio':dataC,
            'dataFinal': dataF,
            'numeroMembro':participantes 
        };
    
        console.log(body)
    
        api.post(
            "api/turma/save",body
        );
    }

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
                        <Input id="nome" label="Nome da Turma" onChange={(e) => setNome(e.target.value)} type="text" name="nome" placeholder="Digite o Nome"></Input>
                        <Select  data={["MANHA", "TARDE", "NOITE"]} id="periodo" title="Periodo"></Select>
                        <Input id="dataComeco" label="Data de Começo" onChange={(e) => setDataComeco(e.target.value)} type="date" name="nome" placeholder="Selecione a Data" ></Input>                      
                        <Input id="dataFinal" label="Data Final" onChange={(e) => setDataFinal(e.target.value)} type="date" name="nome" placeholder="Selecione a Data"></Input>
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

