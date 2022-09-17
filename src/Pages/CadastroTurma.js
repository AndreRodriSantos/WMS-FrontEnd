import React from "react"
import { Button } from "../Components/Button"
import { Input } from "../Components/Input"
import { Foto } from "../Components/Foto"
import logo from "../IMG/Logo WMS.png"
import styles from "../Styles/CasdatroTurma/CadastroT.module.css"

import api from "../Services/api"

export default function CadastroTurma() {
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
                        <label>Nome da Turma</label>
                        <br />
                        <Input id="nome" type="text" name="nome" placeholder="Digite o Nome"></Input>
                        <br />
                        <label>Periodo</label>
                        <br />
                        <select id="periodo">
                            <option value={"MANHA"}>Manha</option>
                            <option value={"TARDE"}>Tarde</option>
                            <option value={"NOITE"}>Noite</option>

                        </select>
                        <br />
                        <label>Data de Começo</label>
                        <br />
                        <Input id="dataComeco" type="date" name="nome" placeholder="Selecione a Data"></Input>
                        <br />
                        <label>Data Final</label>
                        <br />
                        <Input id="dataFinal" type="date" name="nome" placeholder="Selecione a Data"></Input>
                        <br />
                        <label>Número de Participantes</label>
                        <br />
                        <div className={styles.slidecontainer}>
                            <input type="range" min="1" max="40" id="myRange" onChange={numero} className={styles.slider} />
                            <p className={styles.value}><span id="participantes"></span></p>
                        </div> 
                        <br />
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

function CadastrarTurma(event){
    event.preventDefault()

    const nomeTurma = document.getElementById('nome').value
    const periodo = document.getElementById('periodo').value
    const dataComeco = document.getElementById('dataComeco').value
    const dataFinal = document.getElementById('dataFinal').value
    const participantes = document.getElementById('participantes').textContent

    const body = {
        'nome':nomeTurma, 
        'periodo':periodo,
        'dataInicio':dataComeco,
        'dataFinal': dataFinal,
        'numeroMembro':participantes 
    };

    console.log(body)

    api.post(
        "api/turma/save",body
    );
}