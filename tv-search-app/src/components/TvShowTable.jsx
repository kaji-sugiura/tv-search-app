import React from "react";
import { TvShowCard } from "./TvShowCard";

export function TvShowTable(props) {
  if (!props.tvShows.length)
    return <p className="noResult">検索結果がありません</p>;
  return (
    <>
      <p className="text-center">{`検索結果：${props.tvShows.length}件`}</p>
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
    </>
  );
}
