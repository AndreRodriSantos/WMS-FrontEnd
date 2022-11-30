import React from "react";
import styles from '../../Styles/ItensHome/PopUpInfo.module.css'
import logo from "../../IMG/Logo WMS.png"
import api from "../../Services/api";
import { erro, sucesso } from "../Avisos/Alert";
import { refresh } from "../../Services/gets";

export class PopUpInfo extends React.Component {
    render() { 

        function alterar() {
            let id = document.getElementById('id').value

            if (localStorage.getItem("idFornecedor")) {
                window.location.href = "/CadastroFornecedores"
            } else if (localStorage.getItem("idProduto")) {
                window.location.href = "/CadastroProduto"
            }
        }

        function excluir() {
            let id = document.getElementById('id').value

            if (localStorage.getItem("idFornecedor")) {
                api.delete(`api/fornecedor/${id}`).then(
                    response => {
                        refresh("delete")
                    },
                    err => {
                        refresh("erroFornecedor")
                    }
                )
            } else if (localStorage.getItem("idProduto")) {
                api.delete(`api/produto/${id}`).then(
                    response => {
                        refresh("delete")
                    },
                    err => {
                        refresh("erroProduto")
                    }
                )
            }
        }

        return (
            <div id="container" className={styles.container}>
                <div id="PopUpInfo" className={styles.PopUp}>

                    <header className={styles.headerInfo}>
                        <div className={styles.titleNome}>
                            <p id='nome' className={styles.infoName}></p>
                        </div>
                        <span className={styles.close} onClick={Fechar} ><i className="fa-regular fa-circle-xmark"></i></span>
                    </header>

                    <div className={styles.dados}>

                        <input type="hidden" id='id'></input>

                        <div className={styles.InfoLeft}>

                            <span className={styles.titleInfo}>
                                <p id="info1Title"></p><p id='info1' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                <p id="info2Title"></p><p id='info2' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                <p id="info3Title"></p><p id='info3' className={styles.info}></p>
                            </span>

                        </div>

                        <div className={styles.InfoRight}>

                            <span className={styles.titleInfo}>
                                <p id="info4Title"></p><p id='info4' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                <p id="info5Title"></p><p id='info5' className={styles.info}></p>
                            </span>

                            <span className={styles.titleInfo}>
                                <p id="info6Title"></p><p id='info6' className={styles.info}></p>
                            </span>

                        </div>

                    </div>

                    <div id='btns' className={styles.btns}>
                        <button id='btnY' onClick={alterar} className={styles.alterar} >
                            Alterar
                        </button>

                        <button onClick={excluir} id='btnX' className={styles.excluir} >
                            Excluir
                        </button>
                    </div>
                </div>
            </div>
        );

        function Fechar() {
            const container = document.getElementById("container");
            const PopUpInfo = document.getElementById("PopUpInfo");
            const popUpInformacoes = document.getElementById("popUpInformacoes");
            localStorage.removeItem("idFornecedor")
            localStorage.removeItem("idProduto")
            container.style.zIndex = "-1"
            PopUpInfo.style.display = 'none'
            PopUpInfo.classList.remove(styles.alertOn)
            popUpInformacoes.style.zIndex = '-1'
            
        }

        /*   function btnOn(){
              const btnAnimation = document.getElementById("btnAnimation");
              btnAnimation.style.width = '100%'    
          }
  
          function btnOff(){
              const btnAnimation = document.getElementById("btnAnimation");
              btnAnimation.style.width = '50px'    
          } */

    }

}
