import { useEffect, useState } from "react";
import { client } from "../client";
import styles from "./Header.module.css";
import { FilterNav } from "./FIlterNav";
import { NewsBox } from "./NewsBox";
import { NewsItems } from "./NewsItems";
import { ShowcaseBox } from "./ShowcaseBox";

export function Header() {
  const [items, setItems] = useState([]);
  const [newsBox, setNewsBox] = useState([]);
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    async function dataTake() {
      const query = `*[_type == "newsItems"]{_id, title}`;
      const result = await client.fetch(query);
      setItems(result);
    }
    dataTake();
  }, []);

  useEffect(() => {
    async function dataTake() {
      const query = `*[_type == "newsBox"]{_id, title, badge, "image": image.asset->url}`;
      const result = await client.fetch(query);
      setNewsBox(result);
    }
    dataTake();
  }, []);

  useEffect(() => {
    async function dataTake() {
      const query = `*[_type == "newsShowcase"]{_id, title, "image": image.asset->url}`;
      const result = await client.fetch(query);
      setShowcase(result);
    }
    dataTake();
  }, []);

  console.log(newsBox);
  return (
    <header>
      <div className={styles.container}>
        <FilterNav />
        {newsBox.map((news) => (
          <NewsBox
            key={news._id}
            id={news._id}
            image={news.image}
            title={news.title}
            badge={news.badge}
          />
        ))}
        <div className={styles.newsItems}>
          {items.map((item) => (
            <NewsItems key={item._id} id={item._id} title={item.title} />
          ))}
        </div>
        <div className={styles.containerShowcase}>
          {showcase.map((show) => (
            <ShowcaseBox
              key={show._id}
              id={show._id}
              image={show.image}
              title={show.title}
            />
          ))}
        </div>
        <div className={styles.titleHeader}>
          <h2>Lucien Artworks</h2>
          <hr />
          <span>Shaping Light, Crafting Art</span>
        </div>
      </div>
      <hr className={styles.breakLine} />
    </header>
  );
}
