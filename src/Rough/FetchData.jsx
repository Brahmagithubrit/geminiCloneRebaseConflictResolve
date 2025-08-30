import React, { useState, useEffect } from "react";
import axios from "axios";

export function FetchData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10; // todos per page

  async function getData() {
    // const res = await fetch(
    //   `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
    // );

    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`,
    );
    // const cleaned = await res.json();
    setData((prev) => [...prev, ...res.data]);
  }

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    function handleInfiniteScroll() {
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <div>
      {data.map((todo) => (
        <div
          key={todo.id}
          style={{ padding: "20px", borderBottom: "1px solid #ccc" }}
        >
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed.toString()}</p>
        </div>
      ))}
    </div>
  );
}
