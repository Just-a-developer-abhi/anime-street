import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Skeleton from "react-loading-skeleton";
import Pagination from "./Pagination";
import Loader from "./Loader";

const MainContent = (props) => {
  const [pageNumber, setpageNumber] = useState(1);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //   useEffect(() => {}, [props.animeList]);

  const handlePaginationOnClick = (page) => {
    props.setPage(page);
    setpageNumber(page);
  };

  const handleOnChange = (e) => {
    console.log("search in the main content..." + e.target.value);
    sessionStorage.setItem("search", e.target.value);
    props.setSearch(e.target.value);
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
        <form className="search-box">
          <input
            type="search"
            placeholder="search for any Anime"
            required
            // value={(e) => e.target.value}
            onChange={(e) => handleOnChange(e)}
          />
          <button
            style={{ color: "white", fontFamily: "fantasy" }}
            onClick={(e) => handleOnChange(e)}
          >
            search
          </button>
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
      {/* {props.isLoading ? (
        <>
          <Loader />
          <div className="anime-list">
            {props.animeList?.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))}
          </div>
        </>
      ) : (
        <div className="anime-list">
          {props.animeList?.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      )} */}
      <div className="anime-list">
        {props.animeList?.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} isLoading={props.isLoading} />
        ))}
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
