import React from "react";
import { BsSearch } from "react-icons/bs";

export function SearchForm(props) {
  return (
    <form onSubmit={(e) => props.searchTvShows(e)}>
      <input
        type="text"
        placeholder="tv show name"
        id="search"
        value={props.searchQuery}
        onChange={(e) => props.onChangeSearchQuery(e)}
      />
      <button>
        <BsSearch style={{ marginRight: "5px" }} />
        search
      </button>
    </form>
  );
}
