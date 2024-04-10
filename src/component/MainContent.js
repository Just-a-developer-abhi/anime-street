import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Skeleton from "react-loading-skeleton";

const MainContent = (props) => {
  const [pageNumber, setpageNumber] = useState(1);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, [props.animeList]);

  const handlePaginationOnClick = (page) => {
    props.setPage(page);
    setpageNumber(page);
  };

  const activesStyle = {
    backgroundColor: "#fdb107",
    color: "black",
  };

  const choosingStyle = (page) => {
    if (page == pageNumber) {
      return activesStyle;
    }
  };

  return (
    <main>
      <div className="main-head">
        <form onSubmit={props.HandleSearch} className="search-box">
          <input
            type="search"
            placeholder="search for any Anime"
            required
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="pagination">
        {pages.map((page) => (
          <div
            key={page}
            style={choosingStyle(page)}
            onClick={(e) => handlePaginationOnClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="anime-list">
        {props.animeList?.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        )) || <Skeleton />}
      </div>
      <div className="pagination">
        {pages.map((page) => (
          <div
            key={page}
            style={choosingStyle(page)}
            onClick={(e) => handlePaginationOnClick(page)}
          >
            {page}
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
