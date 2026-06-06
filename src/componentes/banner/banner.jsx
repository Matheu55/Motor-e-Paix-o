import styles from "./banner.module.css";

export default function Banner() {
    return(
        <>
            <div className={styles.banner}>
                <h1 className={styles.bannerTitulo}>Mitsubishi Lancer Evolution X</h1>
            </div>
            <div className={styles.bannerDiv}>
                <img className={styles.bannerImg} src="../src/assets/lancer-cinza.png" alt="Foto lancer Cinza" />
                <img className={styles.bannerImg} src="../src/assets/lancer-branco.png" alt="Foto lancer Branco" />
                <img className={styles.bannerImg} src="../src/assets/lancer-azul.png" alt="Foto lancer Azul" />
            </div>
        </>
    )
}