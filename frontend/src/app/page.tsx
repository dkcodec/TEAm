import Chat from "@/components/chat/Chat";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Chat />
    </main>
  );
}
