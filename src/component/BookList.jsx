import { useEffect, useState } from "react";
import style from "./BookList.module.css";
import { BookCard } from "./BookCard";
import { client } from "../client";

export function BookList() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    async function takeDataBook() {
      const query = `*[_type == "book"]{_id, title, "image": image.asset->url, content}`;
      const result = await client.fetch(query);
      setBookData(result);
    }
    takeDataBook();
  }, []);

  console.log(bookData);
  return (
    <section className={style.bookDashboard} id="books">
      <h1>RELEASED BOOKS</h1>
      <div className={style.bookList}>
        {bookData.map((book) => (
          <BookCard
            key={book._id}
            id={book._id}
            title={book.title}
            image={book.image}
            content={book.content}
          />
        ))}
      </div>
    </section>
  );
}
