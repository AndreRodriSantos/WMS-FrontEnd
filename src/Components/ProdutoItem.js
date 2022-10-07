import React from "react";
import styles from "../Styles/ProdutoItem.module.css"

export default class ProdutoItem extends React.Component {
    render() {

        const { id, produto, onCheck, unCheck } = this.props

        function check() {
            const checked = document.getElementById(id).checked
            const checkBox = document.getElementById(id)
            const qtd = document.getElementById("qtd").value

            if (checked == true) {
                checkBox.checked = true
                onCheck(produto, qtd)
            } else {
                checkBox.checked = false
                unCheck(produto, qtd)
            }
        }



        return (
            <div className={styles.container} key={id} >

                <div className={styles.imgDiv}>
                    <img src="https://images.uncyc.org/pt/d/db/Ednaldo.jpg"></img>
                </div>

                <div className={styles.produtoDados}>

                    <div className={styles.titleCheck}>
                        <p>{produto.nome}</p>

                        <div className={styles.checkboxAnimate}>
                            <label>
                                <input id={id} className="check" onClick={check} type="checkbox" name="check" />
                                <span className={styles.inputCheck}></span>
                            </label>
                        </div>

                    </div>

                    <div className={styles.dados}>

                        <div className={styles.divQtd}>
                            <p>Qtd</p><input type="number" id="qtd" defaultValue={1} className={styles.qtd}></input>
                        </div>

                        <div>
                            <i className="fa-solid fa-user"></i>
                            <span>User</span>
                        </div>

                        <span id="valor">{"R$ " + produto.valorUnitario}</span>
                    </div>
                </div>
            </div>
        )
    }
}