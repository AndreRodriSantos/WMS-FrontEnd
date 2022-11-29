import React, { useEffect } from "react";
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

            const buttonDecrement = document.getElementById(`removeQtd ${id}`);
            const buttonIncrement = document.getElementById(`addQtd ${id}`);

            /*  console.log(produto); */

            if (checked == true) {
                checkBox.checked = true
                qtdInput.disabled = true

                buttonDecrement.style.opacity = '0.5'
                buttonDecrement.style.cursor = 'not-allowed'
                buttonDecrement.style.pointerEvents = 'none'

                buttonIncrement.style.opacity = '0.5'
                buttonIncrement.style.cursor = 'not-allowed'
                buttonIncrement.style.pointerEvents = 'none'

                onCheck(produto, qtd)
            } else {
                checkBox.checked = false
                qtdInput.disabled = false

                buttonDecrement.style.cursor = 'pointer'
                buttonDecrement.style.pointerEvents = 'auto'
                buttonDecrement.style.opacity = '1'

                buttonIncrement.style.cursor = 'pointer'
                buttonIncrement.style.pointerEvents = 'auto'
                buttonIncrement.style.opacity = '1'        

                unCheck(produto, qtd)
            }
        }

        function addQntd(type) {
            const counter = document.getElementById(`qtd ${id}`)
            const buttonDecrement = document.getElementById(`removeQtd ${id}`);
            const buttonIncrement = document.getElementById(`addQtd ${id}`);

            let value = counter.value;

            console.log(value);

            if (type == 'add') {
                value = ++value;
                counter.value = value;

            } else {
                value = value != 1 ? --value : 1;
                counter.value = value;
            }

            if (value > 9) {
                counter.style.paddingLeft = '15px'
            }
            if (value > 99) {
                counter.style.paddingLeft = '10px'
            }
            if (value > 999) {
                counter.style.paddingLeft = '5px'
            }
            if (value > 9999) {
                counter.style.paddingLeft = '0'
                counter.style.left = '15%'
                counter.style.width = '60px'
                buttonIncrement.style.right = '-40%'
            }
            if (value > 99999) {
                counter.style.paddingLeft = '0'
                counter.style.left = '16%'
                counter.style.width = '66px'
                buttonIncrement.style.right = '-50%'
            }

            if (value >= 2) {
                buttonDecrement.style.color = '#4D71FF'
            } else {
                buttonDecrement.style.color = '#A7A7A7'
            }
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
                        <p title="Quantidade" className={styles.titleQtd}>Qtd</p>
                        <div className={styles.qtd}>
                            <span onClick={() => addQntd('sub')} id={`removeQtd ${id}`} className={styles.btnQndLeft}><i className="fa-solid fa-circle-minus"></i></span>
                                <input className={styles.InputQnt} type="number" min={"1"} id={`qtd ${id}`} defaultValue={1} ></input>
                            <span onClick={() => addQntd('add')} id={`addQtd ${id}`} className={styles.btnQnd}><i className="fa-solid fa-circle-plus"></i></span>
                        </div>

                        <div className={styles.sku}>
                            <i className="fa-solid fa-barcode"></i>
                            <span className={styles.skuNum}>{produto.sku}</span>
                        </div>

                        <span id="valor">{"R$ " + produto.valorUnitario}</span>
                    </div>
                </div>
            </div>
        )
    }
}
