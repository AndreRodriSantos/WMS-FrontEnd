import React from "react";
import styles from "../../Styles/Inputs/Select.module.css"
import arrowUp from  "../../IMG/arrow-up.png"
import arrowDown from "../../IMG/arrow-down.png"

export class Select extends React.Component {
    render() {

        const { title, data, id, idArrow} = this.props

        const dado = data.map((d) => <option value={d} key={d}>{d}</option>)

        function arrow(){
            const arrow = document.getElementById(idArrow)
            
            if(arrow.classList.contains(styles.arrowDown)){
                arrow.classList.replace(styles.arrowDown, styles.arrowUp)
            }else{
                arrow.classList.replace(styles.arrowUp, styles.arrowDown)
            }
        
        }

        return (
            <div className={styles.select} onClick={arrow} onBlur={arrow}>
                <select id={id} required>
                    {dado}
                </select>
                <img src={arrowDown} id={idArrow} className={styles.arrowDown}></img>
            </div>
        );
    }
}

