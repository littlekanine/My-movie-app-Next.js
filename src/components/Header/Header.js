import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon, faFontAwesome } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">MyMovieApp</Link>
            </div>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><Link href="/series">Séries</Link></li>
                        <li><Link href="/movies">Films</Link></li>
                    </ul>
                </nav>
                <input type="text" placeholder="Rechercher un titre ..."></input>
                <div>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </header>
    );
};

export default Header;
