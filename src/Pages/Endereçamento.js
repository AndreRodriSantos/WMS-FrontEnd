import styles from "../Styles/TelaEnderecamento.module.css"
import prateleira from "../IMG/Prateleira.png"
import { useEffect, useState } from "react";
import api from "../Services/api";
import { ListaPedidos } from "../Components/InfoPedido/ListaPedidos";
import { PedidoItemCaixa } from "../Components/InfoPedido/PedidoItemCaixa";
import Edificio from "../Components/Edificio";

export default function Enderecamento() {

    const [itens, setItens] = useState([])
    const [edificios, setEdificios] = useState([1, 2, 3, 4])
    const [endereçamentosCheck, setEndereçamentosCheck] = useState([])

    async function getPedido(id) {
        return api.get(`api/pedido/${id}`).then(
            response => {
                console.log(response.data.itens);
                setItens(response.data.itens)
            }
        )
    }

    useEffect(() => {
        getPedido(localStorage.getItem('idPedido'))
    }, [])

    return (
        <div className={styles.container}>

            <header className={styles.header}>

                <button onClick={() => window.location.href = "VerificarPedidos"} className={styles.cancelarButton}>
                    Cancelar
                </button>

                <button className={styles.confirmarButton}>
                    Confirmar
                </button>

            </header>

            <div className={styles.body}>

                <div className={styles.corredor} id={"1"}>
                    {edificios.map((e, key) => <Edificio edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 1 <i className="fa-solid fa-right-long"></i></span>
                </div>

                <div className={styles.corredor} id={"2"}>
                    {edificios.map((e, key) => <Edificio edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 2 <i className="fa-solid fa-right-long"></i></span>
                </div>


                <div className={styles.corredor} id={"3"}>
                    {edificios.map((e, key) => <Edificio edifNum={e} key={key} edificio={"edificio" + e} />)}
                </div>

                <div className={styles.corredorSeparador}>
                    <span ><i className="fa-solid fa-left-long"></i> Corredor 3 <i className="fa-solid fa-right-long"></i></span>
                </div>

                <div className={styles.corredor} id={"4"}>
                    {edificios.map((e, key) => <Edificio edifNum={e} key={key} edificio={"edificio" + e} />)}
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