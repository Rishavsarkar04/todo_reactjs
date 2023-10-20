import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducerfuc, { initial } from "./reducer";
import { useNavigate } from "react-router-dom";

const mycontext = createContext();

export default function Provider({ children }) {
  let navigate = useNavigate();

  const [todos, settodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const [button, setbutton] = useState(null);

  let [user, dispatch] = useReducer(reducerfuc, initial);

  let [error, seterror] = useState("");

  function addingtodo(obj) {
    settodos((todos) => [...todos, obj]);
  }

  function edittodo(id, text) {
    settodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : { ...todo }
      )
    );
    setbutton(null);
  }
  function deletetodo(id, e) {
    const ele = e.target.closest("li").querySelector("input");
    console.log(ele);
    ele.classList.add("deleted");
    ele.addEventListener("transitionend", () => {
      ele.classList.remove("deleted");
      settodos((todos) => todos.filter((todo) => todo.id !== id));
    });
  }

  function compltedtodo(e, id) {
    console.log(e.target);
    e.target.classList.add("complete");
    settodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, iscompleted: !todo.iscompleted }
          : { ...todo }
      )
    );
  }

  function login(username, password) {
    if (user.username === username && user.password === password) {
      dispatch({ type: "login" });
      navigate("/");
    } else {
      seterror("wrong user name or password");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    navigate("/login");
  }

  useEffect(() => {
    console.log("todo changed");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <mycontext.Provider
      value={{
        todos,
        addingtodo,
        compltedtodo,
        deletetodo,
        edittodo,
        button,
        setbutton,
        settodos,
        user,
        login,
        logout,
        error,
        seterror,
      }}
    >
      {children}
    </mycontext.Provider>
  );
}

export function useMycontext() {
  let context = useContext(mycontext);
  if (context === undefined) {
    throw new Error("using context outside the provider");
  }
  return context;
}
