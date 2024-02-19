import { UserButton } from "@clerk/nextjs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <UserButton 
        afterSignOutUrl="/"
      />
    </div>
  );
}
