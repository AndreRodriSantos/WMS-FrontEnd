import React from "react";
import styles from '../Styles/Foto.module.css'
import { Input } from "./Input";

export class DadosPrincipais extends React.Component {
    render() {
        return (
            <form className={styles.form}>
                <div className={styles.column}>
                    
                </div>
            </form>
        )
    }

}

export class Taxas_Impostos extends React.Component {
    render() {
        return (
            <form className={styles.form}>
                <p>Taxas</p>
            </form>
        )
    }
}

export class ImagemProduto extends React.Component {
    render() {
        return (
            <form className={styles.form}>
                <p>Imagem</p>
            </form>
        )
    }
}

