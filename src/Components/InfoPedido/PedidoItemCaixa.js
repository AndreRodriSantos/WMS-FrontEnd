import styles from '../../Styles/VerificarPedidos.module.css'
import Box from '../../IMG/CaixaPedido.png'
import React from 'react'

export class PedidoItemCaixa extends React.Component {
    render() {
        const { chamarItem, item } = this.props;

        function dragstart_handler(ev){
            console.log("dragStart");
            ev.dataTransfer.setData("text/plain", ev.target.id);
            ev.stopPropagation();
            ev.dataTransfer.dropEffect = "move";
        }

        return (
            <div draggable="true" id={"Item" + item.id} onDragStart={(ev) => dragstart_handler(ev)} className={styles.boxDiv}>
                <img src={Box} className={styles.img} />
            </div>
        )
    }
}