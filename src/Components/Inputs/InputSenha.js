import React from "react";
import styles from '../../Styles/InputSenha.module.css'
import eye_off from '../../IMG/eye-off.png'

export class InputSenha extends React.Component {
    render() {

        const { placeholder, name, label } = this.props

        return (
            <div className={styles.inputBox}>
                <input type="password" label={label} placeholder={placeholder} min="0" autoComplete="off" required name={name} id="senha"></input>
                <label>{label}</label>
                <div onClick={hash} type="button" id="btn" className={styles.btn}>
                   <img id="eye" src={eye_off} ></img>
                </div>
            </div>
        );
    }
} 

function hash () {
    var senha = document.getElementById('senha')
    var eye = document.getElementById('eye')

    if (senha.type === 'password') {
        senha.type = 'text' 
     
    }
    else {
        senha.type = 'password'
       
    }

}

