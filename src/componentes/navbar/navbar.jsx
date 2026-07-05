import styles from "./navbar.module.css";
// import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <section className={styles.navBarSocial}>
                <div className={styles.navBarSocialLinks}>
                    <a href="https://www.linkedin.com/in/matheus-alves-c" target="_blank">Linkedin</a>
                    <a href="https://github.com/Matheu55" target="_blank" >Github</a>
                </div>
            </section>
            <section className={styles.navBarCars}>
                <div className={styles.navBarCarsLinks}>
                    <a href="...">Lancer Evolution</a>
                    <a href="...">Gol GTI</a>
                </div>
            </section>
        </nav>
    );
}
