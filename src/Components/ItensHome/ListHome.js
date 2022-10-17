import React from "react";
import styles from '../../Styles/Lista/ListaMebros.module.css'

export class ListHome extends React.Component {
    render() {

        const { objeto } = this.props;

        return (
            <tr>
                <td className={styles.titleList}>
                    <span className={styles.nome}>{objeto.nome == undefined ? objeto.numPedido : objeto.nome}</span>
                </td>
                <td className={styles.titleList}>{objeto.cnpj}</td>
                <td className={styles.titleList}>{objeto.uf}</td>
            </tr>
        );
    }
}
