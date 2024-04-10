import { ReactDOM, useEffect, useState } from "react";
import "./assets/scss/main.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  // const [searchedAnime, setSelectedAnime] = useState([]);

  const GetTopAnime = async () => {
    const getTopList = await fetch(
      `https://api.jikan.moe/v4/top/anime?q=${search}&page=${page}`
    ).then((res) => res.json());
    console.log("response  " + JSON.stringify(getTopList));
    setTopAnime(getTopList.data?.slice(0, 5));
    setAnimeList(() => {
      // console.log(" anime List raw: " + JSON.stringify(getTopList));
      return getTopList?.data;
    });
  };

  // const searchAnime = async (animeName) => {
  //   const searchedAnime = await fetch(
  //     `https://api.jikan.moe/v4/top/anime?q=${animeName}limit=24&order_by=title&sort=asc`
  //   ).then((res) => res.json());
  //   setAnimeList(() => {
  //     console.log("response from: " + JSON.stringify(searchedAnime.data));
  //     return searchedAnime.data;
  //   });
  // };

  const HandleSearch = () => {
    console.log(search + " is the search");
    GetTopAnime();
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
      GetTopAnime();
    },
    [page],
    [search]
  );
  // useEffect(() => {
  //   searchAnime(search);
  // }, [search]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        {/* <Sidebar topAnime={topAnime} /> */}
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
          HandlePagination={HandlePagination}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default App;
