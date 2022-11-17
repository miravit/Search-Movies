import { IMovie } from "./models/IMovie";
import { movieSearch } from "./services/movieService";

(document.getElementById("searchText") as HTMLFormElement).addEventListener(
  "input",
  async (e: Event) => {
    //I min klickhändelse när jag submittar så anropas en asyncfunktion. e är ett inbyggt objekt som har alla (ändra sumbit till keypress isf)
    //e.preventDefault(); // tar bort för att den ska sökaigen efter varje tangent. hade behövts ifall jag hade submit eller keypress tex.

    let theSearchText: HTMLInputElement = document.getElementById(
      "searchText"
    ) as HTMLInputElement;
    let searchText: string = theSearchText.value;
    if (searchText.length > 2) {
      let movies: IMovie[] = await movieSearch(searchText);
      createHTML(movies);
    }
  }
);

const createHTML = (movies: IMovie[]) => {
  let container = document.getElementById("searchResult") as HTMLDivElement;
  container.className = "container";
  container.innerHTML = " ";

  for (let i = 0; i < movies.length; i++) {
    let frame: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let img: HTMLImageElement = document.createElement("img");

    frame.className = "frame";

    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    frame.appendChild(title);
    frame.appendChild(img);
    container.appendChild(frame);

    document.body.appendChild(container);
  }
};
