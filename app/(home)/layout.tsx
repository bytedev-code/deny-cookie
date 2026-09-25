"use client"
import {ReactNode} from "react";
import styles from "./styles";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <main css={styles.root}>
            <h1>Deny Cookie</h1>

            <section>{children}</section>
        </main>
    );
}