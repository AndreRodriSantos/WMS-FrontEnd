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
                chamarPopUp()
            }
            else {
                alert('aaaa')
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
            let cep = document.getElementById('cep')
            let cnpj = document.getElementById('cnpj')
            let homologado = document.getElementById('homologado')
            let localidade = document.getElementById('localidade')
            let logradouro = document.getElementById('logradouro')
            let uf = document.getElementById('uf')

            id.value = objeto.id
            nome.innerText = objeto.nome
            cep.innerText = objeto.cep
            cnpj.innerText = objeto.cnpj
            if (objeto.homologado == true) {
                homologado.innerText = 'SIM'
            } else {
                homologado.innerText = 'NÃO'
            }
            localidade.innerText = objeto.localidade
            logradouro.innerText = objeto.logradouro
            uf.innerText = objeto.uf

        }

        return (
            <a className={styles.linha} onClick={objeto == objeto.cnpj ? chamarPopUp : onClickId} >
                <tr className={styles.container}>
                    <td className={styles.titleList}>
                        <span className={styles.nome}>{Info1}</span>
                    </td>
                    <td className={styles.titleList}>{Info2}</td>
                    <td className={styles.titleList}>{Info3}</td>
                    {objeto.numPedido == undefined ? "" : (<td> <a className={styles.linha} href={"/VerificarPedidos"} onClick={setPedidoId}><i className="fa-solid fa-check"></i></a></td>)}
                </tr>
            </a>
        );

    }
}
