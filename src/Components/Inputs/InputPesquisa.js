import React from "react";
import styles from "../../Styles/Inputs/InputPesquisa.module.css"

export class InputPesquisa extends React.Component {

    state = {
        texto : ""
    }

    render() {
        const { name, id, placeholder, search } = this.props

        const onSearch = (e) =>{
            e.preventDefault()
            search(this.state.texto)
        }

        return (
            <div className={styles.inputBox}>
                <form onSubmit={onSearch}>
                    
                    <input id={id} className={styles.inputPesquisa} type="search" placeholder={placeholder} autoComplete="off" onChange={e => this.setState({texto : e.target.value})}  required name={name}></input>
                    <button className={styles.lupa}><i className="fa-solid fa-magnifying-glass"></i></button>
                    <i className="fa-solid fa-cart-shopping"></i>
                </form>
            </div>
        );
    }
} 