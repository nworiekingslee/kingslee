import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Home from "./routes/home";
import Projects from "./routes/Projects";
import moon from "./images/icons/moon.svg";
import sun from "./images/icons/dark/sun.svg";
import { Route, Switch } from "react-router-dom";
import Airtable from "airtable";
import "./App.css";

import { gsap } from "gsap";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [people, setPeople] = useState([]);
  const [userTheme, setUserTheme] = useState([]);

  const app = useRef();
  const q = gsap.utils.selector(app);
  const t1 = useRef();

  // let iconItem = useRef(null);

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeSwitch = () => {
    console.log("tap");
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setUserTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    setUserTheme("dark");
  };

  useEffect(() => {
    function fetchData() {
      try {
        base("Projects")
          .select({ view: "Grid view" })
          .eachPage((records, fetchNextPage) => {
            setProjects(records);
            // console.log("rce", records);
            fetchNextPage();
          });
      } catch (e) {
        console.log(e);
      }

      try {
        base("People")
          .select({ view: "Grid view" })
          .eachPage((records, fetchNextPage) => {
            setPeople(records);
            // console.log("People", records);
            fetchNextPage();
          });
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  useState(() => {
    if (systemTheme) {
      document.documentElement.classList.add("dark");
      setUserTheme("dark");
    }
  }, [systemTheme]);

  useEffect(() => {
    t1.current = gsap
      .timeline({ delay: 1, ease: "power2.out" })
      .fromTo(
        q(".item"),
        { y: 40, opacity: 0 },
        {
          y: -40,
          opacity: 1,
          stagger: 0.1,
        }
      )
      .to(q(".darker"), {
        // color: "#24292F",
        color: "#000",
        repeat: 2,
        yoyo: true,
        label: "p",
      })
      .to(q(".highlight"), {
        color: "#fff",
        repeat: 2,
        yoyo: true,
        label: "p",
        duration: 0.5,
      });

    console.log("animate");
  }, [userTheme]);

  return (
    <div ref={app} className="App dark:bg-dim h-full">
      <div className="md:hidden h-12 w-6 fixed bottom-28 left-0 bg-slate-100 dark:bg-dim-secondary"></div>

      <div
        onClick={() => themeSwitch()}
        className="p-3 rounded-full fixed bottom-28 md:bottom-6 left-0 md:left-6 bg-slate-100 dark:bg-dim-secondary cursor-pointer"
      >
        {userTheme === "dark" ? (
          <img src={sun} alt="lightmode" />
        ) : (
          <img src={moon} alt="darkmode" />
        )}
      </div>
      <Switch>
        <Route
          path="/projects"
          render={(props) => (
            <Projects
              history={props.history}
              projects={projects}
              people={people}
              userTheme={userTheme}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Home history={props.history} userTheme={userTheme} {...props} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
