import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

let login = false;

function App() {
  localStorage.setItem("email", "1@gmail.com");
  localStorage.setItem("pass", "pass");
  if (!login) {
    return <Login />;
  } else {
    return (
      <>
        <Header />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>Hello</p>
      </>
    );
  }
}

function unlock(){
  // if()
  login=true;
}

export default App;
