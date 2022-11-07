import styles from "../Styles/Cadastros/Fornecedor.module.css"
import logo from "../IMG/Logo WMS.png"
import { Input } from "../Components/Inputs/InputText"
import { Button } from "../Components/Button"
import api from "../Services/api"
import { useEffect, useState } from "react"
import { erro, sucesso } from "../Components/Avisos/Alert"

export default function CadastroFornecedor() {

    function getFornecedor() {
        const id = localStorage.getItem("idFornecedor")
        const homologado = document.getElementById("homologado")

        if (id != undefined || id != null) {
            api.get(`api/fornecedor/${id}`).then(
                response => {
                    const fornecedor = response.data
                    setNome(fornecedor.nome)
                    setCnpj(fornecedor.cnpj)
                    setCep(fornecedor.cep)
                    setLogradouro(fornecedor.logradouro)
                    setLocalidade(fornecedor.localidade)
                    setUf(fornecedor.uf)
                    homologado.checked = fornecedor.homologado
                }
            )
        }

    }

    function CadastrarAlterar(event) {
        event.preventDefault()

        const id = localStorage.getItem('idFornecedor')
        const homologado = document.getElementById("homologado").checked

        var body = {
            id,
            "nome": nome,
            "cnpj": cnpj,
            "cep": cep,
            "logradouro": logradouro,
            "localidade": localidade,
            "uf": uf,
            "homologado": homologado
        };

        console.log(body)
        console.log(homologado);

        if (id) {
            api.put(
                `api/fornecedor/${id}`, body
            ).then(
                response => {
                    if (response.status == 201 || response.status == 200) {
                        sucesso(`Fornecedor ${nome} alterado com sucesso!!!`)
                    }
                },
                err => {
                    erro("Ocorreu um erro ao Alterar o Fornecedor:" + err)
                }
            )
        } else {
            api.post("api/fornecedor/save", body).then(
                response => {
                    if (response.status == 201 || response.status == 200) {
                        sucesso("Fornecedor cadastrado com sucesso!!!")
                    }
                },
                err => {
                    erro("Ocorreu um erro ao Cadastrar este Fornecedor:" + err)
                }
            )
        }
    }

    useEffect(() => {
        getFornecedor()
    }, [])

    const [nome, setNome] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')
    const [homologado, setHomologado] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo}></img>
                    <h1 className={styles.titulo}>Cadastro de Fornecedor</h1>
                </header>
                <form className={styles.form} onSubmit={CadastrarAlterar}>

                    <div className={styles.column}>

                        <Input label="Nome" id="nome" type="text" defaultValue={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome do Fornecedor" name="nome" ></Input>

                        <Input label="CNPJ" id="cnpj" defaultValue={cnpj} onChange={(e) => setCnpj(e.target.value)} type="text" placeholder="Digite o CNPJ" name="cpnj" ></Input>

                        <Input label="CEP" id="cep" type="text" defaultValue={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" name="cep" ></Input>

                        <Input label="Logradouro" id="logradouro" type="text" defaultValue={logradouro} onChange={(e) => setLogradouro(e.target.value)} placeholder="Digite o Logradouro" name="nome" ></Input>

                    </div>

                    <div className={styles.column}>

                        <Input label="Localidade" id="localidade" type="text" defaultValue={localidade} onChange={(e) => setLocalidade(e.target.value)} placeholder="Digite o localidade" name="localidade" ></Input>

                        <Input label="UF" id="uf" type="text" defaultValue={uf} onChange={(e) => setUf(e.target.value)} placeholder="Digite o UF" name="uf" ></Input>

                        <div className={styles.divInput}>
                            <label className={styles.label}>Homologado</label>

                            <div className={styles.homologado}>
                                <label className={styles.switch}>
                                    <input id='homologado' onChange={(e) => setHomologado(e.target.value)} className={styles.inputCheckbox} type="checkbox" name="homologado" />
                                    <span className={styles.slider}></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <Button>Cadastrar Fornecedor</Button>

                </form>
            </div>
        </div>
    )
}