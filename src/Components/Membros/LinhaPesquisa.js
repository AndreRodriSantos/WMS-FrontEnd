import React from 'react'
import styles from '../../Styles/AddMembros.module.css'

export default class LinhaPesquisa extends React.Component {
    render() {
        
        const img = 'https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/b8e0abca-53ef-411c-ae4e-debcb2e937ab24416098.png?alt=media'

        const { idMembro , nome , email, matricula } = this.props
      
        function clickCheck () {      
            const dadosMembro = { idMembro, nome , email, matricula}  
            console.log(dadosMembro)
        
        }
       
        return (
            <li id={idMembro} email={email} matricula={matricula} className={styles.linhaPesqusa}>
                <span className={styles.Membro}>
                    <div className={styles.imgMembro}>
                        <img src={img}></img>
                    </div>
                    <span className={styles.nameMembro}>{nome}</span>
                </span>
                <label className={styles.label}>
                    <input className={styles.input} type="checkbox" />
                    <span onClick={clickCheck} className={styles.checkmark}></span>
                </label>
            </li>
        );
    }
} 