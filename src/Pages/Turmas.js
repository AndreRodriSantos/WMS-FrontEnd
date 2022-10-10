import React, { useEffect, useState } from "react";
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
                return response.data
            }
        )
    }

    useEffect(() => {
        getTurma()
        localStorage.removeItem("idTurma")
    }, [])

    const img = 'https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/b8e0abca-53ef-411c-ae4e-debcb2e937ab24416098.png?alt=media'


    return (
        <section className={styles.container}>          
            {turmas.map((t, key) => <CardTurma id={t.id} key={t.id} nomeTurma={t.nome} periodo={t.periodo} dataComeco={t.dataInicio} membros={t.numeroMembro} imgTurma={img}/>)}
            {turmas.length <= 0 && 
                <div className={styles.semTurmas}>
                    <span className={styles.titleSemTurma}>Nenhuma Turma Cadastrada</span> 
                </div>
            }
            <a className={styles.addTurmas} ><i className="fa-solid fa-plus"></i></a>
        </section>
    );
}