import React from "react";
import styles from "../Styles/ProdutoItem.module.css"

export default class ProdutoItem extends React.Component {
    render() {

        const { img , id, nome, valor, usuario} = this.props

        return (
            <div className={styles.container}>
                <div className={styles.imgDiv}>

                </div>

                <div className={styles.produtoDados}>

                    <div className={styles.titleCheck}>
                        <p>Produto</p>
                        <input type="checkbox" />
                    </div>

                    <div className={styles.dados}>
                        <input type="number" className={styles.qtd}></input>
                        <span>User</span>
                        <span>R$ 14.50</span>
                    </div>

                </div>
            </div>
        )
    }
}