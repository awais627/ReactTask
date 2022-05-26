import axios, { AxiosInstance } from "axios";

export interface IPostdata {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    ingredients: {
      yeast: string;
    };
    image_url: string;
    abv: string;
};

export const instance : AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});

export interface IFilters {
    beerName: String
    yeast: String
    date: String
    abv: number 
    id: String
    endPage:String
    postPerPage:String
  }

export const getBeersService = async (filters:IFilters, currentPage:number) :Promise<IPostdata[]> => {
  const { id, beerName, yeast, date, abv, postPerPage } = filters;
  const idQueryString = id ? `&ids=${id}` : "";
  const yeastQueryString = yeast ? `&yeast=${yeast}` : "";
  const beerQueryString = beerName ? `&beer_name=${beerName}` : "";
  const dateQueryString = date ? `&brewed_after=${date}` : "";
  const abvQueryString = abv ? `&abv_gt=${abv}` : "";
  const PerPageQueryString = postPerPage ? `&per_page=${postPerPage}` : "";
  const url = `/beers?page=${currentPage}${PerPageQueryString}${dateQueryString}${abvQueryString}${beerQueryString}${idQueryString}${yeastQueryString}`;
  const {data}=await instance.get(url);  
  return data
};
