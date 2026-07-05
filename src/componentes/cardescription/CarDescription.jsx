import styles from "./carDescription.module.css";

export default function CarDescription() {

    return (
        <section className={styles.carDescription}>
            <p className={styles.carDescriptionText}>
                O Lancer Evolution, ou Lancer Evo, é um sedan de alto desempenho produzido pela Mitsubishi Motors de 1992 a 2015. Baseado no Mitsubishi Lancer, o Lancer Evo foi lançado em dez versões, todas com motor turbo de 2 litros e tração nas quatro rodas. No Japão, a potência era limitada por leis locais, mas em mercados como o Reino Unido, o Lancer Evo podia atingir até 450 cavalos de potência.
            </p>
            <br />
            <p className={styles.carDescriptionText}>
                Ao longo de sua produção, o Lancer Evo foi lançado em dez versões distintas. Cada uma dessas versões era equipada com um motor turbo de 2 litros e tração nas quatro rodas, uma combinação que proporcionava um desempenho excepcional. As versões eram identificadas por números romanos, uma característica única que, no entanto, não indicava necessariamente uma nova geração.
            </p>
            <br />
            <p className={styles.carDescriptionText}>
                Além de seu desempenho nas ruas, o Lancer Evo fez história no automobilismo, vencendo o Campeonato Mundial de Rally (WRC) quatro vezes consecutivas (1996-1999) e dominando o Campeonato Mundial de Carros de Produção (P-WRC) dez vezes. Embora sua produção tenha terminado em 2015, o Lancer Evo continua a ser um dos sedans de alto desempenho mais respeitados e admirados do mundo.
            </p>
            <br />
            <p className={styles.carDescriptionText}>
                Originalmente destinado ao mercado japonês, o Lancer Evo começou a ser vendido no Reino Unido e em outros mercados europeus a partir de 1998, e nos Estados Unidos em 2003.
            </p>

        </section>
    )


}