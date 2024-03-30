import { ReactDOM, useEffect, useState } from "react";
import './assets/scss/main.css';
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import MainContent from "./component/MainContent";


function App() {
  const [animeList, setAnimeList]= useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, seatSearch] = useState("");

  const GetTopAnime = async () => {
    const getTopList = await fetch(`https://api.jikan.moe/v4/top/anime`).then(res=>
      res.json()
      );
    console.log("response  "+ JSON.stringify(getTopList))
    setTopAnime(getTopList.data.slice(0,5));
  }

  useEffect(()=>{
    GetTopAnime();

  },[]);

  console.log("anime list : " + JSON.stringify(animeList));
  return (
    <div className="App">
    <Header/>
    <div className="content-wrap">
        <Sidebar topAnime={topAnime}/>
        <MainContent/>
    </div>
    </div>

  );
}

export default App;
