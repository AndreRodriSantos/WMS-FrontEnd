import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import { useEffect, useState } from "react"
import { DadosPrincipais, Taxas_Impostos, ImagemProduto } from "../Components/Forms/FormsProduto"
import api from "../Services/api"
import { Foto } from "../Components/Inputs/InputFoto";
import { Input } from "../Components/Inputs/InputText";
import { Select } from "../Components/Inputs/Select";

export default function CadastroProduto() {

    const [passo, setPasso] = useState(1)

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [fornecedores, setFornecedor] = useState(0)
    const [pedido, setPedido] = useState('')
    const [demanda, setDemanda] = useState('')
    const [valorUnitario, setValor] = useState('')
    const [medida, setMedida] = useState('')
    const [ipi, setIpi] = useState('')
    const [pis, setPis] = useState('')
    const [cofins, setCofins] = useState('')
    const [icms, setIcms] = useState('')
    const [sku, setSku] = useState('')
    const [ncm, setNcm] = useState('')
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

    function Avancar(e) {
        e.preventDefault()
        setPasso(passo + 1)
        getCompPasso()
    }

    function Voltar(e) {
        e.preventDefault()
        setPasso(passo - 1)
        getCompPasso()
    }


    function getFornecedores(e) {
        return api.get("api/fornecedor/list").then(response => response.data)
    }

    function getMedidas(e) {
        return api.get("api/unidade/list").then(response => response.data)
    }

    function getDemandas(e) {
        return api.get("api/enumeracoes/demandas").then(response => response.data)
    }

    function getNcm(e) {
        return api.get("api/ncm/").then(response => response.data)
    }

    function CadastrarProduto(e) {
        e.preventDefault()
        const body = {
            nome, descricao, medida, valorUnitario, demanda, ncm, sku, fornecedores, importado, ipi, pis, cofins, icms
        }

        api.post("api/produto/save", body)

        console.log(body)
    }

    async function fazOptionsFornecedor() {
        const fornecedor = await getFornecedores()
        const options = await fornecedor.map((f) => `<option value=${f.id}>${f.nome}</option>`)
        return options
    }

    async function fazOptionsDemanda() {
        const demanda = await getDemandas()
        const options = demanda.map((d) => `<option value=${d}>${d}</option>`)
        return options
    }

    async function fazOptionsMedida() {
        const medidas = await getMedidas()
        const options = await medidas.map((m) => `<option value=${m.id}>${m.nome + " (" + m.sigla + ")"}</option>`)
        return options
    }

    async function fazOptionsNcm() {
        const ncm = await getNcm()
        const options = await ncm.map((n) => `<option value=${n.id}>${n.ncm}</option>`)
        return options
    }


    return (
        <div className={styles.container} onChange={(e) => getCompPasso(e)}>
            <div className={styles.formContainer}>

                <header>
                    <img src={logo} className={styles.logo}></img>

                    <div className={styles.etapas}>

                        <button onClick={() => setPasso(1)}>
                            Dados Principais
                        </button>

                        <button onClick={(e) => { setPasso(2); getCompPasso(e) }}>
                            Taxas
                        </button>

                        <button onClick={() => setPasso(3)}>
                            Foto
                        </button>
                    </div>

                </header>

                <div className={styles.div_forms} id="forms">

                    <form className={`${styles.form}  ${styles.etapa1On}`} id="etapa1" onSubmit={(e) => Avancar(e)}>

                        <div className={styles.column}>
                            <Input onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                            <Input onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                            <Select value={fornecedores} onChange={(e) => setFornecedor(e.target.value)} data={fazOptionsFornecedor()} idArrow="arrow1" id="fornecedor" name="fornecedor"></Select>
                            <Input onChange={(e) => setPedido(e.target.value)} label="Ponto de Pedido" type="text" id="nome" name="pontoPedido"></Input>
                        </div>

                        <div className={styles.column}>
                            <Input onChange={(e) => setSku(e.target.value)} label="SKU" id="nome" type="text" name="nome" ></Input>
                            <Select onChange={(e) => setDemanda(e.target.value)} data={fazOptionsDemanda()} idArrow="arrow2" id="demanda" name="demanda"></Select>
                            <Input onChange={(e) => setValor(e.target.value)} label="Valor" id="valor" type="number" name="valor"></Input>
                            <Select value={medida} onChange={(e) => setMedida(e.target.value)} data={fazOptionsMedida()} idArrow="arrow3" id="medida" name="medida"></Select>
                        </div>

                        <div className={styles.footerButtons}>
                            <button type="button" >
                                Voltar
                            </button>

                            <button type="submit">
                                Avançar
                            </button >
                        </div>

                    </form>

                    <form className={`${styles.form}  ${styles.etapa2Off}`} onSubmit={(e) => { setPasso(passo + 1); console.log(passo); getCompPasso(e); e.preventDefault() }} id="etapa2">

                        <div className={styles.column}>
                            <Input onChange={(e) => setIpi(e.target.value)} label="IPI" id="nome" type="text" name="nome" ></Input>
                            <Input onChange={(e) => setPis(e.target.value)} label="PIS" id="descricao" type="text" name="descricao" ></Input>
                            <Input onChange={(e) => setCofins(e.target.value)} label="COFINS" id="descricao" type="text" name="descricao" ></Input>
                        </div>

                        <div className={styles.column}>
                            <Input onChange={(e) => setIcms(e.target.value)} label="ICMS" id="descricao" type="text" name="descricao" ></Input>
                            <Select value={ncm} onChange={(e) => setNcm(e.target.value)} data={fazOptionsNcm()} label="NCM" id="ncm" type="text" name="descricao" ></Select>
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
                            <div type="button" onClick={(e) => { setPasso(passo - 1); getCompPasso(e) }}>
                                Voltar
                            </div>

                            <button type="submit">
                                Avançar
                            </button>
                        </div>
                    </form>

                    <form className={`${styles.form}  ${styles.etapa3Off}`} id="etapa3" onSubmit={(e) => CadastrarProduto(e)}>
                        <div className={styles.divFotos}>
                            <Foto></Foto>
                        </div>

                        <div className={styles.footerButtons} >
                            <div type="button" onClick={(e) => { setPasso(passo - 1); getCompPasso(e) }}>
                                Voltar
                            </div>

                            <button type="submit">
                                Confirmar
                            </button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

