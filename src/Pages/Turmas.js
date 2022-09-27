import React from "react";
import CardTurma from "../Components/CardTurma";
import { fazListaTurma, getTurma } from "../Services/gets";
import styles from '../Styles/Turmas/Turmas.module.css'

export default function Turmas() {

     async function setCardTurma() {
        const turmas = await fazListaTurma()
        console.log(turmas)
    }

    return (
        <div onLoad={setCardTurma} id="t" className={styles.container}>
            <CardTurma />           
            <a href="/CadastroTurma" className={styles.addTurmas} ><i className="fa-solid fa-plus"></i></a>
        </div>
    );
}
getTurma()