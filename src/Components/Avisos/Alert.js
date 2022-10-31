import React from "react";
import styles from "../../Styles/Alert.module.css"


export class Alert extends React.Component {
    render() {

        const {mensagem, tipo} = this.props

        let count = 1        
        
        setTimeout(() => {
            const barra = document.getElementById("barra")
        setInterval(() =>{
           
            if(count < 101){
                count += 1
                barra.style.height = count + "%"
            }       
        }, 20)
    }, 500);

        return (
            <div className={styles.container}>
                <div className={styles.alert}>
                    <div className={styles.barra} id={"barra"}></div>

                    <div className={styles.alertContainer}>
                        <p className={styles.title}>Erro</p>
                        <span>Mensagem</span>

                        <button className={styles.btn}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}