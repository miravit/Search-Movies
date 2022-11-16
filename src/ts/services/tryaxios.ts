import axios, { Axios } from "axios";
import { IMovie } from "../models/IMovie";
import { IOmbdResponse } from "../models/IOmdbresponse";

export function movieSearch(searchText: string): Promise<IMovie[]> {
  return axios
    .get<IOmbdResponse>(
      "http://www.omdbapi.com/?i=tt3896198&apikey=25462718&s=" + searchText
    )
    .then((response) => {
      return response.data.Search;
    });
}
