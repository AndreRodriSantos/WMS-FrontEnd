import { InputPesquisa } from "../Components/Inputs/InputPesquisa"
import styles from "../Styles/Picking.module.css"

export default function Picking() {
    return (
        <div className={styles.container}>
            <div className={styles.pickingContainer}>
                <header className={styles.header}>
                    <span>
                        <i className="fa-solid fa-users"></i> <span>Picking</span>
                    </span>
                    <InputPesquisa placeholder={"Pesquise por Produto"} />
                </header>

                <table className={styles.tabela}>
                    <thead className={styles.tabelaHead}>
                        <tr>
                            <td>Foto</td>
                            <td>Nome</td>
                            <td>SKU</td>
                            <td>Qtd Disponivel</td>
                            <td>Valor</td>
                            <td>Qtd Saida</td>
                            <td>Check</td>
                        </tr>
                    </thead>
                    <tbody className={styles.tabelaBody}></tbody>
                </table>
            </div>
        </div>
    )
}