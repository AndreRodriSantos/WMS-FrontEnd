import React, { useEffect, useState } from "react";
import { sucesso } from "../Components/Avisos/Alert";
import CardTurma from "../Components/CardTurma";
import api from "../Services/api";
import styles from '../Styles/Turmas/Turmas.module.css'
import ListaMembros from "./ListaMembros";

export default function Turmas() {

    const [turmas, setTurmas] = useState([])

    function getTurma() {
        return api.get("api/turma/list").then(
            response => {                
                setTurmas(response.data)
                console.log(response.data);
                return response.data
            }
        )
    }

    useEffect(() => {
        getTurma()
        localStorage.removeItem("idTurma")
        if (localStorage.getItem("logou") != undefined) {
            sucesso("Bem-vindo!!! Login Realizado com Sucesso!!")
            localStorage.removeItem('logou')
        }
    }, [])

    return (
        <section className={styles.container}>          
            {turmas.map((t, key) => <CardTurma id={t.id} key={t.id} nomeTurma={t.nome} periodo={t.periodo} dataComeco={t.dataInicio} membros={t.numeroMembro} imgTurma={t.imagem}/>)}
            {turmas.length <= 0 && 
                <div className={styles.semTurmas}>
                    <span className={styles.titleSemTurma}>Nenhuma Turma Cadastrada</span> 
                </div>
            }
            <a href='/cadastroTurma' className={styles.addTurmas} ><i className="fa-solid fa-plus"></i></a>
        </section>
    );
}
