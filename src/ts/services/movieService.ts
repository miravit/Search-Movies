import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmbdResponse } from "../models/IOmdbresponse";


export function searchMovies(searchText:string): Promise<IMovie[]> {
    return axios.get<IOmbdResponse>("http://omdbapi.com?apikey=416ed51a&s=" +searchText)
    .then((response) => {
        return response.data.Search;
    });
}