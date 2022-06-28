import { useState, useEffect, useRef } from "react";
import { Route, Switch, Link } from "react-router-dom";
import ScrollToTop from "./components/utilities/ScrollToTop";
import Home from "./routes/home";
import Projects from "./routes/Projects";
import Events from "./routes/Events";
import moon from "./images/icons/moon.svg";
import sun from "./images/icons/dark/sun.svg";
import menu from "./images/icons/menu.svg";
import menuDark from "./images/icons/dark/menuDark.svg";
import close from "./images/icons/close.svg";
import closeDark from "./images/icons/dark/closeDark.svg";
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

  const onNavEnter = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(currentTarget, {
        opacity: 1,
      })
      .to(currentTarget(".nav-line"), {
        width: 40,
      });
  };

  const onNavLeave = ({ currentTarget }) => {
    const t2 = useRef;
    t2.current = gsap.timeline({ ease: "power3.out" }).to(currentTarget, {
      opacity: 0.5,
    });
  };

  const showMobileNav = () => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(
        q(".show-mobile-nav"),
        {
          display: "none",
          duration: 0.1,
        },
        "one"
      )
      .to(q(".close-mobile-nav"), {
        display: "block",
        rotation: "+=90",
        duration: 0.5,
      })
      .to(
        q(".mobile-nav-container"),
        {
          y: 50,
          opacity: 1,
          display: "block",
        },
        "one"
      );
  };
  const hideMobileNav = () => {
    const t2 = useRef;
    t2.current = gsap
      .timeline({ ease: "power3.out" })
      .to(q(".mobile-nav-container"), {
        y: -20,
        opacity: 0,
        display: "none",
      })
      .to(
        q(".close-mobile-nav"),
        {
          display: "none",
          duration: 0.01,
        },
        "two"
      )
      .to(
        q(".show-mobile-nav"),
        {
          display: "block",
          duration: 0.1,
        },
        "two"
      );
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
      .timeline({ delay: 1, ease: "power3.out" })
      .fromTo(
        q(".item"),
        { y: 80, opacity: 0 },
        {
          y: 0,
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
          delay: 1,
          color: "#000",
          repeat: 2,
          yoyo: true,
          ease: "rough",
        },
        "one"
      )
      .fromTo(
        q(".highlight"),
        { color: "#777778" },
        {
          delay: 1,
          color: "#fff",
          repeat: 2,
          yoyo: true,
          duration: 0.5,
          ease: "rough",
        },
        "one"
      );
  }, [userTheme]);

  // useEffect(() => {

  // }, [userTheme]);

  return (
    <div ref={app} className="App dark:bg-dim min-h-screen">
      <div className="fixed w-full z-50 bg-white dark:bg-dim">
        <nav className="flex justify-between px-4 md:px-8 py-4 lg:hidden">
          <Link
            to="/"
            className="font-extrabold text-xl text-dark dark:text-imagination"
          >
            Kingslee.
          </Link>{" "}
          <div className="show-mobile-nav" onClick={showMobileNav}>
            {userTheme === "dark" ? (
              <img src={menuDark} alt="explore" />
            ) : (
              <img src={menu} alt="explore" />
            )}
          </div>
          <div className="close-mobile-nav hidden" onClick={hideMobileNav}>
            {userTheme === "dark" ? (
              <img src={closeDark} alt="explore" />
            ) : (
              <img src={close} alt="explore" />
            )}
          </div>
        </nav>
        <div className="mobile-nav-container h-screen w-screen lg:hidden hidden">
          <div className="mobile-nav flex flex-col justify-between tracking-widest text-dark dark:text-white w-60  mx-auto mt-16">
            <Link
              onClick={hideMobileNav}
              to="/"
              className=" flex items-center text-[16px] font-bold p-6"
            >
              00{" "}
              <div className="nav-line w-4 h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
              HOME
            </Link>

            <Link
              onClick={hideMobileNav}
              to="/projects"
              className=" flex items-center text-[16px] font-bold p-6"
            >
              01{" "}
              <div className="nav-line w-4 h-[1px] bg-dark dark:bg-white mx-4 "></div>{" "}
              PROJECTS
            </Link>

            <Link
              onClick={hideMobileNav}
              to="/events"
              className=" flex items-center text-[16px] font-bold p-6"
            >
              02 <div className="nav-line w-4 h-[1px] bg-dim-body mx-4"></div>{" "}
              EVENTS
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden z-50 h-12 w-6 fixed bottom-28 left-0 bg-slate-100 dark:bg-dim-secondary"></div>

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
      <ScrollToTop>
        <Switch>
          <Route
            path="/projects"
            render={(props) => (
              <Projects
                history={props.history}
                projects={projects}
                userTheme={userTheme}
                onPinnedEnter={onPinnedEnter}
                onPinnedLeave={onPinnedLeave}
                onActivityEnter={onActivityEnter}
                onActivityLeave={onActivityLeave}
                onNavEnter={onNavEnter}
                onNavLeave={onNavLeave}
                {...props}
              />
            )}
          />
          <Route
            path="/events"
            render={(props) => (
              <Events
                history={props.history}
                projects={projects}
                talks={talks}
                userTheme={userTheme}
                onActivityEnter={onActivityEnter}
                onActivityLeave={onActivityLeave}
                onTalkEnter={onTalkEnter}
                onTalkLeave={onTalkLeave}
                onNavEnter={onNavEnter}
                onNavLeave={onNavLeave}
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
      </ScrollToTop>
    </div>
  );
}

export default App;
