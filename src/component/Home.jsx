import style from "./Home.module.css";
import { Header } from "./Header";
import { GameList } from "./GameList";
import { BreakLine } from "./BreakLine";
import { BookList } from "./BookList";

export function Home() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <GameList />
        <BreakLine />
        <BookList />
        <BreakLine />
        <section id="contact">
          <article className={style.about} id="about">
            <h1>ABOUT</h1>
            <p>"Hey there, welcome to Lucien Artworks!</p>
            <p>
              Think of this space as my personal digital playground and vault,
              where I keep, polish, and share all the stuff I've been working
              on. As a solo creator, I wanted a dedicated spot to drop all my
              projects across different mediums.
            </p>
            <p>
              Around here, you'll find the video games I'm currently developing,
              the books and stories I've written, and a gallery full of my
              visual archives and sketches. Lucien Artwork is more than just a
              standard portfolio to me—it's a digital home where every line of
              code, plot twist, and brushstroke comes together. Take your time,
              look around, and I hope you enjoy exploring my work!"
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
