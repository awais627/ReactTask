import axios, { AxiosInstance } from "axios";

export const instance : AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});
type filters={
    beerName: String
    yeast: String
    date: String
    abv: String 
    id: String
    endPage:String
    postPerPage:String
  }
export const getBeersService = async (filters:filters, currentPage:number) => {
  const { id, beerName, yeast, date, abv, postPerPage } = filters;
  const idQueryString = id ? `&ids=${id}` : "";
  const yeastQueryString = yeast ? `&yeast=${yeast}` : "";
  const beerQueryString = beerName ? `&beer_name=${beerName}` : "";
  const dateQueryString = date ? `&brewed_after=${date}` : "";
  const abvQueryString = abv ? `&abv_gt=${abv}` : "";
  const PerPageQueryString = postPerPage ? `&per_page=${postPerPage}` : "";
  const url = `/beers?page=${currentPage}${PerPageQueryString}${dateQueryString}${abvQueryString}${beerQueryString}${idQueryString}${yeastQueryString}`;
  return await instance.get(url);
};
