import React from 'react'
import styles from '../../Styles/LinhaPesquisa.module.css'

export default class LinhaPesquisa extends React.Component {
    render() {
        
        const img = 'https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/b8e0abca-53ef-411c-ae4e-debcb2e937ab24416098.png?alt=media'

        const { membro , onCheck, offCheck, typeMembro } = this.props
        const idMembro = typeMembro+membro.id
        //console.log(idMembro);
        //const cod = membro.cod
      
        function clickCheck () {      
            const checkbox = document.getElementById(idMembro)
            //console.log(checkbox)
            if(checkbox.checked == true){
                onCheck(membro)
            }else{
                offCheck(membro)
            }
           
        
        }
       
        return (
            <li className={styles.linhaPesqusa}>
                <span className={styles.Membro}>
                    <div className={styles.imgMembro}>
                        <img src={img}></img>
                    </div>
                    <div className={styles.infoMembro}>
                        <span className={styles.nameMembro}>{membro.nome}</span>
                        <span className={styles.subTitle}>{membro.email}{membro.nif}</span>
                    </div>
                </span>
                <label className={styles.label}>
                    <input id={idMembro} onClick={clickCheck} className={styles.input} type="checkbox" />
                    <span className={styles.checkmark}></span>
                </label>
            </li>
        );
    }
} 