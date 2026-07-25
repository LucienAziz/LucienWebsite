import { GiConsoleController } from "react-icons/gi";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";

export function NewsItems({ title }) {
  return (
    <article>
      <hr style={{ border: "2px solid #1e2640ff" }} />
      <h4>{title}</h4>
    </article>
  );
}
