import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import style from "./StoryPage.module.css";

export function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    async function dataTake() {
      const query = `*[_type == "book" && _id == "${id}"][0]`;
      const result = await client.fetch(query);
      setStory(result);
    }
    dataTake();
  }, [id]);

  if (!story) {
    return <h3 className={style.loading}>Loading... Please wait..</h3>;
  }

  return (
    <div className={style.container}>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    </div>
  );
}
