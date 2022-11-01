import styles from "../Styles/Cadastros/Fornecedor.module.css"
import logo from "../IMG/Logo WMS.png"
import { Input } from "../Components/Inputs/InputText"
import { Button } from "../Components/Button"
import api from "../Services/api"
import { useState } from "react"
import { erro, sucesso } from "../Components/Avisos/Alert"

export default function CadastroFornecedor() {

    function CadastrarFornecedor(event) {
        event.preventDefault()

        var body = {
            "nome": nome,
            "cnpj": cnpj,
            "cep": cep,
            "logradouro": logradouro,
            "localidade": localidade,
            "uf": uf,
            "homologado": homologado
        };

        console.log(body)

        api.post("api/fornecedor/save", body).then(
            response => {
                if (response.status == 201 || response.status == 200){
                    sucesso("Fornecedor cadastrado com sucesso!!!")
                }
            },
             err => {
                erro("Ocorreu um erro ao Cadastrar este Fornecedor:" + err)
            }
        )
    }

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
                <form className={styles.form} onSubmit={CadastrarFornecedor}>

                    <div className={styles.column}>

                        <Input label="Nome" id="nome" type="text" onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome do Fornecedor" name="nome" ></Input>

                        <Input label="CNPJ" id="cnpj" onChange={(e) => setCnpj(e.target.value)} type="text" placeholder="Digite o CNPJ" name="cpnj" ></Input>

                        <Input label="CEP" id="cep" type="text" onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP" name="cep" ></Input>

                        <Input label="Logradouro" id="logradouro" type="text" onChange={(e) => setLogradouro(e.target.value)} placeholder="Digite o Logradouro" name="nome" ></Input>

                    </div>

                    <div className={styles.column}>

                        <Input label="Localidade" id="localidade" type="text" onChange={(e) => setLocalidade(e.target.value)} placeholder="Digite o localidade" name="localidade" ></Input>

                        <Input label="UF" id="uf" type="text" onChange={(e) => setUf(e.target.value)} placeholder="Digite o UF" name="uf" ></Input>
                        
                        <div className={styles.divInput}>
                            <label className={styles.label}>Homologado</label>

                            <div className={styles.homologado}>
                                <div>
                                    <label className={styles.label}>Sim</label>
                                    <input id="sim" className={styles.radio} onChange={(e) => setHomologado(e.target.value)} type="radio" value="true" name="homologado" ></input>
                                </div>

                                <div>
                                    <label className={styles.label}>Não</label>
                                    <input id="nao" className={styles.radio} onChange={(e) => setHomologado(e.target.value)} type="radio" value="false" name="homologado"></input>
                                </div>
                            </div>

                        </div>

                    </div>

                    <Button>Cadastrar Fornecedor</Button>

                </form>
            </div>
        </div>
    )
}