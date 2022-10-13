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
    const [professores, setProfessores] = useState([])
    let [membrosCheck, setMembrosCheck] = useState([])

    const [alunosAdd, setAlunosAdd] = useState([])
    const [professoresAdd, setProfessoresAdd] = useState([])

    const [membroTurma , setMembroTurma] = useState([])

    //Juntando dois json em uma Variavel
    //var membroList = alunos.concat(professores)
    //var membroAdd = alunosAdd.concat(professoresAdd)

    const [text, setText] = useState('')
    const [list, setList] = useState([])
    //console.log(list)

    function getTurma(id){
       return api.get(`api/turma/${id}`).then(response => response.data)
    }

    //Fazendo Busca pelo Membro
    useEffect(() => {
        if (text === '') {
            setList(alunos)
        } else {
            setList(
                alunos.filter((item) =>
                    item.nome.toLowerCase().indexOf(text.toLowerCase()) > -1                   
                )
            );
        }
    }, [text]);

    //Ordernando busca de A & Z
    const OrderTitle = () => {
        let newList = [...alunos]

        newList.sort((a, b) => (a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0))

        setList(newList)
    }

    function getAluno() {
        return api.get("api/aluno/list").then(
            response => {
                const alu = response.data

                alu.map(a => {
                    if(a.turma == null){
                        setAlunos(alunos => [...alunos, a])
                    }else if (a.turma.id == localStorage.getItem("idTurma")){
                        setAlunosAdd(alunosAdd => [...alunosAdd, a])
                    }
                })
            }
        )
    }
    

    function getMembros() { 
        return api.get(`api/membros/teste/${localStorage.getItem("idTurma")}`).then(
            response => {
                const membro = response.data
                console.log(membro);
                membro.map(m => {
                    setMembroTurma(membroTurma => [...membroTurma, m])
                })         
            }
        )
    }

    useEffect(() => {
        getAluno()
        getMembros()
        
    }, [])


    function AbrirList() {
        const btnAddMembro = document.getElementById('btnAddMembro')
        const pesquisa = document.getElementById('pesquisa')
        const list = document.getElementById('listMembros')

        btnAddMembro.style.width = "350px"
        pesquisa.style.left = '0'
        list.style.left = "0"

        setTimeout(() => {
            setList(alunos)
        }, 500);
        
    }

    function onCheck(membro) {
        setMembrosCheck(membrosCheck => [...membrosCheck, membro])
        /* console.log(membrosCheck); */
    }

    function offCheck(membro) {

    }

    async function addList() {

        const turma = await getTurma(localStorage.getItem("idTurma"))

        membrosCheck.map((m) => { 
            const body =  {turma , "aluno" : m}; 
            /* console.log(body); */
            
            api.post(`api/membros/save`, body)

        })
    }

    function tirarAluno(id) { 
        api.delete(`api/membros/${id}`) 
    }

    return (
        <section className={styles.container}>
            <div className={styles.AddMembros}>
                <div id='btnAddMembro' onClick={AbrirList} className={styles.baseAddMembros}>
                    <span onClick={addList} className={styles.button}>
                        <i className="fa-regular fa-plus"></i>
                    </span>
                    <div id='pesquisa' className={styles.pesquisa}>
                        <span onClick={OrderTitle} className={styles.btnOrderTitle}>
                            <i className="fa-solid fa-arrow-up-a-z"></i>
                        </span>
                        <SearchInput id='pesquisa' placeholder="Pesquise um pessoa" value={text} onChange={(search) => setText(search)} />
                    </div>
                </div>
                <ul id="listMembros" className={styles.listPesquisa}>
                    {
                    list.length == 0 ? <li>Sem resultados <i className="fa-regular fa-face-sad-tear"></i></li> : list.map((m) => <LinhaPesquisa key={m.nif == undefined ? m.codMatricula + m.id : m.nif + m.id } membro={m}  onCheck={onCheck} offCheck={offCheck} />)
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
                                    membroTurma.map((m) => <LinhaMembros key={m.id} funcao={m.nif == undefined ? "ALUNO"  :  "PROFESSOR"} aluno={m.aluno} membro={m} tirarAluno={tirarAluno}/>)                               
                                }
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}