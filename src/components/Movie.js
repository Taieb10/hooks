import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Movie = () => {
  const [movies, setMovies] = useState([
    {
      id: "1",
      name: "Gladiator",
      image: "https://miro.medium.com/max/326/0*ZRPiSyUanGutCLeN.jpg",
      rating: 4,
    },

    {
      id: "2",
      name: "Matrix",
      image: "https://images2.vudu.com/poster2/9986-338",
      rating: 5,
    },

    {
      id: "3",
      name: "Avatar",
      image:
        "https://resizing.flixster.com/kACYoBcDXPDb-kl4iTX4kQPUcaM=/206x305/v2/https://flxt.tmsimg.com/assets/p3542039_p_v8_am.jpg",
      rating: 3,
    },

    {
      id: "4",
      name: "Predator",
      image: "https://m.media-amazon.com/images/I/71ogf+QkGyL._AC_SY606_.jpg",
      rating: 2,
    },

    {
      id: "5",
      name: "Bloodsport",
      image: "https://m.media-amazon.com/images/I/51Iria5tHwL._AC_.jpg",
      rating: 1,
    },

    {
      id: "6",
      name: "Joker",
      image: "https://m.media-amazon.com/images/I/71wbalyU7tL._AC_SY606_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "Django",
      image: "https://m.media-amazon.com/images/I/51dNfU53lNL._AC_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "Troy",
      image: "https://m.media-amazon.com/images/I/51kkg8GGrTL._AC_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "Dracula",
      image: "https://m.media-amazon.com/images/I/61jDMkEd-8L._AC_SY679_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "Pelé",
      image: "https://m.media-amazon.com/images/I/91d-RqhOzRL._SY445_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "I Am Ali",
      image: "https://m.media-amazon.com/images/I/81De3sWgEcL._AC_SY606_.jpg",
      rating: 5,
    },

    {
      id: "6",
      name: "Diego Maradona",
      image: "https://m.media-amazon.com/images/I/71-ELN88o7L._SY445_.jpg",
      rating: 5,
    },
  ]);

  return (
    <div className="movie">
      {movies.map((movie) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <img
              style={{ width: "200px", height: "300px" }}
              src={movie.image}
            />
            <h3 style={{ marginTop: "25px", color: "white" }}>{movie.name}</h3>
            <ReactStars
              count={5}
              edit={false}
              value={movie.rating}
              size={24}
              activeColor="#ffd700"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
