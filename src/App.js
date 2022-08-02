import "./App.css";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { useState } from "react";
import Quiz from "./components/Quiz";

export let login = false;

function App() {
  const admin = {
    email: "admin@gmail.com",
    password: "1234",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [startState, setStartState] = useState(false);

  const Login = (details) => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password) {
      console.log("logged in");
      setUser({
        email: details.email,
        password: details.password,
      });
      console.log(user.email, " ", user.password);
    } else {
      alert("Incorrect details");
    }
  };

  const Logout = () => {
    console.log("Logout");
  };

  if (user.email === "") {
    return <Signin Login={Login} error={error} />;
  } else {
    if (startState) {
      console.log(startState);
      return (
        <>
          {/* <Header /> */}
          <Quiz />
        </>
      );
    } else {
      console.log("hello");
      return (
        <>
          {/* <Header /> */}
          <div className="grid place-items-center mt-5">
            <h1 className="text-3xl">Welcome to your dashboard</h1>
            <p>press Start to begin quiz</p>
            <button
              className="bg-slate-500 rounded-lg p-1 text-white w-[100px] mt-5 hover:bg-slate-600"
              onClick={() => {
                setStartState(true);
              }}
            >
              Start
            </button>
          </div>
        </>
      );
    }
  }
}

export default App;
