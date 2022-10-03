import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import { useEffect, useState } from "react"
import api from "../Services/api"
import { Foto } from "../Components/Inputs/InputFoto";
import { Input } from "../Components/Inputs/InputText";
import { Select } from "../Components/Inputs/Select";
import { fazOptionsDemanda, fazOptionsFornecedor, fazOptionsMedida, fazOptionsNcm, getFornecedorID, getMedidaID, getNcmID } from "../Services/gets"

export default function CadastroProduto() {

    const [passo, setPasso] = useState(1)
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [pontoPedido, setPedido] = useState('')
    const [valorUnitario, setValor] = useState('')
    const [ipi, setIpi] = useState('')
    const [pis, setPis] = useState('')
    const [cofins, setCofins] = useState('')
    const [icms, setIcms] = useState('')
    const [sku, setSku] = useState('')
    const [importado, setimportado] = useState('')

    const getCompPasso = () => {
        const etapa1 = document.getElementById("etapa1")
        const etapa2 = document.getElementById("etapa2")
        const etapa3 = document.getElementById("etapa3")

        switch (passo) {
            case 1:
                etapa1.classList.replace(styles.etapa1Off, styles.etapa1On)
                etapa2.classList.replace(styles.etapa2On, styles.etapa2Off)
                etapa3.classList.replace(styles.etapa3On, styles.etapa3Off)
                break;
            case 2:
                etapa1.classList.replace(styles.etapa1On, styles.etapa1Off)
                etapa2.classList.replace(styles.etapa2Off, styles.etapa2On)
                etapa3.classList.replace(styles.etapa3On, styles.etapa3Off)
                break;
            case 3:
                etapa1.classList.replace(styles.etapa1On, styles.etapa1Off)
                etapa2.classList.replace(styles.etapa2On, styles.etapa2Off)
                etapa3.classList.replace(styles.etapa3Off, styles.etapa3On)
                break;
        }

    }

    useEffect(() => {
        getCompPasso()
    })


    async function CadastrarProduto(e) {
        e.preventDefault()

        let fornecedores = document.getElementById("fornecedor").value
        fornecedores = await getFornecedorID(fornecedores)
        let demanda = document.getElementById("demanda").value
        console.log(fornecedores)
        let medida = document.getElementById("medida").value
        medida = await getMedidaID(medida)
        let ncm = document.getElementById("ncm").value
        ncm = await getNcmID(ncm)
        let imagem = document.getElementById("imgPhoto").getAttribute("src")


        const body = {
            nome, descricao, medida, pontoPedido, valorUnitario, demanda, ncm, sku, fornecedores, importado, ipi, pis, cofins, icms,imagem
        }

        api.post("api/produto/save", body)
        console.log(body)
    }

    return (
        <div className={styles.container} onChange={(e) => getCompPasso(e)}>
            <div className={styles.formContainer}>

                <header className={styles.header}>
                    <img src={logo} className={styles.logo}></img>

                    <div className={styles.etapas}>

                        <button onClick={() => setPasso(1)}>
                            Dados Principais
                        </button>

                        <button onClick={(e) => { setPasso(2) }}>
                            Taxas
                        </button>

                        <button onClick={() => setPasso(3)}>
                            Foto
                        </button>
                    </div>

                </header>

                <div className={styles.div_forms} id="forms">

                    <form className={`${styles.form}  ${styles.etapa1On}`} id="etapa1" onSubmit={(e) => { e.preventDefault(); setPasso(passo + 1) }}>

                        <div className={styles.column}>
                            <Input onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                            <Input onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                            <Select data={fazOptionsFornecedor()} idArrow="arrow1" id="fornecedor" name="fornecedor"></Select>
                            <Input onChange={(e) => setPedido(e.target.value)} label="Ponto de Pedido" type="number" id="nome" name="pontoPedido"></Input>
                        </div>

                        <div className={styles.column}>
                            <Input onChange={(e) => setSku(e.target.value)} label="SKU" id="nome" type="number" name="nome" ></Input>
                            <Select data={fazOptionsDemanda()} idArrow="arrow2" id="demanda" name="demanda"></Select>
                            <Input onChange={(e) => setValor(e.target.value)} label="Valor" id="valor" type="number" name="valor"></Input>
                            <Select data={fazOptionsMedida()} idArrow="arrow3" id="medida" name="medida"></Select>
                        </div>

                        <div className={styles.footerButtons}>
                            <button type="button" className={styles.voltarButton}>
                                Voltar
                            </button>

                            <button type="submit" className={styles.avancarButton}>
                                Avançar
                            </button >
                        </div>

                    </form>

                    <form className={`${styles.form}  ${styles.etapa2Off}`} onSubmit={(e) => { e.preventDefault(); setPasso(passo + 1) }} id="etapa2">

                        <div className={styles.column}>
                            <Input onChange={(e) => setIpi(e.target.value)} label="IPI" id="nome" type="number" name="nome" ></Input>
                            <Input onChange={(e) => setPis(e.target.value)} label="PIS" id="descricao" type="number" name="descricao" ></Input>
                            <Input onChange={(e) => setCofins(e.target.value)} label="COFINS" id="descricao" type="number" name="descricao" ></Input>
                        </div>

                        <div className={styles.column}>
                            <Input onChange={(e) => setIcms(e.target.value)} label="ICMS" id="descricao" type="number" name="descricao" ></Input>
                            <Select data={fazOptionsNcm()} label="NCM" id="ncm" idArrow="arrow4" name="ncm"></Select>
                            <div className={styles.divInput}>
                                <label className={styles.label}>Produto Importado</label>

                                <div className={styles.importado}>
                                    <div>
                                        <label className={styles.label}>Sim</label>
                                        <input onChange={(e) => setimportado(e.target.value)} id="sim" className={styles.radio} type="radio" value="true" name="homologado" ></input>
                                    </div>

                                    <div>
                                        <label className={styles.label}>Não</label>
                                        <input onChange={(e) => setimportado(e.target.value)} id="nao" className={styles.radio} type="radio" value="false" name="homologado"></input>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.footerButtons}>
                            <button className={styles.voltarButton} type="button" onClick={(e) => { setPasso(passo - 1); getCompPasso(e) }}>
                                Voltar
                            </button>

                            <button className={styles.avancarButton} type="submit">
                                Avançar
                            </button>
                        </div>
                    </form>

                    <form className={`${styles.form}  ${styles.etapa3Off}`} id="etapa3" onSubmit={(e) => CadastrarProduto(e)}>

                        <div className={styles.divFotos}>
                            <Foto></Foto>
                        </div>

                        <div className={styles.footerButtons} >

                            <button className={styles.voltarButton} type="button" onClick={(e) => { setPasso(passo - 1); getCompPasso(e) }}>
                                Voltar
                            </button>

                            <button className={styles.avancarButton} type="submit">
                                Confirmar
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

