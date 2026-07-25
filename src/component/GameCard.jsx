import style from "./GameCard.module.css";

export function GameCard({ title, cover, link, badgeTop, badgeBottom }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={style.gameCard}
    >
      <img
        src={cover}
        alt={title}
        className={`${style.cover} ${style.noSelect}`}
      />
      {badgeTop && <span className={style.badgeTop}>{badgeTop}</span>}
      {badgeBottom && <span className={style.badgeBottom}>{badgeBottom}</span>}
    </a>
  );
}
