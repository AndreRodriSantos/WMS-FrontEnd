import { useEffect, useState } from "react"
import { erro, sucesso } from "../Components/Avisos/Alert"
import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import LinhaPicking from "../Components/LinhaPicking"
import api from "../Services/api"
import styles from "../Styles/Picking.module.css"

export default function Picking() {

    const [enderecamentos, setEnderecamentos] = useState([])
    const [enderecamentoSelecionados, setEnderecamentoSelecionados] = useState([])

    function getEnderecamento() {
        api.get("api/enderecamento/list").then(response =>
            setEnderecamentos(response.data)
        )
    }

    function onCheck(enderecamento, quantidade) {

        setEnderecamentoSelecionados(enderecamentoSelecionados => [...enderecamentoSelecionados, {
            enderecamento, quantidade
        }])

        console.log(enderecamentoSelecionados);
    }

    function unCheck(enderecamento) {

        enderecamentoSelecionados.map((e, index) => {
            const prod = e.enderecamento.itens

            if (prod.codProduto == enderecamento.itens.codProduto) {
                enderecamentoSelecionados.splice(index, 1)
            }
        })

        console.log(enderecamentoSelecionados);
    }

    function EnviarProdutos() {
        enderecamentoSelecionados.map(e => {
            e.enderecamento.quantidade = e.enderecamento.quantidade - e.quantidade
            api.put(`api/pedido/saida/${e.enderecamento.id}`, e.enderecamento).then(
                response => {
                    if (response.status == 201 || response.status == 200) {
                        sucesso(`Produtos Enviados com sucesso!!!`)
                    }
                },
                err => {
                    erro("Ocorreu um erro ao Enviar os Produtos Selecionados: " + err)
                }
            )
        })
        window.location.reload()
    }

    useEffect(() => {
        getEnderecamento()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.pickingContainer}>
                <header className={styles.header}>
                    <span>
                        <i className="fa-solid fa-boxes-packing"></i> <span>Picking</span>
                    </span>
                    <InputPesquisa placeholder={"Pesquise por Produto"} />
                </header>

                <div className={styles.tabelaContainer}>
                    <table className={styles.tabela}>
                        <thead className={styles.tabelaHead}>
                            <tr>
                                <td>Foto</td>
                                <td>Nome</td>
                                <td>SKU</td>
                                <td>Qtd Disponivel</td>
                                <td>Valor</td>
                                <td>Qtd Saida</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody className={styles.tabelaBody}>
                            {enderecamentos.map((e, key) =>
                                <LinhaPicking item={e} key={key} id={e.id} onCheck={onCheck} unCheck={unCheck} produto={e.itens}></LinhaPicking>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <button className={styles.enviarProdutos} onClick={EnviarProdutos} id="btnEnviar">Enviar <i className="fa-solid fa-box-archive"></i><lord-icon
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="hover"
                colors="primary:#ffffff"
                state="hover-1"
                style={{ width: 24, height: 24 }}>
            </lord-icon>
            </button>
        </div>
    )
}