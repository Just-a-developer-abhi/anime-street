import React from "react";
import Skeleton from "react-loading-skeleton";
import LoadingScreen from "./LoadingScreen";
import skeletonGif from "../assets/gifs/skeleton-screen.gif";

const AnimeCard = ({ anime, isLoading }) => {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          {isLoading ? (
            <img
              src={skeletonGif}
              style={{ backgroundColor: "black", opacity: 0.5 }}
            />
          ) : (
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            // <img src={skeletonGif} style={{ color: "white" }} />
          )}
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
};

export default AnimeCard;
