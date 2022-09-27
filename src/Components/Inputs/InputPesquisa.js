import React from "react";
import styles from "../../Styles/Inputs/InputPesquisa.module.css"

export class InputPesquisa extends React.Component {
    render() {
        const { name, id, onChange, placeholder } = this.props
        return (
            <div className={styles.inputBox}>
                <form>
                    <input id={id} className={styles.inputPesquisa} type="search" placeholder={placeholder} autoComplete="off" onChange={onChange} required name={name}></input>
                    <button className={styles.lupa}><i className="fa-solid fa-magnifying-glass"></i></button>
                    <i class="fa-solid fa-cart-shopping"></i>
                </form>
            </div>
        );
    }
} 