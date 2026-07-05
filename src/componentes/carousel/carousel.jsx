import { useState } from "react";
import { useRef } from "react";
import styles from "./carousel.module.css"
import { carros } from "./data";



export default function Carousel() {

    const [indice, setIndice] = useState(0);

    // Função para avançar o carrossel
    const proximo = () => {
        setIndice((atual) =>
            atual === carros.length - 1 ? 0 : atual + 1
        );
    };

    // Função para voltar o carrossel
    const anterior = () => {
        setIndice((atual) =>
            atual === 0 ? carros.length - 1 : atual - 1
        );
    };


    return (
        <div className={styles.container}>

            <button
                className={`${styles.carouselButton} ${styles.left}`}
                onClick={anterior}
            >
                ❮

            </button>
            
            <div className={styles.carouselItem}>
                <img
                    className={styles.carros}
                    src={carros[indice].imagem}
                    alt={`Imagem do ${carros[indice].nome}`}
                />

                <h3 className={styles.carouselTitle}>
                    {carros[indice].nome}
                </h3>

                <p className={styles.carouselText}>
                    {carros[indice].descricao}
                </p>
            </div>

            <button
                className={`${styles.carouselButton} ${styles.right}`}
                onClick={proximo}
            >
                ❯

            </button>

        </div>
    )


}