import React from "react";
import styles from "../Styles/ProdutoItem.module.css"

export default class ProdutoItem extends React.Component {
    render() {

        const { img, id, nome, valor, usuario, key} = this.props

        return (
            <div className={styles.container} key={key}>
                <div className={styles.imgDiv}>
                    <img src="https://images.uncyc.org/pt/d/db/Ednaldo.jpg"></img>
                </div>

                <div className={styles.produtoDados}>

                    <div className={styles.titleCheck}>
                        <p>{nome}</p>
                        <input id={id} type="checkbox" />
                    </div>

                    <div className={styles.dados}>

                        <div className={styles.divQtd}>
                            <p>Qtd</p><input type="number" className={styles.qtd}></input>
                        </div>

                        <span>User</span>
                        <span>{valor}</span>
                    </div>
                </div>
            </div>
        )
    }
}