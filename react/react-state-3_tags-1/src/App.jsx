import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(tagToAdd) {
    setTags([...tags, tagToAdd]);
  }
  function handleDeleteTag(tagToDelete) {
    setTags(
      tags.filter((tag, index) => {
        return index !== tags.indexOf(tagToDelete) ? tag : null;
      })
    );
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
