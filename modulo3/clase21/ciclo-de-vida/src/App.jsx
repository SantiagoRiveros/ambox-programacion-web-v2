import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ListaPublicaciones from "./components/ListaPublicaciones";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ListaPublicaciones publicaciones={posts} />
    </div>
  );
}

export default App;
