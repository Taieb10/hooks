import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router";

function MovieDescription({ movies }) {
  const { id } = useParams();
  console.log(typeof +id);
  const [movieDescription, setMovieDescription] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieDescription.length !== 0) {
      setLoading(false);
    }
    setMovieDescription(
      movies.filter((movie) => {
        return movie.id == +id;
      })
    );
  }, [id, movieDescription]);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div>
          <center>
            <ReactPlayer url={movieDescription[0].trailer} />
            <h1 style={{ color: "white" }}>{movieDescription[0].name}</h1>
            <h2 style={{ color: "white" }}>
              {movieDescription[0].description}
            </h2>
          </center>
        </div>
      )}
    </div>
  );
}

export default MovieDescription;
