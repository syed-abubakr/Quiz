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

  const categories = ["Geography", "History", "General Knowledge"];

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [startState, setStartState] = useState(false);
  const [topic, setTopic] = useState(-1);

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
    setUser({
      email: "",
      password: "",
    });
  };

  const listItems = categories.map((myList, i) => (
    <div className="grid place-items-center mt-1">
      <button
        className="bg-slate-500 hover:bg-slate-600 mt-1 rounded-lg w-1/2 text-xl p-3 text-white hover:bg-slate-600"
        onClick={() => {
          setTopic(i);
        }}
      >
        <li>{myList}</li>
      </button>
    </div>
  ));

  // if (user.email === "") {
  //   return <Signin Login={Login} error={error} />;
  // } else {
  if (topic != -1) {
    console.log(startState);
    return (
      <>
        {/* <Header /> */}
        <Quiz topic={topic} setTopic={setTopic} />
      </>
    );
  } else {
    console.log("hello");
    return (
      <>
        <Header Logout={Logout} />
        <div className="grid place-items-center mt-5">
          <h1 className="text-3xl mt-5">Welcome to your dashboard</h1>
          <p className="text-lg mb-2">Choose a category to start the Quiz</p>
        </div>
        <div>
          <ul>
            {listItems}
          </ul>
        </div>
      </>
    );
  }
}
// }

export default App;
