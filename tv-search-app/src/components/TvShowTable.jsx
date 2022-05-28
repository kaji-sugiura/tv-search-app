import React from "react";
import { TvShowCard } from "./TvShowCard";

export function TvShowTable(props) {
  if (!props.tvShows.length) return <p className="noResult">no results</p>;
  return (
    <>
      <p className="text-center">{`resultCounts: ${props.tvShows.length}`}</p>
      <div className="tvShows">
        {props.tvShows.map((tvShow) => (
          <TvShowCard
            key={tvShow.id}
            name={tvShow.name}
            score={tvShow.score}
            img={tvShow.img}
            schedule={tvShow.schedule}
            summary={tvShow.summary}
          />
        ))}
      </div>
    </>
  );
}
