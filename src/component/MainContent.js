import React, { useEffect } from "react";
import AnimeCard from "./AnimeCard";

const MainContent = (props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {}, [props.animeList]);
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
      <div className="anime-list">
        {props.animeList?.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
      <div className="pagination">
        {pages.map((page) => (
          <div>{page}</div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
