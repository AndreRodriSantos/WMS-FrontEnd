import React from "react";
import styles from '../Styles/Turmas/CardTurmas.module.css'

export default class CardTurma extends React.Component {
    render() {

        const { nomeTurma , periodo , membros , dataComeco , imgTurma, id} = this.props;

        function setStorage(){
            localStorage.setItem("idTurma", id)
        }

        return (
            <div className={styles.Card}>
                <span className={styles.config}><i className="fa-solid fa-gear"></i></span>
                <div className={styles.imgTurma}>
                    <img src={imgTurma}></img>
                </div>
                <div className={styles.InformTurma}>
                    <h2 className={styles.titleTurma}>{nomeTurma}</h2>
                    <span className={styles.basePedido}>
                        <p className={styles.titlePeriodo}>{periodo}</p>
                        <p className={styles.periodo}>{dataComeco}</p>
                        <span className={styles.barra}></span>
                    </span>
                    <span className={styles.baseMembro}>
                        <a href="/Membros" onClick={setStorage} className={styles.membros}><i className="fa-solid fa-users"></i></a>
                        <p className={styles.titleMembros}>Membros</p>
                        <span className={styles.NuMembro}>{membros}</span>
                    </span>
                </div>
            </div>
        );
    }
}