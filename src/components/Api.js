import axios from 'axios'

export const instance = axios.create({
    baseURL: "https://api.punkapi.com/v2"
})

export const axiosGet = async (pageNext, noOfPost, date, abv, id,beerName,yeast) => {
    const idQueryString = id ? `&ids=${id}` : ""
    const yeastQueryString = yeast ? `&yeast=${yeast}` : ""
    const beerQueryString = beerName ? `&beer_name=${beerName}` : ""
    const dateQueryString = date ? `&brewed_after=${date}` : ""
    const abvQueryString = abv ? `&abv_gt=${abv}` : ""
    const url = `/beers?page=${pageNext}&per_page=${noOfPost}${dateQueryString}${abvQueryString}${beerQueryString}${idQueryString}${yeastQueryString}`
    const request=await instance.get(url)
    return request.data

}