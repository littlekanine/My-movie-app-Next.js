import React from "react";
import styles from "./MediaCards.module.scss";
import Image from "next/image";
import Link from "next/link";

const MediaCards = ({mediaID}) => {
    return (
        <div className={styles.card}>
            <Link href={`/movies/${mediaID}`}>
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
            </Link>
        </div>
    );
};

export default MediaCards;
