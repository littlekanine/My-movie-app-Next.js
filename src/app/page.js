import "./globals.scss";
import styles from "./page.module.css"
import MediaCards from "@/components/media-cards/MediaCards";

export default function Home() {
    return <div className={styles.main}>
        <MediaCards />
    </div>;
}