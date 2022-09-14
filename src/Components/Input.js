import React from "react";
import styles from "../Styles/Input.module.css"

export class Input extends React.Component {
    render () {
        const {placeholder, type, name, id, onChange} = this.props
        return(
            <input id={id} type={type} placeholder={placeholder} onChange={onChange} min="0" autoComplete="off" required className={styles.input} name={name}></input>
        );
    }
}