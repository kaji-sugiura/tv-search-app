import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TvShowTable } from "./components/TvShowTable";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const [tvShows, setTvShows] = useState([]);
  const searchTvShows = async (e) => {
    e.preventDefault();
    try {
      if (searchQuery) {
        const res = await fetch(
          `https://api.tvmaze.com/search/shows?q=${searchQuery}`
        );
        const data = await res.json();
        let results = data.map((data) => {
          return {
            id: data.show.id,
            name: data.show.name,
            img: data.show?.image?.medium,
            score: data.score.toFixed(2),
            summary: data.show.summary,
            schedule: data.show.schedule,
          };
        });
        setTvShows(results);
      } else {
        setTvShows([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <Header
        searchQuery={searchQuery}
        onChangeSearchQuery={onChangeSearchQuery}
        searchTvShows={searchTvShows}
      />
      <TvShowTable tvShows={tvShows} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
