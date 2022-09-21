import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import { useState } from "react"
import { DadosPrincipais, Taxas_Impostos, ImagemProduto } from "../Components/Forms/FormsProduto"
import api from "../Services/api"

export default function CadastroProduto() {

    const [passo, setPasso] = useState(1)

    function handleSaveProduto(produto){
        const nome = (produto.nome)
        const descricao = (produto.descricao)
        const fornecedor = (produto.fornecedor)
        const pedido = (produto.pedido)
        const validade = (produto.validade)
        const demanda = (produto.demanda)
        const valor = (produto.valor)
        const medida = (produto.medida)
        const ipi = (produto.ipi)
        const pis = (produto.pis)
        const confins = (produto.confins)
        const icms = (produto.ipi)
        const sku = (produto.ipi)
        const ncm = (produto.ncm)
        const importado = (produto.importado)
    }

    function getPassos(p){
        setPasso(passo + p)
    }

    const getCompPassos = () => {
        switch (passo) {
            case 1: return <DadosPrincipais saveData={handleSaveProduto} addPasso={getPassos} />
            case 2: return <Taxas_Impostos/>
            case 3: return <ImagemProduto/>
            default: return <DadosPrincipais  saveData={handleSaveProduto} />
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

