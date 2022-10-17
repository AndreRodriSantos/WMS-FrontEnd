import React, { useEffect, useState } from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'
/* import LinhaMembros from '../Components/Membros/LinhaMembro' */
/* import AddMembros from "../Components/Membros/AddMembros"; */
import LinhaPesquisa from "../Components/Membros/LinhaPesquisa";
import SearchInput from "../Components/Inputs/SearchInput";
import api from "../Services/api";
import LinhaMembros from "../Components/Membros/LinhaMembro";

export default function ListaMembros() {

    const [alunos, setAlunos] = useState([])
    const [membrosCheck, setMembrosCheck] = useState([])
    const [pesquisa, setPesquisa] = useState([])
    const [membrosTurma, setMembrosTurma] = useState([])
    const [list, setList] = useState([])

    function AbrirList() {

        const btnAddMembro = document.getElementById('btnAddMembro')
        const pesquisa = document.getElementById('pesquisa')
        const lista = document.getElementById('listMembros')

        btnAddMembro.style.width = "350px"
        pesquisa.style.left = '0'
        lista.style.left = "0"

        setTimeout(() => {
            lista.style.maxHeight = "100%"
            if (list.length == 0) {
                setList(alunos)
            }
        }, 500);
    }

    async function AdicionarList() {
        const turma = await getTurma(localStorage.getItem("idTurma"))

        membrosCheck.map((m) => {
            const body = { turma, "aluno": m };

            api.post(`api/membros/save`, body)
        })

        if (membrosCheck.length != 0) {
            window.location.reload()
        }
    }

    const OrdenarList = () => {
        var newList = [...alunos]
        newList.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0))
        setList(newList)
    }

    useEffect(() => {
        if (pesquisa === '') {
            setList(alunos)
        } else {
            setList(
                alunos.filter((item) =>
                    item.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1
                )
            )
        }
    }, [pesquisa]);

    function onCheck(membro) {
        setMembrosCheck(membrosCheck => [...membrosCheck, membro])
    }

    function offCheck(membro) {
        membrosCheck.map((m, index) => {

            if (m.id == membro.id) {
                membrosCheck.splice(index, 1)
            }
        })
    }

    function tirarAluno(id) {
        api.delete(`api/membros/${id}`)
        window.location.reload()
    }

    function getTurma(id) {
        return api.get(`api/turma/${id}`).then(response => response.data)
    }

    async function getAlunos() {
        const membroTurma = await getMembrosTurma(localStorage.getItem("idTurma"))

        return api.get("api/aluno/list").then(
            response => {
                const listAlunos = response.data

                membroTurma.map((mt) => {
                    listAlunos.map((a) => {                      
                        if(mt.aluno.id != a.id ){
                            setAlunos(alunos => [...alunos, a])
                        }                  
                    })
                })

                
              
            },
        )
    }

    async function getMembros() {
        const turma = await getTurma(localStorage.getItem("idTurma"))
        const membros = turma.membros
        membros.map(m => {
            setMembrosTurma(membrosTurma => [...membrosTurma, m])
        })
    }

    function getMembrosTurma(id) {
        return api.get(`api/membros/teste/${id}`).then(response => response.data)
    }

    useEffect(() => {
        getMembros()
        getAlunos()
    }, [])


    return (
        <section className={styles.container}>
            <div className={styles.AddMembros}>
                <div id='btnAddMembro' onClick={AbrirList} className={styles.baseAddMembros}>
                    <span onClick={AdicionarList} className={styles.button}>
                        <i className="fa-regular fa-plus"></i>
                    </span>
                    <div id='pesquisa' className={styles.pesquisa}>
                        <span onClick={OrdenarList} className={styles.btnOrderTitle}>
                            <i className="fa-solid fa-arrow-up-a-z"></i>
                        </span>
                        <SearchInput id='pesquisa' placeholder="Pesquise um pessoa" value={pesquisa} onChange={(search) => setPesquisa(search)} />
                    </div>
                </div>
                <ul id="listMembros" className={styles.listPesquisa}>
                    {
                        list.length == 0 ? <li>Sem resultados <i className="fa-regular fa-face-sad-tear"></i></li> : list.map((m) => <LinhaPesquisa key={m.id} membro={m} onCheck={onCheck} offCheck={offCheck} />)
                    }
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
                                    <td className={styles.mes}>Nif / Matrícula</td>
                                    <td className={styles.mes}>Função</td>
                                    <td className={styles.mes}></td>
                                </tr>
                            </thead>
                            <tbody id="lista" className={styles.body}>
                                {
                                    membrosTurma.map((m) => <LinhaMembros key={m.id} funcao={m.nif == undefined ? "ALUNO" : "PROFESSOR"} aluno={m.aluno} membro={m} tirarAluno={tirarAluno} />)
                                }
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}