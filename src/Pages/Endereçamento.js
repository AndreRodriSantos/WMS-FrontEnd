import styles from "../Styles/TelaEnderecamento.module.css"
import prateleira from "../IMG/Prateleira.png"
import { useEffect, useState } from "react";
import api from "../Services/api";
import { ListaPedidos } from "../Components/InfoPedido/ListaPedidos";
import { PedidoItemCaixa } from "../Components/InfoPedido/PedidoItemCaixa";
import Edificio from "../Components/Edificio";
import { erro, sucesso } from "../Components/Avisos/Alert";

export default function Enderecamento() {

    const [itens, setItens] = useState([])
    const [edificios, setEdificios] = useState([1, 2, 3, 4])
    const [enderecamentosCheck, setEndereçamentosCheck] = useState([])

    async function getPedido(id) {
        return api.get(`api/pedido/${id}`).then(
            response => {
                console.log(response.data.itens);
                setItens(response.data.itens)
            }
        )
    }

    function getEnderecamento() {
        var modulos = document.getElementsByClassName(styles.modulo)

        for (let i = 0; i < modulos.length; i++) {

            const modulo = modulos[i];
            const andar = modulo.parentElement
            const edificio = andar.parentElement
            const corredor = edificio.parentElement.id
            

            api.get("api/enderecamento/list").then(
                response => {
                    const endereco = response.data
                    endereco.map(e => {
                        if (e.corredor == corredor) {
                            if (e.edificio == edificio.id) {
                                if (e.andar == andar.id) {
                                    if (e.modulo == modulo.id) {
                                        console.log("aaaaa");
                                    }
                                }
                            }
                        }
                    })
                })
        }
    }

    useEffect(() => {
        getPedido(localStorage.getItem('idPedido'))
        getEnderecamento()
    }, [])

    function handleEndereco(endereco) {
        setEndereçamentosCheck(ender => [...enderecamentosCheck, endereco])
        console.log(enderecamentosCheck);
    }

    function CadastrarEndereçamentos() {
        enderecamentosCheck.map(e => {
            api.post("api/enderecamento/save", e).then(
                response => {
                    if (response.status == 201 || response.status == 200) {
                        sucesso("Endereçamento cadastrado com sucesso!!!")
                    }
                },
                err => {
                    erro("Ocorreu um erro ao Cadastrar este Endereçamento:" + err)
                }
            )
        })
    }

    return (
        <div className={styles.container}>

            <header className={styles.header}>

                <button onClick={() => window.location.href = "VerificarPedidos"} className={styles.cancelarButton}>
                    Cancelar
                </button>

                <button onClick={CadastrarEndereçamentos} className={styles.confirmarButton}>
                    Confirmar
                </button>

            </header>

            <div className={styles.body}>

                <div className={styles.corredor} id={"1"}>
                    {edificios.map((e, key) => <Edificio handleEndereco={handleEndereco} edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 1 <i className="fa-solid fa-right-long"></i></span>
                </div>

                <div className={styles.corredor} id={"2"}>
                    {edificios.map((e, key) => <Edificio handleEndereco={handleEndereco} edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 2 <i className="fa-solid fa-right-long"></i></span>
                </div>


                <div className={styles.corredor} id={"3"}>
                    {edificios.map((e, key) => <Edificio handleEndereco={handleEndereco} edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 3 <i className="fa-solid fa-right-long"></i></span>
                </div>

                <div className={styles.corredor} id={"4"}>
                    {edificios.map((e, key) => <Edificio handleEndereco={handleEndereco} edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 4 <i className="fa-solid fa-right-long"></i></span>
                </div>

            </div>

            <span className={styles.pedidoId}>Pedido {localStorage.getItem("idPedido")}</span>

            <div className={styles.itensPedido}>
                {itens.map((i, key) => <PedidoItemCaixa key={key} item={i} />)}
            </div>
        </div>
    )


}