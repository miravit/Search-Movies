import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieService";

(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
  "submit",
  async (e: Event) => {
    //I min klickhändelse när jag submittar så anropas en asyncfunktion. e är ett inbyggt objekt som har alla
    e.preventDefault();

    let searchText: string = (
      document.getElementById("searchText") as HTMLInputElement
    ).value;

    let movies: IMovie[] = await searchMovies(searchText);
    createHTML(movies);
  }
);

const createHTML = (movies: IMovie[]) => {
  let container = document.getElementById("searchResult") as HTMLDivElement;
  container.innerHTML = " ";

  for (let i = 0; i < movies.length; i++) {
    let title = document.createElement("h3");
    let img = document.createElement("img");

    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
};
