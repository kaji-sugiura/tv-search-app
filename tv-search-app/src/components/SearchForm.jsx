import React from "react";

export function SearchForm(props) {
  return (
    <form onSubmit={(e) => props.searchTvShows(e)}>
      <label htmlFor="search">番組を検索</label>
      <input
        type="text"
        placeholder="番組名を入力"
        id="search"
        value={props.programName}
        onChange={(e) => props.onChangeProgramName(e)}
      />
      <button>検索</button>
    </form>
  );
}
