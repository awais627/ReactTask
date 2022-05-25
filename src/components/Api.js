import { create } from "axios";
export const instance = create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
});
export const getBeersService = async (filters, currentPage) => {
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
