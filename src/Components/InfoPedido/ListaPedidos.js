import React from "react";
import styles from '../../Styles/VerificarPedidos.module.css'
import Box from '../../IMG/CaixaPedido.png'


export class ListaPedidos extends React.Component {
    render() {

        const {chamarItem, item } = this.props;

        function chamarInfo() {
            const BasePoup = document.getElementById('BasePoup')
            const PopUpInfo = document.getElementById('PopUpInfo')

            BasePoup.style.display = 'flex'
            PopUpInfo.style.display = 'flex'

            chamarItem(item)
        }

        return (
            <>
                <div className={styles.box} draggable = "true" onClick={chamarInfo}>
                    <img src={Box} className={styles.imgBox} />
                </div>

            </>

        );

    }
}

