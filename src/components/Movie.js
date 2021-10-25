import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import MovieDescription from "./MovieDescription";
import ReactStars from "react-rating-stars-component";

const Movie = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Gladiator",
      image: "https://m.media-amazon.com/images/I/71sj8Yt20qL._AC_SY679_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=owK1qxDselE",
      description:
        "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de MarcAurèle, Commode, s'arroge brutalement...",
    },

    {
      id: 2,
      name: "Alexander",
      image:
        "https://i.pinimg.com/564x/47/d4/d6/47d4d62d0a030ccb63f0834b22d5a242.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=Bh6LKIdxqCU",
      description:
        "Né en 356 av. JC, sur fond d'intense agitation politique, Alexandre le Grand suivit l'enseignement d'Aristote avant d'être désigné pour prendre la suite de son père à la tête de son peuple, et de partir à la conquête du monde.",
    },

    {
      id: 3,
      name: "Avatar",
      image:
        "https://cdna.artstation.com/p/assets/images/images/031/645/214/large/shreyas-raut-avatar-2.jpg?1604210989&dl=1",
      rating: 3,
      trailer: "https://www.youtube.com/watch?v=6ziBFh3V1aM",
      description:
        "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des",
    },

    {
      id: 4,
      name: "Titanic",
      image:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_fr_original_film_art_1200x.jpg?v=1619127428",
      rating: 2,
      trailer: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      description:
        "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le « Titanic », appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. À son bord, un artiste pauvre et une grande bourgeoise tombent amoureux..",
    },

    {
      id: 5,
      name: "The Message",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWVkN2NmODAtMTMyMC00MTdkLThmMTktOWQ4NjI0Y2M5ZDFjXkEyXkFqcGdeQXVyMTU4MjUwMjI@._V1_FMjpg_UX1000_.jpg",
      rating: 1,
      trailer: "https://www.youtube.com/watch?v=gRo7rjAiAw8",
      description:
        "Histoire de la naissance de l'Islam depuis la révélation accordée à Mohamed en 610/611 ...",
    },

    {
      id: 6,
      name: "Joker",
      image: "https://m.media-amazon.com/images/I/71wbalyU7tL._AC_SY606_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      description:
        "Joker est centré sur l’origine de l’architecture emblématique et constitue une histoire originale et autonome que l’on n’a jamais vue auparavant sur grand écran. L’exploration de Todd Phillips dans Arthur Fleck (Joaquin Phoenix), un homme ignoré par la société, n’est pas seulement une étude de caractère sablonneuse, mais aussi un récit édifiant.",
    },

    {
      id: 7,
      name: "X-Men",
      image: "https://m.media-amazon.com/images/I/91rYVUCEopL._AC_SY679_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=VNxwlx6etXI",
      description:
        "1944, dans un camp de concentration. Séparé par la force de ses parents, le jeune Erik Magnus Lehnsherr se découvre d’étranges pouvoirs sous le coup de la colère : il peut contrôler les métaux. C’est un mutant. Soixante ans plus tard, l’existence des mutants est reconnue mais provoque toujours un vif émoi au sein de la population. Puissant télépathe, le professeur Charles Xavier dirige une école destinée à recueillir ces êtres différents, souvent rejetés par les humains, et accueille un nouveau venu solitaire au passé mystérieux : Logan, alias Wolverine. En compagnie de Cyclope, Tornade et Jean Grey, les deux hommes forment les X-Men et vont affronter les sombres mutants ralliés à la cause de Erik Lehnsherr / Magnéto, en guerre contre l’humanité.",
    },

    {
      id: 8,
      name: "Troy",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=znTLzRJimeY",
      description:
        "L'enlèvement d'Hélène, reine de Sparte, par Paris, prince de Troie, est une insulte que le roi Ménélas ne peut supporter. Agamemnon réunit les armées grecques pour récupérer Hélène. L'issue de la guerre de Troie dépendra d'un homme : Achille...",
    },

    {
      id: 9,
      name: "127 Hours",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTc2NjMzOTE3Ml5BMl5BanBnXkFtZTcwMDE0OTc5Mw@@._V1_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=OlhLOWTnVoQ",
      description:
        "Le 26 avril 2003, Aron Ralston, jeune homme de vingt‐sept ans, se met en route pour une randonnée dans les gorges de l’Utah. Il est seul et n’a prévenu personne de son excursion. Alpiniste expérimenté, il collectionne les plus beaux sommets de la région. Pourtant, au fin fond d’un canyon reculé, l’impensable survient : Au‐dessus de lui un rocher se détache et emprisonne son bras dans le mur de rocaille. Le voilà pris au piège, menacé de déshydratation et d’hypothermie, en proie à des hallucinations… Il parle à son ex petite amie, sa famille, et se demande si les deux filles qu’il a rencontrées dans le canyon juste avant son accident seront les dernières. Cinq jours plus tard, comprenant que les secours n’arriveront pas, il va devoir prendre la plus grave décision de son existence…",
    },

    {
      id: 10,
      name: "Pelé",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg2NzQwMzQyMF5BMl5BanBnXkFtZTgwNzkzODk2ODE@._V1_FMjpg_UX1000_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=KMyUnyxVB9Q",
      description: "Le rêve d'un enfant. L'espoir d'une nation. ...",
    },

    {
      id: 11,
      name: "I Am Ali",
      image: "https://m.media-amazon.com/images/I/81De3sWgEcL._AC_SY606_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=lFxQFxaX7CM",
      description:
        "Film I Am Ali. Une plongée inédite dans les archives personnelles de Mohammed Ali, accompagnée d'interviews et témoignages de son entourage proche, afin de raconter la vie de la légende de la boxe.",
    },

    {
      id: 12,
      name: "Diego Maradona",
      image: "https://m.media-amazon.com/images/I/71-ELN88o7L._SY445_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/watch?v=Pmm7r4ynyIQ",
      description:
        "Le 5 juillet 1984, Diego Maradona est engagé par le club SSC Napoli pour un montant inédit qui établit un nouveau record du monde : pendant sept ans, le “gamin en or” accomplit des miracles. Il faut dire que le footballeur le plus mythique de la planète trouve vite ses marques dans une ville où l’on dit que même le diable a besoin de gardes du corps… Si Maradona semble avoir la grâce sur le terrain, il a moins de chance dans sa vie personnelle. Et quand la magie s’est dissipée, il est presque devenu captif de la ville…",
    },
  ]);

  return (
    <Switch>
      <Route exact path="/movie/:id">
        <MovieDescription movies={movies} />
      </Route>
      <Route exact="/">
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
                id={movie.id}
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    style={{ width: "200px", height: "300px" }}
                    src={movie.image}
                  />
                </Link>
                <h3 style={{ marginTop: "25px", color: "white" }}>
                  {movie.name}
                </h3>
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
      </Route>
    </Switch>
  );
};

export default Movie;
