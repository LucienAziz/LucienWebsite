import styles from "./FilterNav.module.css";
import { GiConsoleController } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";

export function FilterNav() {
  return (
    <section className={styles.filterNav}>
      <a>
        <GiConsoleController size="15" />
        Games
      </a>
      <a>
        <MdLibraryBooks />
        Books
      </a>
      <a>
        <IoIosAlbums />
        Art
      </a>
    </section>
  );
}
