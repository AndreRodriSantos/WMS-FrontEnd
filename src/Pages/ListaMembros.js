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

    //Juntando dois json em uma Variavel
    var membroList = alunos.concat(professores)
    var membroAdd = alunosAdd.concat(professoresAdd)

    const [text, setText] = useState('')
    const [list, setList] = useState([])
    //console.log(list)

    function getTurma(id){
       return api.get(`api/turma/${id}`).then(response => response.data)
    }

    //Fazendo Busca pelo Membro
    useEffect(() => {
        if (text === '') {
            setList(membroList)
        } else {
            setList(
                membroList.filter((item) =>
                    item.nome.toLowerCase().indexOf(text.toLowerCase()) > -1                   
                )
            );
        }
    }, [text]);

    //Ordernando busca de A & Z
    const OrderTitle = () => {
        let newList = [...membroList]

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
    
    function getProf() {
        return api.get("api/professor/list").then(
            response => {             
                const profs = response.data
                profs.map(p => {
                    if(p.turma == null){
                        setProfessores(professores => [...professores, p])
                    }else if (p.turma.id == localStorage.getItem("idTurma")){
                        setProfessoresAdd(professoresAdd => [...professoresAdd, p])                       
                    }
                })
            }
        )
    }


    useEffect(() => {
        getProf()
        getAluno()
        
    }, [])


    function AbrirList() {
        const btnAddMembro = document.getElementById('btnAddMembro')
        const pesquisa = document.getElementById('pesquisa')
        const list = document.getElementById('listMembros')

        btnAddMembro.style.width = "350px"
        pesquisa.style.left = '0'
        list.style.left = "0"

        setTimeout(() => {
            setList(membroList)
        }, 500);
        
    }

    function onCheck(membro) {
        setMembrosCheck(membrosCheck => [...membrosCheck, membro])
        //console.log(membrosCheck);
    }

    function offCheck(membro) {

    }


    function getAlunoId(id) {
        api.get(`api/aluno/${id}`).then(
            response => {return response.data}
        )
    }

    function addList() {
        const turma = getTurma(localStorage.getItem("idTurma"))
        const aluno = getAlunoId().then(response => response.data)
        const body =  {turma , aluno};
        console.log(body);

        membrosCheck.map((m) => {
            api.post(`api/membros/save`, body)
        })
    }

    function tirarAluno() {
        const turmaRemove = ""
        membroAdd.map((m) => {
            m.turma.id = turmaRemove
            
            
            /* if(m.nif == undefined){
                api.patch(`api/aluno/${m.id}`,turmaRemove)
            }else{
                api.patch(`api/professor/${m.id}`, turmaRemove)
            }  */
            
            
        })

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
                                    membroAdd.map((m) =>  <LinhaMembros key={m.nif == undefined ? m.codMatricula + m.id : m.nif + m.id } funcao={m.nif == undefined ? "ALUNO"  :  "PROFESSOR"} membro={m} onClick={tirarAluno}/>)                               
                                }
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}