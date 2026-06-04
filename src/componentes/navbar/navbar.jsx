import styles from "./navbar.module.css";
// import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBarSocial}>
                <a href="www.linkedin.com/in/matheus-alves-c" target="_blank">Linkedin</a>
                <a href="https://github.com/Matheu55" target="_blank" >Github</a>
            </div>

            <div className={styles.navBarCars}>
                <a href="...">Mitsubishi Lancer Evolution X</a>
                <a href="...">Volkswagen Gol GTI 2.0</a>
            </div>
        </nav>
    );
}
