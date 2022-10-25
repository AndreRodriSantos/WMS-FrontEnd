import React from "react";
import styles from '../../Styles/ItensHome/ListHome.module.css'

export class ListHome extends React.Component {
    render() {

        const { Info1, Info2, Info3 } = this.props;

        return (
            <tr className={styles.container}>
                <td className={styles.titleList}>
                    <span className={styles.nome}>{Info1}</span>
                </td>
                <td className={styles.titleList}>{Info2}</td>
                <td className={styles.titleList}>{Info3}</td>
            </tr>
        );
    }
}
