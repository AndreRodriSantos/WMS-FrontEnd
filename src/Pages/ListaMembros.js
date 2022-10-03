import React, { useEffect, useState } from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'
/* import LinhaMembros from '../Components/Membros/LinhaMembro' */
/* import AddMembros from "../Components/Membros/AddMembros"; */
import LinhaPesquisa from "../Components/Membros/LinhaPesquisa";
import api from "../Services/api";

export default function ListaMembros() {

    const [membros, setMembros] = useState([])

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

    function AbrirList() {
        const btnAddMembro = document.getElementById('btnAddMembro')
        const pesquisa = document.getElementById('pesquisa')
        const list = document.getElementById('listMembros')

        btnAddMembro.style.width = "350px"
        pesquisa.style.left = '0'
        list.style.left = "0"
    }


    return (
        <section className={styles.container}>
            <div className={styles.AddMembros}>
                <div id='btnAddMembro' onClick={AbrirList} className={styles.baseAddMembros}>
                    <span className={styles.button}>
                        <i className="fa-regular fa-plus"></i>
                    </span>
                    <input id='pesquisa' className={styles.pesquisa} type="text" placeholder='Busque por uma Pessoa' />
                </div>
                <ul id="listMembros" className={styles.listPesquisa}>
                    {membros.map((m) => <LinhaPesquisa idMembro={m.id} nome={m.nome} email={m.email} matricula={m.codMatricula} />)}
                </ul>
            </div>


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
                                {/*  {membros.map((m) => <LinhaMembros nome={m.nome} email={m.email} matricula={m.codMatricula} />)}  */}
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}