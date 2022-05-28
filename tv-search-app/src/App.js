import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TvShowTable } from "./components/TvShowTable";

function App() {
  const [programName, setProgramName] = useState("");
  const onChangeProgramName = (e) => {
    setProgramName(e.target.value);
  };

  const [tvShows, setTvShows] = useState([]);
  const searchTvShows = async (e) => {
    e.preventDefault();
    if (programName) {
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${programName}`
      )
        .then((response) => response.json())
        .then((data) => data)
        .catch((e) => console.error(e));

      let results = res.map((res) => {
        return {
          id: res.show.id,
          name: res.show.name,
          img: res.show?.image?.medium,
          score: res.score.toFixed(2),
        };
      });

      setTvShows(results);
    }
  };

  return (
    <div className="container">
      <Header
        programName={programName}
        onChangeProgramName={onChangeProgramName}
        searchTvShows={searchTvShows}
      />
      <TvShowTable tvShows={tvShows} programName={programName} />
    </div>
  );
}

export default App;
