import { ReactDOM, useEffect, useState } from "react";
import "./assets/scss/main.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [searchedAnime, setSelectedAnime] = useState([]);
  const [has_next_page, setHasNextPage] = useState(false);

  const GetTopAnime = async () => {
    const getTopList = await fetch(
      `https://api.jikan.moe/v4/top/anime?limit=24`
    ).then((res) => res.json());
    // console.log("response  " + JSON.stringify(getTopList));
    setTopAnime(getTopList.data.slice(0, 5));
    setAnimeList(() => {
      // console.log(" anime List raw: " + JSON.stringify(getTopList));
      return getTopList.data;
    });
  };

  const searchAnime = async (animeName) => {
    const searchedAnime = await fetch(
      `https://api.jikan.moe/v4/top/anime?q=${animeName}limit=24&order_by=title&sort=asc`
    ).then((res) => res.json());
    setAnimeList(() => {
      console.log("response from: " + JSON.stringify(searchedAnime.data));
      return searchedAnime.data;
    });
  };

  const HandleSearch = (e) => {
    console.log(search + " is the search");
    searchAnime(search);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);
  // useEffect(() => {
  //   searchAnime(search);
  // }, [search]);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
