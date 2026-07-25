import styles from "./NewsBox.module.css";

export function NewsBox({ image, title, badge }) {
  return (
    <article className={styles.newsBox}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>
        <h2>{title}</h2>
      </div>
    </article>
  );
}
