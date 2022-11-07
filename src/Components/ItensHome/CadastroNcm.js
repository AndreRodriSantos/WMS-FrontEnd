import React from "react";
import styles from '../../Styles/ItensHome/CadastroNcm.module.css'
import { Button } from "../../Components/Button"
import { Input } from "../../Components/Inputs/InputText"
import api from "../../Services/api"

export class CadastroNcm extends React.Component {
    render() {

        return (
            <div className={styles.principal} id="principal">
                <div className={styles.payment} id="payment">
                    <span className={styles.close} onClick={Fechar} ><i className="fa-regular fa-circle-xmark"></i></span>
                    <span className={styles.header}>
                        <a className={styles.iconNCM}>
                            <span className={styles.textNcm}>NCM</span>
                        </a>
                        <span className={styles.title}>Cadastro de NCM</span>
                    </span>
                    <form onSubmit={CadastroNCM}>
                        <Input id="ncm" label="NCM" type="number" placeholder="Digite o NCM" name="ncm" />
                        <Button>Criar</Button>
                    </form>
                </div>
            </div>
        );
    }
}

function Fechar() {
    const payment = document.getElementById("payment");
    const principal = document.getElementById("principal");
    const popUp = document.getElementById("popUp");

    payment.style.display = "none"
    principal.style.display = "none"
    popUp.style.zIndex = "-1"
}

function CadastroNCM(event) {
    event.preventDefault()

    const ncm = document.getElementById('ncm').value

    var body = { "ncm": ncm };
    console.log(body)

    api.post(
        "api/ncm/save", body
    );
}