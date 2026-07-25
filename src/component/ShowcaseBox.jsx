import styles from "./ShowcaseBox.module.css";

export function ShowcaseBox({ image, title }) {
  return (
    <article className={styles.showcaseBox}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h3>{title}</h3>
      </div>
    </article>
  );
}
