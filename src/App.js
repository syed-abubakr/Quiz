import "./App.css";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
  const [about, setAbout] = useState(false);
  const [privacyPolicy, setprivacyPolicy] = useState(false);

  function isTopicChosen(topic) {
    if (topic == -1) {
      return false;
    }
    return true;
  }

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
    setAbout(false);
  };

  function home() {
    setTopic(-1);
    setAbout(false);
    setprivacyPolicy(false);
  }

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
  if (user.email === "") {
    return <Signin Login={Login} error={error} />;
  } else {

  if (isTopicChosen(topic)) {
    console.log(startState);
    return (
      <>
        <Header />
        <div className="h-screen flex flex-col justify-between">
          <Quiz topic={topic} home={home} />
          <Footer
            className="flex flex-col min-h-screen"
            setprivacyPolicy={setprivacyPolicy}
          />
        </div>
      </>
    );
  } else if (about) {
    return (
      <div className="h-screen flex flex-col justify-between">
        <Header home={home}/>
        <div className="grid place-items-center h-screen">
          <p>This is the about section</p>
        </div>
        <Footer
          className="flex flex-col min-h-screen"
          setprivacyPolicy={setprivacyPolicy}
          setAbout={setAbout}
        />
        <Sidebar Logout={Logout} setAbout={setAbout} home={home} />
      </div>
    );
  } else if (privacyPolicy) {
    return (
      <>
        <Header home={home}/>
        <div className="h-screen flex flex-col justify-between">
          <div className="grid place-items-center h-screen">
            <div className="w-3/4 pt-2">
              <h1 className="text-lg">Privacy Policy:</h1>
              <p className="text-sm">
                When you access the website, you may provide certain personally
                identifiable information including but not limited to your name,
                email address, phone number, address, avatar image, credit card
                information when you make a purchase on the website.
              </p>
              <p className="text-sm">
                This information is collected when you register on the site,
                place an order, subscribe to a newsletter, contact us, use the
                search feature on the website, provide comments or any other
                feedback, fill out a form or use live chat or enter any other
                information on the website to communicate with us. From time to
                time, we may also collect information that you submit when you
                participate in any online surveys that we may post on our
                website.
              </p>
              <p>
                Your personal information is used to personalize your
                experience, improve the website to better serve you, provide
                customer service support, efficiently process your requests or
                transactions, tailor advertisements to you, elicit reviews of
                services or products, provide you offers, promotions and to
                follow up with you through correspondence (email, live chat, or
                phone). We may also use this information to provide you offers
                and promotions from our partners and/or our affiliates in
                exchange for a commission without additional cost to you.
              </p>

              <p>
                Additionally, like other websites, this website automatically
                collects certain information about you through Log Data and
                Google Analytics. Log Data is information about your computer’s
                Internet Protocol Address, which is your “IP” address, browser
                information, Internet Service Provider’s information, your
                operating system, and your browser type. Similarly, Google
                Analytics collects certain information about your location,
                browsing history, the pages you visit, equipment you used to
                access the website, traffic patterns, and other general patterns
                related to your use of the website.
              </p>
              <p>
                This information is used to analyze website statistics related
                to user behavior and interests, improve our performance and your
                use of the website and to further enhance our products and
                services offered to you.
              </p>
            </div>
          </div>
          <Footer
            className="flex flex-col min-h-screen"
            setprivacyPolicy={setprivacyPolicy}
            setAbout={setAbout}
          />
          <Sidebar Logout={Logout} setAbout={setAbout} home={home} />
        </div>
      </>
    );
  } else {
    //dashboard
    return (
      <div className="h-screen flex flex-col justify-between">
        <Header home={home}/>
        <div className="grid place-items-center mt-5">
          <h1 className="text-3xl mt-5">Welcome to your dashboard</h1>
          <p className="text-lg mb-2">Choose a category to start the Quiz</p>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
        <Footer
          className="flex flex-col min-h-screen"
          setprivacyPolicy={setprivacyPolicy}
          setAbout={setAbout}
        />
        <Sidebar Logout={Logout} setAbout={setAbout} />
      </div>
    );
  }
  }
}

export default App;
