import "./App.css";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { useState } from "react";

export let login = false;


function App() {

  const admin = {
    email : "admin@gmail.com",
    password :"1234"
  }

  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == admin.email && details.password == admin.password){
      console.log("logged in");
      setUser({
        email: details.email,
        password: details.password
      });
      console.log(user.email, ' ', user.password);
    }
    else{
      console.log("Incorrect details");
      alert("Incorrect details");
    }
  }

  const Logout = () =>{
    console.log("Logout");
  }

  if (user.email==="") {
    return (
      <Signin Login={Login} error = {error}/>
    );
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


export default App;
