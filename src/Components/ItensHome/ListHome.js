import React from "react";
import styles from '../../Styles/ItensHome/ListHome.module.css'

export class ListHome extends React.Component {
    render() {

        const { objeto, Info1, Info2, Info3, id } = this.props;

        function onClickId() {

            if (objeto.numPedido) {
                localStorage.setItem('idPedido', id)
                window.location.href = "/VerificarPedidos"
            }
            else if (objeto.cnpj) {
                localStorage.setItem('idFornecedor', id)
                chamarPopUp()
            }
            else {
                localStorage.setItem('idProduto', id)
                chamarPopUp()
            }
        }

        function chamarPopUp() {
            const container = document.getElementById("container");
            const PopUpInfo = document.getElementById("PopUpInfo");

            container.style.zIndex = "20"
            PopUpInfo.style.display = 'flex'

            // Informações
            let id = document.getElementById('id')
            let nome = document.getElementById('nome')
            let info1 = document.getElementById('info1')
            let info2 = document.getElementById('info2')
            let info3 = document.getElementById('info3')
            let info4 = document.getElementById('info4')
            let info5 = document.getElementById('info5')
            let info6 = document.getElementById('info6')

            let info1Title = document.getElementById('info1Title')
            let info2Title = document.getElementById('info2Title')
            let info3Title = document.getElementById('info3Title')
            let info4Title = document.getElementById('info4Title')
            let info5Title = document.getElementById('info5Title')
            let info6Title = document.getElementById('info6Title')


            if (localStorage.getItem("idFornecedor") != undefined) {
                id.value = objeto.id
                nome.innerText = objeto.nome
                info1.innerText = objeto.cep
                info2.innerText = objeto.cnpj
                if (objeto.homologado == true) {
                    info3.innerText = 'SIM'
                } else {
                    info3.innerText = 'NÃO'
                }
                info4.innerText = objeto.localidade
                info5.innerText = objeto.logradouro
                info6.innerText = objeto.uf

                info1Title.innerText = "CEP:"
                info2Title.innerText = "CNPJ:"
                info3Title.innerText = "Homologado:"
                info4Title.innerText = "Localidade:"
                info5Title.innerText = "Logradouro:"
                info6Title.innerText = "UF:"

            } else if(localStorage.getItem("idProduto") != undefined) {
                id.value = objeto.codProduto
                nome.innerText = objeto.nome
                info1.innerText = objeto.sku
                info2.innerText = objeto.descricao
                if (objeto.importado == true) {
                    info3.innerText = 'SIM'
                } else {
                    info3.innerText = 'NÃO'
                }
                info4.innerText = objeto.pontoPedido
                info5.innerText = objeto.demanda
                info6.innerText = "R$ " + objeto.valorUnitario

                info1Title.innerText = "SKU:"
                info2Title.innerText = "Descrição:"
                info3Title.innerText = "Importado"
                info4Title.innerText = "Ponto de Pedido:"
                info5Title.innerText = "Demanda:"
                info6Title.innerText = "Valor:"
            }
        }

        return (
            <tr className={styles.container} onClick={objeto == objeto.cnpj ? chamarPopUp : onClickId}>
                <td className={styles.titleList}>
                    <span className={styles.nome}>{Info1}</span>
                </td>
                <td className={styles.titleList}>{Info2}</td>
                <td className={styles.titleList}>{Info3}</td>
            </tr>
        );

    }
}
