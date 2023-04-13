import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import MoviesContainer from "../component/MoviesContainer";

import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import { getLatestMovies, getLatestShows } from "../../api";
import Footer from "../component/Footer";

function Home() {

    const { data } = useQuery(["movies"], () => {
        return axios
            .get(
                "https://api.themoviedb.org/3/trending/movie/day?api_key=bd899d831bf007312f2e5891c8b3bab9"
            )
            .then((res) => res.data);
    });

    const { data: latestMovies } = useQuery(["latest_Movies"], () => {
        return getLatestMovies();
    });
    // const {data:latestShows} = useQuery(["latest_Shows"],  () => {
    //     return  getLatestShows();
    // })

    console.log(latestMovies?.results);
    return (
        <>
            
                <Hero />
                <MoviesContainer
                    title="Trending"
                    filter={true}
                    data={data?.results}
                />
                <MoviesContainer
                    title="Latest Movies"
                    filter={false}
                    data={latestMovies?.results}
                />
                <Footer />
            
        </>
    );
}

export default Home;
