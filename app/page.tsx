"use client"
import CookieBanner from "@/components/CookieBanner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CookieBanner/>
      </main>
    </div>
  );
}
