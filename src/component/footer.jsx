import style from "./footer.module.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer>
      <section className={style.contact}>
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>
            <a href="https://www.instagram.com/lucien.artworks?igsh=d2Y4cDNoM2d5amc1">
              <FaInstagramSquare /> Instagram
            </a>
          </li>
          <li>
            <a href="https://wa.me/6285122922515">
              <FaWhatsappSquare /> WhatsApp
            </a>
          </li>
          <li>
            <a href="mailto:azis12345u@gmail.com">
              <MdAttachEmail /> Email
            </a>
          </li>
        </ul>
      </section>
      <div className={style.copyRight}>
        <h5>All Right Reserved. Lucien Artworks. Powered By Abdulate</h5>
      </div>
    </footer>
  );
}
