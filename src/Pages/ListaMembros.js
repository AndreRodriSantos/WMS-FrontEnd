import React, { useEffect, useState } from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'
import LinhaMembros from '../Components/LinhaMembro'
import api from "../Services/api";

export default function ListaMembros() {

    const [membros , setMembros] = useState([])

    function getAluno() {
        return api.get("api/aluno/list").then(
            response => {
                console.log(response.data)
                setMembros(response.data)
                return response.data
            }
        )
    }

    useEffect(() => {
        getAluno()
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.baseList}>
                <span className={styles.title}><i className="fa-solid fa-users"></i>Lista de Membros</span>
                <div className={styles.div_lista}>
                    <ul className={styles.lista}>
                        <table id="tabela" className={styles.tabelaMembro} >
                            <thead>
                                <tr className={styles.header_list}>
                                    <td className={styles.mes}></td>
                                    <td className={styles.mes}>Nome</td>
                                    <td className={styles.mes}>Email</td>
                                    <td className={styles.mes}>Matrícula</td>
                                    <td className={styles.mes}>Função</td>
                                    <td className={styles.mes}></td>
                                </tr>
                            </thead>
                            <tbody id="lista" className={styles.body}>
                                {membros.map((m) => <LinhaMembros />)}
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}