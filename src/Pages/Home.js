import React from "react";
import styles from "../Styles/ItensHome/Home.module.css"
import { SideBar } from "../Components/ItensHome/SideBar";

export default function Home() {
    return (
        <section className={styles.components}>
            <div className={styles.home}>
                <SideBar />

            </div>
        </section>
    );
}
