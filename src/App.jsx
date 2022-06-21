import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./routes/home";
import Projects from "./routes/Projects";
import "./App.css";
import Airtable from "airtable";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [people, setPeople] = useState([]);
  const [userTheme, setUserTheme] = useState([]);

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

  return (
    <div className="App dark:bg-dim">
      <Switch>
        <Route
          path="/projects"
          render={(props) => (
            <Projects
              history={props.history}
              projects={projects}
              people={people}
              userTheme={userTheme}
              systemTheme={systemTheme}
              onThemeSwitch={themeSwitch}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              history={props.history}
              userTheme={userTheme}
              systemTheme={systemTheme}
              onThemeSwitch={themeSwitch}
              {...props}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
