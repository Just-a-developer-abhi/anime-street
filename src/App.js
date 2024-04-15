import { ReactDOM, useEffect, useState } from "react";
import "./assets/scss/main.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "./component/Loader";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  // const [searchedAnime, setSelectedAnime] = useState([]);

  const GetTopAnime = async () => {
    setLoading(true);
    console.log("search === " + search);
    const getTopList = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}&order_by=title&sort=asc&sfw`
    ).then((res) => res.json());
    console.log("response  " + JSON.stringify(getTopList));
    setTopAnime(getTopList.data?.slice(0, 5));
    setAnimeList(() => {
      setLoading(false);
      // console.log(" anime List raw: " + JSON.stringify(getTopList));
      return getTopList?.data;
    });
  };

  const searchAnime = async (animeName) => {
    const searchedAnime = await fetch(
      `https://api.jikan.moe/v4/anime?q=${animeName}&page=${page}&order_by=title&sort=asc&sfw`
    ).then((res) => res.json());
    setAnimeList(() => {
      setSearch("");
      console.log("response from: " + JSON.stringify(searchedAnime.data));
      return searchedAnime.data;
    });
  };

  const HandleSearch = async (anime) => {
    // const anime = sessionStorage.getItem("search")
    //   ? sessionStorage.getItem("search")
    //   : search;
    console.log(anime + " is the search");
    const animeName = anime.length > 0 ? search : "Naruto";
    console.log("anime name: " + animeName);
    searchAnime(animeName);
    setSearch("");
    // sessionStorage.removeItem("search");
  };

  const HandlePagination = (pageNumber) => {
    if (pageNumber) {
      GetTopAnime(pageNumber);
    }
  };

  useEffect(
    () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      const anime =
        sessionStorage.getItem("search") ?? sessionStorage.getItem("search");
      anime.length > 0 ? HandleSearch(anime) : GetTopAnime();
    },
    [page],
    [search]
  );

  // useEffect(() => {
  //   HandleSearch(search);
  // }, [search]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        {/* <Sidebar topAnime={topAnime} /> */}

        <MainContent
          // HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
          HandlePagination={HandlePagination}
          setPage={setPage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
