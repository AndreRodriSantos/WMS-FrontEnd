import React from "react"
import styles from "../Styles/LinhaPicking.module.css"

export default class LinhaPicking extends React.Component {
    render() {

        const {id, produto, onCheck, unCheck } = this.props

        function check() {
            const checked = document.getElementById(id).checked
            const checkBox = document.getElementById(id)
            const qtd = document.getElementById(`qtd ${id}`).value
            const qtdInput = document.getElementById(`qtd ${id}`)

            if (checked == true) {
                checkBox.checked = true
                qtdInput.disabled = true
                onCheck(produto, qtd)
            } else {
                checkBox.checked = false
                qtdInput.disabled = false
                unCheck(produto, qtd)
            }
        }

        return (
            <tr className={styles.container} >
                <td><img src="https://images.uncyc.org/pt/d/db/Ednaldo.jpg"></img></td>
                <td>{produto.nome}</td>
                <td>{produto.sku}</td>
                <td>{produto.nome}</td>
                <td>{produto.valorUnitario}</td>
                <td><input type="number" id={`qtd ${id}`} defaultValue={1} className={styles.qtd}></input></td>
                <td>
                    <div className={styles.checkboxAnimate}>
                        <label>
                            <input id={id} className="check" onClick={check} type="checkbox" name="check"/>
                            <span className={styles.inputCheck}></span>
                        </label>
                    </div>
                </td>
            </tr>
        )
    }
}