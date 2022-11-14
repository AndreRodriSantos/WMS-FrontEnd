import React from "react"
import styles from "../../Styles/CadastroMedidas.module.css"

export default class LinhaNcm extends React.Component {
    render() {

        const { id, ncm, chamarIdNcm} = this.props

        function chamarBotao(){  
            chamarIdNcm(id)
        }
       
        return (
            <li onClick={chamarBotao} id={id} className={styles.linhaMedida} >
                <p> Ncm: </p>
                <p>{ncm.ncm}</p>                
            </li>
        )
    }
}


