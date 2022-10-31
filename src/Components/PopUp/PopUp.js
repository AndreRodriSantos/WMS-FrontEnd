import React from "react";
import styles from '../../Styles/PopUp.module.css'

export default class PopUp extends React.Component {
    render() {

        setTimeout(() => {
            const PopUp = document.getElementById('PopUp')
            PopUp.style.transform = 'translateY(10px)' 
        }, 10); 

        setTimeout(() => {
            const PopUp = document.getElementById('PopUp')
            PopUp.style.transform = 'translateY(-210px)' 
        }, 2100); 

        return (
            <div className={styles.container}>
                <div id='PopUp' className={styles.popUp}>
                    <span className={styles.barraProgress}>
                        <span className={styles.colorProgress}></span>
                    </span>
                    <h3 className={styles.Title}>Erro</h3>
                    <h3 className={styles.TitleInfo}>Ocorreu um erro a realizar esse cadastro, tente novamente.</h3>
                    <button className={styles.btn}>OK</button>
                </div>
            </div>
        );
    }
}
