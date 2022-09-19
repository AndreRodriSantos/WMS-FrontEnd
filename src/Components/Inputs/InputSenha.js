import React from "react";
import styles from '../../Styles/Inputs/InputSenha.module.css'
import eye_off from '../../IMG/eye-off.png'
import eye_on from '../../IMG/eye-on.png'
import eye_open from '../../IMG/eye-open.gif'
import eye_close from '../../IMG/eye-close.gif'

export class InputSenha extends React.Component {
    render() {

        const { name, label } = this.props

        return (
            <div className={styles.inputBox}>
                <input type="password" autoComplete="off" required name={name} id="senha"></input>
                <label>{label}</label>
                <div onClick={hash} type="button" id="btn" className={styles.btn}>
                    <img id="eye" width="30px" height="30px" src={eye_off} ></img>
                </div>
            </div>
        );
    }
}

function hash() {
    var senha = document.getElementById('senha')
    var eye = document.getElementById('eye')

    if (senha.type === 'password' && eye.getAttribute("src")) {
        senha.type = 'text'
        eye.setAttribute("src", eye_open)
        setTimeout(() => {
            eye.setAttribute("src", eye_on)
        }, 600);
    }
    else {
        senha.type = 'password'
        eye.setAttribute("src", eye_close)
        setTimeout(() => {
            eye.setAttribute("src", eye_off)
        }, 600);
    }
}

