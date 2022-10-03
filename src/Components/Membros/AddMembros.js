/* import React, { useEffect, useState } from 'react'
import styles from '../../Styles/AddMembros.module.css'
import linhaPesquisa from './LinhaPesquisa'

export default class AddMembros extends React.Component {
    render() {

        function AbrirList() {
            const btnAddMembro = document.getElementById('btnAddMembro')
            const pesquisa = document.getElementById('pesquisa')
            const list = document.getElementById('listMembros')

            btnAddMembro.style.width = "350px"
            pesquisa.style.left = '0'
            list.style.left = "0"
        }

        const img = 'https://firebasestorage.googleapis.com/v0/b/systemwms-14aa0.appspot.com/o/b8e0abca-53ef-411c-ae4e-debcb2e937ab24416098.png?alt=media'

        const { nome } = this.props

        return (
            <div className={styles.AddMembros}>
                <div id='btnAddMembro' onClick={AbrirList} className={styles.baseAddMembros}>
                    <span className={styles.button}>
                        <i className="fa-regular fa-plus"></i>
                    </span>
                    <input id='pesquisa' className={styles.pesquisa} type="text" placeholder='Busque por uma Pessoa' />
                </div>
                <ul id="listMembros" className={styles.listPesquisa}>
                    <li className={styles.linhaPesqusa}>
                        <span className={styles.Membro}>
                            <div className={styles.imgMembro}>
                                <img src={img}></img>
                            </div>
                            <span className={styles.nameMembro}>{nome}</span>
                        </span>
                        <label className={styles.container}>
                            <input className={styles.input} type="checkbox" />
                            <span class={styles.checkmark}></span>
                        </label>
                    </li>
                </ul>
            </div>
        );
    }
} */