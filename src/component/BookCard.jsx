import style from "./BookCard.module.css";
import { Link } from "react-router-dom";

export function BookCard({ id, title, image, content }) {
  return (
    <Link className={style.bookCard} to={`/buku/${id}`}>
      <img src={image} alt={title} className={style.image} />
      <h3 className={style.title}>{title}</h3>
    </Link>
  );
}
