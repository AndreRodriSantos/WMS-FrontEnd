import React from "react";
import { useEffect } from "react";
import api from "../Services/api";
import { dataFormatada } from "../Services/formatter";
import styles from '../Styles/Turmas/CardTurmas.module.css'

export default class CardTurma extends React.Component {
    render() {

        const { imgTurma, id, config, turma, tirarTurma, novosDados } = this.props;

        function setStorage() {
            localStorage.setItem("idTurma", id)
        }

        function removeTurma() {
            tirarTurma(turma.id)
            window.location.reload()
        }

        function alterarTurma() {
            novosDados(turma.id)
        }

        var count = 0;

        api.get(`api/aluno/turma/${id}`).then(
            response => {
                const span = document.getElementById(id + "numMembro")
                const alunos = response.data
                alunos.map((a) => { count++ })
                span.innerHTML = count + "/" + turma.numParticipantes
            }
        )

        const dataInicio = dataFormatada(turma.dataInicio)

        return (
            <div className={styles.Card} onMouseEnter={removeOpcoes}>
                <span onMouseEnter={chamarOpcoes} className={styles.config}><i className="fa-solid fa-gear"></i></span>
                <div className={styles.imgTurma}>
                    <img src={imgTurma == null ? "https://www.pngkit.com/png/detail/800-8001301_png-file-green-user-group-icon.png" : `https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/${imgTurma}?alt=media`}></img>
                </div>
                <div onMouseEnter={removeOpcoes} className={styles.InformTurma}>
                    <h2 className={styles.titleTurma}>{turma.nome}</h2>
                    <span className={styles.basePedido}>
                        <p className={styles.titlePeriodo}>{turma.periodo}</p>
                        <p className={styles.periodo}>{dataInicio}</p>
                        <span className={styles.barra}></span>
                    </span>
                    <span className={styles.baseMembro}>
                        <a href="/Membros" onClick={setStorage} className={styles.membros}><i className="fa-solid fa-users"></i></a>
                        <p className={styles.titleMembros}>Membros</p>
                        <span className={styles.NuMembro} id={id + "numMembro"}></span>
                    </span>
                </div>
                {/* UL OFF */}
                <ul id={config} className={styles.sub_menuOff}>
                    <li className={styles.sub_link}>
                        <a className={styles.link_containerOff} >CONFIG</a>
                    </li>
                    <li className={styles.sub_link}>
                        <span onClick={removeTurma} className={styles.link_name}> <i className="fa-solid fa-trash"></i> EXCLUIR</span >
                    </li>
                    <li className={styles.sub_link}>
                        <span onClick={alterarTurma} className={styles.link_name} > <i className="fa-solid fa-pen"></i> ALTERAR</span >
                    </li>
                </ul>
                {/* UL OFF */}
            </div>

        );

        function chamarOpcoes() {
            const popUpOpcao = document.getElementById(config)

            popUpOpcao.style.opacity = '1'
            popUpOpcao.style.zIndex = '1'
        }

        function removeOpcoes() {
            const popUpOpcao = document.getElementById(config)

            popUpOpcao.style.opacity = '-1'
            popUpOpcao.style.zIndex = '-1'
        }

    }
}

