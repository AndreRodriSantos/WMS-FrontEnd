import React from "react";
import styles from '../../Styles/Lista/ListaMebros.module.css'

export default class LinhaMembros extends React.Component {
    render() {

        const { membro, funcao, imgMembro} = this.props;

        return (
            <tr>
                <th className={styles.titleList}><div className={styles.imgMembro}>{imgMembro}</div></th>
                <td className={styles.titleList}><span className={styles.nome}>{membro.nome}</span></td>
                <td className={styles.titleList}>{membro.email == undefined ? "Sem Email" : membro.email}</td>
                <td className={styles.titleList}>{membro.nif == undefined ? membro.codMatricula : membro.nif}</td>
                <td className={styles.titleList}>{funcao}</td>
                <td className={styles.titleList}>
                    <div href="#" className={styles.btnConfig}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </td>
            </tr>
        );
    }
} 