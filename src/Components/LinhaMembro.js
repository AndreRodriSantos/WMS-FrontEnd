import React from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'

export default class LinhaMembros extends React.Component {
    render() {

        const {nome , email, matricula , funcao, imgMembro} = this.props;

        return (
            <tr>
                <th className={styles.titleList}><div className={styles.imgMembro}>{imgMembro}</div></th>
                <td className={styles.titleList}><span className={styles.nome}>{nome}</span></td>
                <td className={styles.titleList}>{email}</td>
                <td className={styles.titleList}>{matricula}</td>
                <td className={styles.titleList}>{funcao}</td>
                <td className={styles.titleList}>
                    <div href="#" className={styles.btnConfig}>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </td>
            </tr>
        );
    }
} 