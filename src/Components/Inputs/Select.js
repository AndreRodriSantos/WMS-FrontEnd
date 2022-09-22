import React from "react";
import styles from "../../Styles/Inputs/Select.module.css"
import arrowUp from "../../IMG/arrow-up.png"
import arrowDown from "../../IMG/arrow-down.png"

export class Select extends React.Component {
    render() {

        const { title, data, id, idArrow, onChange } = this.props

        async function FazOptions() {
            const dados = await data
            const select = document.getElementById(id)
            console.log(dados)
            select.innerHTML = dados
        }

        FazOptions()

        function arrow() {

            const arrow = document.getElementById(idArrow)
            if (arrow.classList.contains(styles.arrowDown)) {
                arrow.classList.replace(styles.arrowDown, styles.arrowUp)
            }else {
                arrow.classList.replace(styles.arrowUp, styles.arrowDown)
            }
        }

        return (
            <div className={styles.select} onClick={arrow} onBlur={arrow}>
                <select onChange={onChange} id={id} required></select>
                <img src={arrowDown} id={idArrow} className={styles.arrowDown}></img>
            </div>
        );
    }
}

