import React from "react";

export class Select extends React.Component {
    render() {

        const { title , id, data} = this.props
        
        const dado = data.map((d) => <option key={d}>{d}</option>)

        return (
            <div>
                <label>{title}</label>  
                <select id={id}>
                    {dado}
                </select>
            </div>
        );
    }
}