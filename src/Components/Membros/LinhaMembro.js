import React from "react";
import styles from '../../Styles/Lista/ListaMebros.module.css'

export default class LinhaMembros extends React.Component {
    render() {

        const { membro, aluno ,funcao, imgMembro , tirarAluno} = this.props;

            function tirarAlu(){
                tirarAluno(membro.id)
            }

        return (
            <tr>
                <th className={styles.titleList}><div className={styles.imgMembro}>{imgMembro}</div></th>
                <td className={styles.titleList}><span className={styles.nome}>{aluno.nome}</span></td>
                <td className={styles.titleList}>{aluno.email == undefined ? "Sem Email" : aluno.email}</td>
                <td className={styles.titleList}>{aluno.codMatricula}</td>
                <td className={styles.titleList}>{funcao}</td>
                <td className={styles.titleList}>
                    <div onClick={tirarAlu} href="#" className={styles.btnConfig}>
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </td>
            </tr>
        );
    }
} 