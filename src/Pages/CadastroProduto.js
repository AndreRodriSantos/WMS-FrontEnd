import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import {useState } from "react"
import {DadosPrincipais, Taxas_Impostos, ImagemProduto} from "../Components/FormsProduto"

export default function CadastroProduto() {

    const [passo, setPasso] = useState(1)

    const getCompPassos = () => {
        switch (passo) {
            case 1: return <DadosPrincipais />
            case 2: return <Taxas_Impostos />
            case 3: return <ImagemProduto />
            default: return <DadosPrincipais />
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>

                <header>
                    <img src={logo} className={styles.logo}></img>

                    <div className={styles.etapas}>

                        <button onClick={() => setPasso(1)}>
                            Dados Principais
                        </button>

                        <button onClick={() => setPasso(2)}>
                            Taxas
                        </button>

                        <button onClick={() => setPasso(3)}>
                            Foto
                        </button>
                    </div>

                </header>

                <div className={styles.div_forms} id="forms">
                    {getCompPassos()}
                </div>

                <div className={styles.footerButtons}>
                    <button onClick={() => setPasso(passo - 1)} disabled={passo === 1}>
                        Voltar
                    </button>

                    <button onClick={() => setPasso(passo + 1)} disabled={passo === 3}>
                        Avançar
                    </button>
                </div>

            </div>
        </div>
    )
}

