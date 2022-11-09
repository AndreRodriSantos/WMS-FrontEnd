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
            localStorage.setItem('idFornecedor', id) 
            window.location.href = "/CadastroFornecedores"
        }

        function excluir() {
            let id = document.getElementById('id').value
            localStorage.setItem('idFornecedor', id)

            api.delete(`api/fornecedor/${id}`).then(
                response => {
                    refresh("alteracao")
                },
                err => {
                    refresh("erroFornecedor")
                }
            )
        }

        return (
            <div id="container" className={styles.container}>
                <div id="PopUpInfo" className={styles.PopUp}>
                    <span className={styles.close} onClick={Fechar} ><i className="fa-regular fa-circle-xmark"></i></span>
                    <div className={styles.titleNome}>
                        <p id='nome' className={styles.infoName}></p>
                    </div>
                    <input type="hidden" id='id'></input>
                    <div className={styles.InfoLeft}>

                        <span className={styles.titleInfo}>
                            CEP:<p id='cep' className={styles.info}></p>
                        </span>

                        <span className={styles.titleInfo}>
                            CNPJ:<p id='cnpj' className={styles.info}></p>
                        </span>

                        <span className={styles.titleInfo}>
                            UF:<p id='uf' className={styles.info}></p>
                        </span>

                    </div>

                    <div className={styles.InfoRight}>

                        <span className={styles.titleInfo}>
                            Homologado:<p id='homologado' className={styles.info}></p>
                        </span>

                        <span className={styles.titleInfo}>
                            Logradouro:<p id='logradouro' className={styles.info}></p>
                        </span>

                        <span className={styles.titleInfo}>
                            Localidade:<p id='localidade' className={styles.info}></p>
                        </span>

                    </div>

                    <div id='btns' className={styles.btns}>
                        <button id='btnY' onClick={alterar} className={styles.btn} >
                            <span className={styles.rounded2}>
                                <span className={styles.text_green}>alterar</span>
                            </span>

                        </button>

                        <button onClick={excluir} id='btnX' className={styles.btn} >
                            <span id='btnAnimation' className={styles.rounded}>
                                <span className={styles.text_green}>excluir</span>
                            </span>

                        </button>
                    </div>
                </div>
            </div>
        );

        function Fechar() {
            const container = document.getElementById("container");
            const PopUpInfo = document.getElementById("PopUpInfo");
            localStorage.removeItem("idFornecedor")
            container.style.zIndex = "-1"
            PopUpInfo.style.display = 'none'
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
