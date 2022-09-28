import React from "react";
import styles from '../Styles/Lista/ListaMebros.module.css'

export default function ListaMembros() {
    return (
        <section className={styles.container}>
            <div className={styles.baseList}>
                <span className={styles.title}><i className="fa-solid fa-users"></i>Lista de Membros</span>
                <table className={styles.tabela}>
                    <thead>
                        <tr className={styles.headerList}>
                            <th className={styles.titleList}></th>
                            <th className={styles.titleList}>Nome</th>
                            <th className={styles.titleList}>Email</th>
                            <th className={styles.titleList}>Matrícula</th>
                            <th className={styles.titleList}>Função</th>
                            <th className={styles.titleList}><i className="fa-solid fa-gear"></i></th>
                        </tr>
                    </thead>
                    <tbody className={styles.body}>
                        <tr>
                            <th className={styles.titleList}><div className={styles.imgMembro}></div></th>
                            <td className={styles.titleList}><span className={styles.nome}>Nome</span></td>
                            <td className={styles.titleList}>Email</td>
                            <td className={styles.titleList}>Matrícula</td>
                            <td className={styles.titleList}>Função</td>
                            <td className={styles.titleList}>
                                <div href="#" className={styles.btnConfig}>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.titleList}><div className={styles.imgMembro}></div></th>
                            <td className={styles.titleList}><span className={styles.nome}>Nome</span></td>
                            <td className={styles.titleList}>Email</td>
                            <td className={styles.titleList}>Matrícula</td>
                            <td className={styles.titleList}>Função</td>
                            <td className={styles.titleList}>
                                <div href="#" className={styles.btnConfig}>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </td>
                        </tr>
                         <tr>
                            <th className={styles.titleList}><div className={styles.imgMembro}></div></th>
                            <td className={styles.titleList}><span className={styles.nome}>Nome</span></td>
                            <td className={styles.titleList}>Email</td>
                            <td className={styles.titleList}>Matrícula</td>
                            <td className={styles.titleList}>Função</td>
                            <td className={styles.titleList}>
                                <div href="#" className={styles.btnConfig}>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th className={styles.titleList}><div className={styles.imgMembro}></div></th>
                            <td className={styles.titleList}><span className={styles.nome}>Nome</span></td>
                            <td className={styles.titleList}>Email</td>
                            <td className={styles.titleList}>Matrícula</td>
                            <td className={styles.titleList}>Função</td>
                            <td className={styles.titleList}>
                                <div href="#" className={styles.btnConfig}>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}