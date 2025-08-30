import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useContext,
} from "react";
import "./Todo.css";
import MyContext from "./MyContext";
import { useFilter } from "./useFilter";



// useCallback memorize the function -> it dont let componets are rerender if nothing change in dependecies 

//useMemo memorise the values -> make complexity calculation process lesser if  not change 

export default function Todo() {
  
  const [task, setTask] = useState(() => {
    try {
      let data = JSON.parse(localStorage.getItem("task"));
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.log(e);
    }
    return [];
  });
  const myRef = useRef();
  const filteredTask = useFilter({task})

  const { dark, setDark } = useContext(MyContext);
  const [val, setVal] = useState("");
  function handleCheck(ind) {
    let newTask = [...task];
    newTask[ind].status = !newTask[ind].status;
    setTask(newTask);
  }

  function add() {
    let newTask = {
      name: val,
      status: false,
    };
    setTask([...task, newTask]);
    setVal("");
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  useEffect(() => {
    // myRef.current.focus();
    // when enable this it auto change after each auto reload  so make it uncomment when all things get done
  }, []);

  return (
    <>
      <Heading />
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        {!dark ? "dark" : "light"}
      </button>
      <div className={`root ${dark ? "dark" : "light"}`}>
        <div className="container">
          <input
            ref={myRef}
            onKeyDown={(e) => {
              if (e.key === "Enter") add();
            }}
            placeholder="Enter Task"
            onChange={(e) => setVal(e.target.value)}
          />
          <button onClick={() => add()}>add</button>
        </div>
        <div style={{display : "flex" , flexDirection : "row"}}>
          <ul>
            {task.map((val, ind) => (
              <li
                key={ind}
                style={{ textDecoration: val.status ? "line-through" : "none" }}
              >
                {val.name}
                <input
                  type="checkbox"
                  checked={val.status}
                  onChange={() => handleCheck(ind)}
                />
              </li>
            ))}
          </ul>
          <ul>
            Completed Task shown here 
            {filteredTask.map((val, ind) => (
              <li
                key={ind}
                style={{ textDecoration: val.status ? "line-through" : "none" }}
              >
                {val.name}
                <input
                  type="checkbox"
                  checked={val.status}
                  onChange={() => handleCheck(ind)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

function Heading() {
  const { dark, setDark } = useContext(MyContext);

  return (
    <>
      <p
        style={{
          textAlign: "center",
          backgroundColor: dark ? "black" : "gray",
          color: "White",
        }}
      >
        {" "}
        Todo App
      </p>
    </>
  );
}
