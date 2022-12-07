import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { singOut } = useContext(AuthContext);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={"/"}>
          <img src="/logo.svg" width={190} height={60} />
        </Link>

        <nav className={styles.menuNav}>
          <Link href={"/categoria"}>
            <a>Categoria</a>
          </Link>

          <Link href={"/produto"}>
            <a>Cardapio</a>
          </Link>

          <button onClick={singOut}>
            <FiLogOut color="#fff" size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
