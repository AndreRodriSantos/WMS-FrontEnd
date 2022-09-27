import React from "react";
import styles from '../Styles/Turmas/CardTurmas.module.css'
import img from '../IMG/image 11.png'

export default class CardTurma extends React.Component {
    render() {

        const { nomeTurma , periodo , membros , dataComeco} = this.props;

        return (
            <div className={styles.Card}>
                <span className={styles.config}><i className="fa-solid fa-gear"></i></span>
                <div className={styles.imgTurma}>
                    <img src={img}></img>
                </div>
                <div className={styles.InformTurma}>
                    <h2 className={styles.titleTurma}>{nomeTurma}</h2>
                    <span className={styles.basePedido}>
                        <p className={styles.titlePeriodo}>{periodo}</p>
                        <p className={styles.periodo}>{dataComeco}</p>
                        <span className={styles.barra}></span>
                    </span>
                    <span className={styles.baseMembro}>
                        <a href="#" className={styles.membros}><i className="fa-solid fa-users"></i></a>
                        <p className={styles.titleMembros}>Membros</p>
                        <span className={styles.NuMembro}>{membros}</span>
                    </span>
                </div>
            </div>
        );
    }
}