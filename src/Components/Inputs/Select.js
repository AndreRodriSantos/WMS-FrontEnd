import React from "react";
import styles from "../../Styles/Inputs/Select.module.css"

export class Select extends React.Component {
    render() {

        const { title , id, data} = this.props
        
        const dado = data.map((d) => <option key={d}>{d}</option>)

        return (
            <div className={styles.select}>
                <select id={id}>
                    {dado}
                </select>
            </div>
        );
    }
}