
import Home from './routes/home';
import './App.css';
import Airtable from "airtable"
import { useState, useEffect } from 'react'

const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
}).base(process.env.REACT_APP_AIRTABLE_BASE);

function App() {
  const [projects, setProjects] = useState([]);
  const [people, setPeople] = useState([])

  useEffect( () => {

    function fetchData() {
      try {
        base("Projects")
          .select({ view: "Grid view" })
          .eachPage(
            (records, fetchNextPage) => {
              setProjects(records);
              console.log("rce", records);
              fetchNextPage();
            });
      } catch (e) {
        console.log(e);
      }

      try {
        base("People")
          .select({ view: "Grid view" })
          .eachPage(
            (records, fetchNextPage) => {
              setPeople(records);
              console.log("People", records);
              fetchNextPage();
            });
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
