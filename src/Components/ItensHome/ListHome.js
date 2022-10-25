import React from "react";
import styles from '../../Styles/ItensHome/ListHome.module.css'

export class ListHome extends React.Component {
    render() {

        const { objeto, id } = this.props;

        function setPedidoId() {
            localStorage.setItem('idPedido', id)
        }

        return (
            <a className={styles.linha} href={objeto.numPedido != undefined ? "/VerificarPedidos" : ""} onClick={setPedidoId}>
                <tr className={styles.container} >
                    <td className={styles.titleList}>
                        <span className={styles.nome}>{objeto.nome == undefined ? objeto.numPedido : objeto.nome}</span>
                    </td>
                    <td className={styles.titleList}>{objeto.cnpj}</td>
                    <td className={styles.titleList}>{objeto.uf}</td>
                </tr>
            </a>

        );
    }
}
