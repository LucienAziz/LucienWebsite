import styles from "./Navbar.module.css";
import LucienLogo from "../assets/LucienLogo.svg";
import AbdulateLogo from "../assets/AbdulateLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToGames = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const target = document.getElementById("games");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");

      setTimeout(() => {
        const target = document.getElementById("games");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const target = document.getElementById("about");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("about");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  const scrollToContact = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const target = document.getElementById("contact");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("contact");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
  const scrollToBooks = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const target = document.getElementById("books");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById("books");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className={styles.containerNavbar}>
      {/* navbar1 */}
      <section className={styles.navbar1}>
        <ul>
          <li>
            <img
              src={LucienLogo}
              alt="Lucien"
              className={`${styles.lucienLogo} ${styles.noSelect}`}
              draggable="false"
            />
          </li>
          <li>
            <a href="#" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={scrollToGames}>
              Artworks
            </a>
          </li>
          <li>
            <a href="#" onClick={scrollToContact}>
              Contact
            </a>
          </li>
        </ul>
      </section>
      {/* navbar2 */}
      <section className={styles.navbar2}>
        <ul>
          <li>
            <FaBook size="30" color="#fff" onClick={() => setIsOpen(!isOpen)} />
          </li>
          <hr className={styles.vertical} />
          <li>
            <img
              className={styles.noSelect}
              src={AbdulateLogo}
              alt="Abdulate"
              width="50"
            />
          </li>
        </ul>
      </section>
      {/* dropdown */}
      {isOpen && (
        <section className={styles.dropdownMenu}>
          <ul>
            <li>
              <a href="#" onClick={scrollToAbout}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToGames}>
                Artworks
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToContact}>
                Contact
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToBooks}>
                Books
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToGames}>
                Games
              </a>
            </li>
            <li>
              <a href="#">Gallery (TBA)</a>
            </li>
            <li align="center">
              <p>Powered by</p>
              <img
                src={AbdulateLogo}
                className={styles.noSelect}
                alt="Abdulate"
                width="50"
                align="center"
              />
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
}
