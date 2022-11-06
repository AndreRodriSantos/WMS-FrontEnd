import { wait } from "@testing-library/user-event/dist/utils";
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
                console.log(response.data);
                return response.data
            }
        )
    }

    function tirarTurma(id){
        api.delete(`api/turma/${id}`)
    }

    async function novosDados(id){

        localStorage.setItem("idTurma", id)
        window.location.href=`/cadastroTurma`
    }

    useEffect(() => {
        getTurma()
        localStorage.removeItem("idTurma")
    }, [])

    return (
        <section className={styles.container}>          
            {turmas.map((t, key) => <CardTurma id={t.id} config={t.id + 'config'} key={t.id} turma={t} imgTurma={t.imagem} tirarTurma={tirarTurma} novosDados={novosDados}/>)}
            {turmas.length <= 0 && 
                <div className={styles.semTurmas}>
                    <span className={styles.titleSemTurma}>Nenhuma Turma Cadastrada</span> 
                </div>
            }
            <a href='/cadastroTurma' className={styles.addTurmas} ><i className="fa-solid fa-plus"></i></a>
        </section>
    );
} 
