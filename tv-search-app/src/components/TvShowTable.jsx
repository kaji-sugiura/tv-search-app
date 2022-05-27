import React from "react";
import { TvShowCard } from "./TvShowCard";

export function TvShowTable(props) {
  if (props.tvShows.length === 0)
    return <div className="noResult">検索結果がありません</div>;

  return (
    <div className="tvShows">
      {props.tvShows.map((tvShow) => (
        <TvShowCard
          key={tvShow.id}
          name={tvShow.name}
          score={tvShow.score}
          img={tvShow.img}
        />
      ))}
    </div>
  );
}
