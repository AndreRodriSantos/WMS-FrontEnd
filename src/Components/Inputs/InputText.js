import React from "react";
import styles from "../../Styles/Inputs/InputText.module.css"

export class Input extends React.Component {
    render () {
        const {type, name, id, label, onChange} = this.props
        return(
            <div className={styles.inputBox}>
                <input id={id} type={type}min="0" autoComplete="off" onChange={onChange} required name={name} ></input>
                <span className={styles.label}>{label}</span>
            </div>           
        );
    }
} 