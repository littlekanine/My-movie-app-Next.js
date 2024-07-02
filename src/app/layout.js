import "./globals.scss";
import Header from "@/components/Header/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts";

export const metadata = {
    title: "MyMovieApp",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${montserrat.variable}`}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
