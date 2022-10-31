import React from "react";
import styles from '../../Styles/ItensHome/ListHome.module.css'

export class ListHome extends React.Component {
    render() {

        const { objeto, Info1, Info2, Info3, id } = this.props;

        function setPedidoId() {
            localStorage.setItem('idPedido', id)
        }

        return (

            <a className={styles.linha} href={objeto.numPedido == undefined ? "" : "/VerificarPedidos"} onClick={setPedidoId}>
                <tr className={styles.container}>
                    <td className={styles.titleList}>
                        <span className={styles.nome}>{Info1}</span>
                    </td>
                    <td className={styles.titleList}>{Info2}</td>
                    <td className={styles.titleList}>{Info3}</td>
                </tr>
            </a>
        );

    }
}
