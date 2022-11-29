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


        function chamarPopUp() {
            const container = document.getElementById("container");
            const PopUpInfo = document.getElementById("PopUpInfo");
            PopUpInfo.classList.add(styles.alertOn)

            container.style.zIndex = "20"
            PopUpInfo.style.display = 'flex'

            // Informações
            let id = document.getElementById('id')
            let nome = document.getElementById('nome')
            let info1 = document.getElementById('info1')
            let info2 = document.getElementById('info2')
            let info3 = document.getElementById('info3')
            let info4 = document.getElementById('info4')
            let info5 = document.getElementById('info5')
            let info6 = document.getElementById('info6')

            let info1Title = document.getElementById('info1Title')
            let info2Title = document.getElementById('info2Title')
            let info3Title = document.getElementById('info3Title')
            let info4Title = document.getElementById('info4Title')
            let info5Title = document.getElementById('info5Title')
            let info6Title = document.getElementById('info6Title')

            id.value = produto.codProduto
            nome.innerText = produto.nome
            info1.innerText = produto.sku
            info2.innerText = produto.descricao
            if (produto.importado == true) {
                info3.innerText = 'SIM'
            } else {
                info3.innerText = 'NÃO'
            }
            info4.innerText = produto.pontoPedido
            info5.innerText = produto.demanda
            info6.innerText = "R$ " + produto.valorUnitario

            info1Title.innerText = "SKU:"
            info2Title.innerText = "Descrição:"
            info3Title.innerText = "Importado"
            info4Title.innerText = "Ponto de Pedido:"
            info5Title.innerText = "Demanda:"
            info6Title.innerText = "Valor:"
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
                    <img src={produto.imagem == null ? "https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png" : `${produto.imagem}`}></img>
                </div>

                <div className={styles.produtoDados}>

                    <div className={styles.titleCheck}>
                        <div className={styles.prod}>
                            <p>{produto.nome}</p>
                            <i onClick={chamarPopUp} className="fa-solid fa-circle-info"></i>
                        </div>

                        <div className={styles.checkboxAnimate}>

                            <label>
                                <input id={id} className="check" onClick={check} type="checkbox" name="check" />
                                <span className={styles.inputCheck}></span>
                            </label>

                        </div>

                    </div>

                    <div className={styles.dados}>
                        <p className={styles.titleQtd}>Qtd</p>
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
