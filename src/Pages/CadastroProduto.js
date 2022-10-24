import styles from "../Styles/Cadastros/CadastroProduto.module.css"
import logo from "../IMG/Logo WMS.png"
import { useEffect, useState } from "react"
import api from "../Services/api"
import { Foto } from "../Components/Inputs/InputFoto";
import { Input } from "../Components/Inputs/InputText";
import { Select } from "../Components/Inputs/Select";
import { fazOptionsDemanda, fazOptionsFornecedor, fazOptionsMedida, fazOptionsNcm, getFornecedorID, getMedidaID, getNcmID } from "../Services/gets"
import { Redirect } from "react-router-dom";
import { history } from "../routes";

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
    const [fornecedores, setFornecedores] = useState([])
    const [fornecedoresCheck, setFornecedoresCheck] = useState([])

    const getCompPasso = () => {
        const etapa1 = document.getElementById("etapa1Div")
        const etapa2 = document.getElementById("etapa2Div")
        const etapa3 = document.getElementById("etapa3Div")

        const etap1 = document.getElementById("etapa1")
        const etap2 = document.getElementById("etapa2")
        const etap3 = document.getElementById("etapa3")

        switch (passo) {
            case 1:
                etapa1.classList.replace(styles.etapa1Off, styles.etapa1On)
                etapa2.classList.replace(styles.etapa2On, styles.etapa2Off)
                etapa3.classList.replace(styles.etapa3On, styles.etapa3Off)

                etap2.classList.replace(styles.etapaPass, styles.etapa)
                etap3.classList.replace(styles.etapaPass, styles.etapa)

                break;
            case 2:
                etapa1.classList.replace(styles.etapa1On, styles.etapa1Off)
                if (etapa2.classList.contains(styles.etapa2Off)) {
                    etapa2.classList.replace(styles.etapa2Off, styles.etapa2On)
                } else {
                    etapa2.classList.replace(styles.etapa2Off2, styles.etapa2On)
                }
                etapa3.classList.replace(styles.etapa3On, styles.etapa3Off)

                etap2.classList.replace(styles.etapa, styles.etapaPass)
                etap3.classList.replace(styles.etapaPass, styles.etapa)
                break;
            case 3:
                etapa1.classList.replace(styles.etapa1On, styles.etapa1Off)
                etapa2.classList.replace(styles.etapa2On, styles.etapa2Off2)
                etapa3.classList.replace(styles.etapa3Off, styles.etapa3On)

                etap2.classList.replace(styles.etapa, styles.etapaPass)
                etap3.classList.replace(styles.etapa, styles.etapaPass)
                break;
        }
    }

    function getFornecedores() {
        return api.get("api/fornecedor/list").then(response => { setFornecedores(response.data) })
    }

    function checkFornecedor(fornecedor, id) {
        const checked = document.getElementById(id).checked
        const checkBox = document.getElementById(id)

        if (checked == true) {
            checkBox.checked = true
            setFornecedoresCheck(fornecedoresCheck => [...fornecedoresCheck, fornecedor])
            console.log(fornecedoresCheck);
        } else {
            fornecedoresCheck.map((f, index) => {
                if (fornecedor.id == f.id) {
                    fornecedoresCheck.splice(index, 1)
                    console.log(fornecedoresCheck);
                }
            })
        }
    }

    useEffect(() => {
        getCompPasso()
    })

    useEffect(() => {
        getFornecedores()
    }, [])


    async function CadastrarProduto(e) {
        e.preventDefault()

        let fornecedores = fornecedoresCheck
        let demanda = document.getElementById("demanda").value
        let medida = document.getElementById("medida").value
        medida = await getMedidaID(medida)
        let ncm = document.getElementById("ncm").value
        ncm = await getNcmID(ncm)
        let imagem = document.getElementById("imgPhoto").getAttribute("src")


        const produto = {
            nome, descricao, medida, pontoPedido, valorUnitario, demanda, ncm, sku, fornecedores, importado, ipi, pis, cofins, icms, imagem
        }

        api.post("api/produto/save", produto)
        console.log(produto)
    }

    return (
        <div className={styles.container} onChange={(e) => getCompPasso(e)}>
            <div className={styles.formContainer}>

                <header className={styles.header}>
                    <img src={logo} className={styles.logo}></img>

                    <div className={styles.etapas}>

                        <div className={styles.etapaPass} id="etapa1">
                            <div className={styles.etapaCircle}>
                                <i className="fa-sharp fa-solid fa-bars"></i>
                            </div>
                        </div>

                        <div className={styles.linhaEtapa}></div>

                        <div className={styles.etapa} id="etapa2">
                            <div className={styles.etapaCircle}>
                                <i className="fa-sharp fa-solid fa-dollar-sign"></i>
                            </div>
                        </div>

                        <div className={styles.linhaEtapa}></div>

                        <div className={styles.etapa} id="etapa3">
                            <div className={styles.etapaCircle}>
                                <i className="fa-sharp fa-solid fa-image"></i>
                            </div>
                        </div>
                    </div>

                </header>

                <div className={styles.div_forms} id="forms">

                    <form className={`${styles.form}  ${styles.etapa1On}`} id="etapa1Div" onSubmit={(e) => { e.preventDefault(); setPasso(passo + 1) }}>

                        <div className={styles.formdados}>
                            <div className={styles.dados}>

                                <div className={styles.column}>
                                    <Input width={"325px"} onChange={(e) => setNome(e.target.value)} label="Nome" id="nome" type="text" name="nome" ></Input>
                                    <Input width={"325px"} onChange={(e) => setDescricao(e.target.value)} label="Descrição" id="descricao" type="text" name="descricao" ></Input>
                                    <Select width={"325px"} data={fazOptionsDemanda()} idArrow="arrow2" id="demanda" name="demanda"></Select>
                                    <Input width={"325px"} onChange={(e) => setPedido(e.target.value)} label="Ponto de Pedido" type="number" id="nome" name="pontoPedido"></Input>

                                </div>

                                <div className={styles.column}>
                                    <Input width={"325px"} onChange={(e) => setSku(e.target.value)} label="SKU" id="nome" type="number" name="nome" ></Input>
                                    <Select width={"325px"} data={fazOptionsNcm()} label="NCM" id="ncm" idArrow="arrow4" name="ncm"></Select>
                                    <Select width={"325px"} data={fazOptionsMedida()} idArrow="arrow3" id="medida" name="medida"></Select>
                                    <Input width={"325px"} onChange={(e) => setValor(e.target.value)} label="Valor Bruto" id="valor" type="number" name="valor"></Input>
                                </div>

                            </div>

                            <div className={styles.fornecedoresDiv}>
                                <div className={styles.labelFornecedores}>
                                    <span>Fornecedores</span>
                                    <span className={styles.cadastrarBtn} onClick={() => history.push("/CadastroFornecedores")}><p className={styles.fornecedor}>Cadastrar Fornecedor</p><i className="fa-solid fa-circle-plus"></i></span>
                                </div>
                                <ul className={styles.listaFornecedores}>
                                    {fornecedores.map((f, index) =>
                                        <li className={styles.linhaFornecedor} key={index}>
                                            <p>{f.nome}</p>

                                            <div className={styles.checkboxAnimate}>
                                                <label>
                                                    <input id={f.nome + index} className={styles.check} onClick={() => checkFornecedor(f, f.nome + index)} type="checkbox" name="check" />
                                                    <span className={styles.inputCheck}></span>
                                                </label>

                                            </div>

                                        </li>
                                    )}
                                </ul>

                            </div>

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

                    <form className={`${styles.form}  ${styles.etapa2Off}`} onSubmit={(e) => { e.preventDefault(); setPasso(passo + 1) }} id="etapa2Div">

                        <div className={styles.column}>
                            <Input onChange={(e) => setIpi(e.target.value)} label="IPI" id="nome" type="number" name="nome" ></Input>
                            <Input onChange={(e) => setPis(e.target.value)} label="PIS" id="descricao" type="number" name="descricao" ></Input>
                            <Input onChange={(e) => setCofins(e.target.value)} label="COFINS" id="descricao" type="number" name="descricao" ></Input>
                        </div>

                        <div className={styles.column}>
                            <Input onChange={(e) => setIcms(e.target.value)} label="ICMS" id="descricao" type="number" name="descricao" ></Input>
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

                    <form className={`${styles.form}  ${styles.etapa3Off}`} id="etapa3Div" onSubmit={(e) => CadastrarProduto(e)}>

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

