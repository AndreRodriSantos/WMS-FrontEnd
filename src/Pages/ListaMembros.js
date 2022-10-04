import React, { useEffect, useState } from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'
/* import LinhaMembros from '../Components/Membros/LinhaMembro' */
/* import AddMembros from "../Components/Membros/AddMembros"; */
import LinhaPesquisa from "../Components/Membros/LinhaPesquisa";
import SearchInput from "../Components/Inputs/SearchInput";
import api from "../Services/api";

export default function ListaMembros() {

    const [alunos, setAlunos] = useState([])
    const [professores, setProfessores] = useState([])
    let [membrosCheck, setMembrosCheck] = useState([])

    //Juntando dois json em uma Variavel
    var membroList = alunos.concat(professores)

    const [text, setText] = useState('')
    const [list, setList] = useState(membroList)
    console.log(list)

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
                setAlunos(response.data)
                return response.data
            }
        )
    }

    function getProf() {
        return api.get("api/professor/list").then(
            response => {
                setProfessores(response.data)
                return response.data
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
    }

    function onCheck(membro) {
        setMembrosCheck(membrosCheck => [...membrosCheck, membro])
        console.log(membrosCheck);
    }

    function offCheck(membro) {

    }

    async function addList() {
        const turma = await getTurma(localStorage.getItem("idTurma"))

        membrosCheck.map((m) => {
            m.turma= turma
            console.log(m.id)
            api.put(`api/aluno/${m.id}`, m)
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
                    {list.map((m) => <LinhaPesquisa membro={m}  onCheck={onCheck} offCheck={offCheck} />)}
                    {/* {professores.map((m, key) => <LinhaPesquisa membro={m} key={m.id} typeMembro={'professor'} onCheck={onCheck} offCheck={offCheck}/>)} */}
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
                                {/*   */}
                            </tbody>
                        </table>
                    </ul>
                </div>
            </div>
        </section>
    );
}