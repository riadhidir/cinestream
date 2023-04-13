import axios from "axios";

export const getLatestMovies = () => {
    return  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=bd899d831bf007312f2e5891c8b3bab9&language=en-US&region=US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=2023-04-12&with_watch_monetization_types=flatrate").then((res)=> res.data)  //get request for CodeGeeX api   
}
    
export const getLatestShows = () => {
    return  axios.get("https://api.themoviedb.org/3/discover/tv?api_key=bd899d831bf007312f2e5891c8b3bab9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0").then((res)=> res.data)  //get request for CodeGeeX api   
}
    
