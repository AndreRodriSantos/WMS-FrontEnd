import React from "react"
import styles from "../Styles/TelaEnderecamento.module.css"
import prateleira from "../IMG/Prateleira.png"
import styles2 from '../Styles/VerificarPedidos.module.css'
import api from "../Services/api"

export default class Edificio extends React.Component {
    render() {
        const { edificio, edifNum, handleEndereco } = this.props

        function drop_handler(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            const itemDiv = document.getElementById(data)
            ev.target.appendChild(itemDiv);
            itemDiv.classList.replace(styles2.boxDiv, styles2.boxDiv2)

            const modulo = ev.target.id
            const andar = ev.target.parentElement
            const edificio = andar.parentElement
            const corredor = edificio.parentElement.id

            api.get(`api/itemPedido/${data.substring(4, data.length)}`).then(reponse => {
                const item = reponse.data
                const produto = item.produto
                const quantidade = item.quantidade
                const enderecamento = { "modulo": modulo, "andar": andar.id, "edificio": edifNum, "corredor": corredor, "itens" : produto, quantidade, "demanda" : produto.demanda }
                handleEndereco(enderecamento)
            })
        }

        function dragover_handler(ev) {
            ev.preventDefault();
            ev.dataTransfer.dropEffect = "move"
        }

        return (
            <div id={edifNum} className={styles.edificioContainer}>
                <img src={prateleira}></img>

                <div id={"1"} className={styles.andar1}>
                    <div id={"1"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                    <div id={"2"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                </div>

                <div id={"2"} className={styles.andar2}>
                    <div id={"1"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                    <div id={"2"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                </div>

                <div id={"3"} className={styles.andar3}>
                    <div id={"1"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                    <div id={"2"} className={styles.modulo} onDrop={(ev) => drop_handler(ev)} onDragOver={(ev) => dragover_handler(ev)}></div>
                </div>

            </div>
        )
    }
}