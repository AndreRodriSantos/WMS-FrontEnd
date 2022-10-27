import React from "react";
import api from "../Services/api";
import styles from "../Styles/ProdutoItem.module.css"

export default class ProdutoItem extends React.Component {
    render() {

        const { id, produto, onCheck, unCheck } = this.props

        function check() {
            const checked = document.getElementById(id).checked
            const checkBox = document.getElementById(id)
            const qtd = document.getElementById(`qtd ${id}`).value
            const qtdInput = document.getElementById(`qtd ${id}`)
            console.log(produto);

            if (checked == true) {
                checkBox.checked = true
                qtdInput.disabled = true
                onCheck(produto, qtd)
            } else {
                checkBox.checked = false
                qtdInput.disabled = false
                unCheck(produto, qtd)
            }
            console.log(produto);
        }

        return (
            <div className={styles.container} key={id} >

                <div className={styles.imgDiv}>
                    <img src={produto.imagem == null ? "https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png" : `https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/${produto.imagem}?alt=media`}></img>
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
                            <p>Qtd</p><input type="number" min={"1"} id={`qtd ${id}`} defaultValue={1} className={styles.qtd}></input>
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