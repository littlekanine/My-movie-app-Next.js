import React from "react";
import styles from "./MediaCards.module.scss";
import Image from "next/image";

const MediaCards = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src="https://image.tmdb.org/t/p/w500/hYQs5RPHiWctoYqvI8baHiIqdd8.jpg"
                    alt="Image du film Creed III"
                    //permet que l'image prenne la totalité du bloc
                    fill
                />
            </div>
            <div className={styles.content}>
                <h2>Creed III</h2>
                <p>01/03/2023</p>
            </div>
        </div>
    );
};

export default MediaCards;
