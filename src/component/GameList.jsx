import style from "./GameList.module.css";
import { GameCard } from "./GameCard";
import { client } from "../client";
import { useEffect, useState } from "react";

export function GameList() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    async function dataTake() {
      const query = `*[_type == "gameList"]{_id, title, badgeTop, badgeBottom, link, "image": image.asset->url}`;
      const result = await client.fetch(query);
      setGameList(result);
    }
    dataTake();
  });

  return (
    <section className={style.gameDashboard} id="games">
      <h1>FEATURED GAMES</h1>
      <div className={style.gameList}>
        {gameList.map((game) => (
          <GameCard
            key={game._id}
            id={game._id}
            title={game.title}
            cover={game.image}
            badgeTop={game.badgeTop}
            badgeBottom={game.badgeBottom}
            link={game.link}
          />
        ))}
      </div>
      <span className={style.smallInfo}>← swipe →</span>
    </section>
  );
}
