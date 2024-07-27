import { Metadata } from "next";
import { Gilda_Display } from "next/font/google";
import Header from "./components/header/Header";
import "./globals.css";
import SmootScroll from "./components/scrollingComponents/SmootScroll";

const Gilda = Gilda_Display({
    weight: "400",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "BagirovNr Portfolio",
    description: "I am a frontend developer specializing in building dynamic and responsive web applications.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${Gilda.className} bg-black text-white`}>
                    <Header  />
                <SmootScroll>
                    {children}
                </SmootScroll>
            </body>
        </html>
    );
}
