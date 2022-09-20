import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import { useState } from "react"
import { DadosPrincipais, Taxas_Impostos, ImagemProduto } from "../Components/Forms/FormsProduto"

export default function CadastroProduto() {
    const [passo, setPasso] = useState(1)

    const [data, setData] = useState({})

    const getCompPassos = () => {
        switch (passo) {
            case 1: return <DadosPrincipais childtoParent={()=> setData} />
            case 2: return <Taxas_Impostos childtoParent={data} />
            case 3: return <ImagemProduto  childtoParent={data} />
            default: return <DadosPrincipais childtoParent={data} />
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

            </div>
        </div>
    )
}

