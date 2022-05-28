import React from "react";
import { SearchForm } from "./SearchForm";

export function Header(props) {
  return (
    <header className="header">
      <h1>TV SHOW</h1>
      <SearchForm
        programName={props.programName}
        onChangeProgramName={props.onChangeProgramName}
        searchTvShows={props.searchTvShows}
      />
    </header>
  );
}
