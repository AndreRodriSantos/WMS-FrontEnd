import React from "react";
import styles from "../../Styles/Inputs/InputText.module.css"

export class Input extends React.Component {
    render () {
        const {placeholder, type, name, id, label } = this.props
        return(
            <div className={styles.inputBox}>
                <input id={id} type={type} placeholder={placeholder} min="0" autoComplete="off" required name={name} ></input>
                <span>{label}</span>
            </div>           
        );
    }
} 