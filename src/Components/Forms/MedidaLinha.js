import React from "react"
import styles from "../../Styles/CadastroMedidas.module.css"

export default class MedidaLinha extends React.Component {
    render() {

        const { id, medida, chamarBtns} = this.props

        function chamarBotao(){  
            chamarBtns(id)
        }
       
        return (
            <li onClick={chamarBotao} id={id} className={styles.linhaMedida} >
                <p>Nome: {medida.nome}</p> 
                <p>Sigla: {medida.sigla}</p>
            </li>
        )
    }
}


