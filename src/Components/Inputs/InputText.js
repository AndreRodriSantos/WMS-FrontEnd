import React from "react";
import styles from "../../Styles/Inputs/InputText.module.css"

export class Input extends React.Component {
    render () {
        const {type, name, id, label, onChange, width, height} = this.props
        return(
            <div className={styles.inputBox} style={{width: width}}>
                <input id={id} type={type}min="0" step="0.01" autoComplete="off" style={{width: width}} onChange={onChange} required name={name} ></input>
                <span className={styles.label}>{label}</span>
            </div>
        );
    }
} 