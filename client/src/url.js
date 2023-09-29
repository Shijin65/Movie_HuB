import {API_KEY} from './constants/constance'

const element=Math.floor((Math.random()*10))
export const originals=`/discover/tv?api_key=${API_KEY}&with_networks=213&page=${element}`
export const action=`/discover/movie?api_key=${API_KEY}&with_genres=28&page=${element}`


export const Horror=`/discover/movie?api_key=${API_KEY}&with_genres=27&page=${element}`
export const Tv_Series=`/tv/on_the_air?api_key=${API_KEY}`
