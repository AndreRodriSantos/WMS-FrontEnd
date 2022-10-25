import React from "react";
import styles from '../../Styles/VerificarPedidos.module.css'
import Box from '../../IMG/CaixaPedido.png'
import QrCode from '../../IMG/QrCode.png'
import CodBarra from '../../IMG/CodBarra.png'

export class ListaPedidos extends React.Component {
    render() {

        const { produto, descricao, qnd, valor, fornecedor, volorTotal } = this.props;

        return (
            <>
                <div className={styles.box} onClick={chamarInfo}>
                    <img src={Box} className={styles.imgBox} />
                </div>
                <div className={styles.BasePoup} id="BasePoup">
                    <div className={styles.PopUpInfo} id="PopUpInfo">
                        <span className={styles.close} onClick={fechar}>
                            <i className="fa-regular fa-circle-xmark"></i>
                        </span>

                        <div className={styles.BaseInfo}>
                            <div className={styles.InfoLeft}>
                                <span className={styles.titleInfo}>
                                    Produto:<p className={styles.info}>{produto}</p>
                                </span>

                                <span className={styles.titleInfo}>
                                    Descrição:<p className={styles.info}>{descricao}</p>
                                </span>

                                <span className={styles.titleInfo}>
                                        Quantidade:<p className={styles.info}>{qnd}</p>
                                </span>
                            </div>

                            <div className={styles.InfoRight}>
                                <span className={styles.titleInfo}>
                                    Valor:<p className={styles.info}>{valor}</p>
                                </span>

                                <span className={styles.titleInfo}>
                                    Fornecedor:<p className={styles.info}>{fornecedor}</p>
                                </span>

                                <span className={styles.titleInfo}>
                                    ValorTotal:<p className={styles.info}>{volorTotal}</p>
                                </span>
                            </div>
                        </div>
                        <div className={styles.InfoBottom}>
                            <div className={styles.QrCode}>
                                <img src={QrCode} className={styles.QrCodeImg} />
                            </div>
                            <div className={styles.CodBarra}>
                                <img src={CodBarra} className={styles.CodBarraImg} />
                            </div>
                        </div>

                    </div>
                </div>
            </>

        );

        function chamarInfo() {
            const BasePoup = document.getElementById('BasePoup')
            const PopUpInfo = document.getElementById('PopUpInfo')

            BasePoup.style.display = 'flex'
            PopUpInfo.style.display = 'flex'
        }

        function fechar() {
            const BasePoup = document.getElementById('BasePoup')
            const PopUpInfo = document.getElementById('PopUpInfo')
            BasePoup.style.display = 'none'
            PopUpInfo.style.display = 'none'
        }
    }
}

