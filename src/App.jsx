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
  const [talks, setTalks] = useState([]);
  const [userTheme, setUserTheme] = useState([]);

  const app = useRef();
  const q = gsap.utils.selector(app);
  const t1 = useRef();

  // let iconItem = useRef(null);

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeSwitch = () => {
    gsap.from(q(".theme"), { rotation: "+=360", ease: "elastic" });
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setUserTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    setUserTheme("dark");
  };

  const onPinnedEnter = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".p"), {
        opacity: 0.4,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1.12,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        zIndex: 10000,
      });
  };

  const onPinnedLeave = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".p"), {
        opacity: 1,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
  };
  const onActivityEnter = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".a"), {
        opacity: 0.4,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1.12,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        zIndex: 10000,
      });
  };

  const onActivityLeave = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".a"), {
        opacity: 1,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
  };
  const onTalkEnter = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".t"), {
        opacity: 0.4,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1.12,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        zIndex: 10000,
      });
  };

  const onTalkLeave = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".t"), {
        opacity: 1,
        duration: 0.1,
      })
      .to(currentTarget, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
      });
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
        base("Talks")
          .select({ view: "Grid view" })
          .eachPage((records, fetchNextPage) => {
            setTalks(records);
            console.log("Talks", records);
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
      .timeline({ ease: "power3.out" })
      .fromTo(
        q(".item"),
        { y: 40, opacity: 0 },
        {
          y: -40,
          opacity: 1,
          stagger: 0.1,
        }
      )
      .fromTo(
        q(".project-half"),
        { y: 40, opacity: 0 },
        {
          y: -40,
          opacity: 1,
          stagger: 0.1,
        }
      )
      .fromTo(
        q(".darker"),
        { color: "#57606A" },
        {
          // color: "#24292F",
          delay: 1.2,
          color: "#000",
          repeat: 2,
          yoyo: true,
          label: "p",
          ease: "rough",
        }
      )
      .fromTo(
        q(".highlight"),
        { color: "#777778" },
        {
          delay: 1.2,
          color: "#fff",
          repeat: 2,
          yoyo: true,
          label: "p",
          duration: 0.5,
          ease: "rough",
        }
      );

    console.log("animate");
  }, [userTheme]);

  // useEffect(() => {

  // }, [userTheme]);

  return (
    <div ref={app} className="App dark:bg-dim min-h-screen">
      <div className="md:hidden h-12 w-6 fixed bottom-28 left-0 bg-slate-100 dark:bg-dim-secondary"></div>

      <div
        onClick={() => themeSwitch()}
        className="theme z-50 p-3 rounded-full fixed bottom-28 md:bottom-6 left-0 md:left-6 bg-slate-100 dark:bg-dim-secondary cursor-pointer"
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
              talks={talks}
              userTheme={userTheme}
              onPinnedEnter={onPinnedEnter}
              onPinnedLeave={onPinnedLeave}
              onActivityEnter={onActivityEnter}
              onActivityLeave={onActivityLeave}
              onTalkEnter={onTalkEnter}
              onTalkLeave={onTalkLeave}
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
