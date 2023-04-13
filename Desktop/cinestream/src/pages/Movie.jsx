import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import MoviesContainer from "../component/MoviesContainer";

function Movie() {
    const { id } = useParams();
    useEffect(() => {
        window.onload = () => {
            document.querySelector("nav").classList.remove("bg-transparent");
            document.querySelector("nav").classList.add("bg-[#144184]");
        };
    }, []);
    const { data: movie } = useQuery(["movie"], () => {
        return axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=bd899d831bf007312f2e5891c8b3bab9&language=en-US`
            )
            .then((res) => res.data);
    });
    const { data:relatedMovies } = useQuery(["relatedMovies"], () => {
      return axios
          .get(
             `https://api.themoviedb.org/3/movie/${id}/similar?api_key=bd899d831bf007312f2e5891c8b3bab9&language=en-US&page=1`
          )
          .then((res) => res.data);
  });
    return (
        <>
            <Navbar />

            <div className="h-96  mt-20 w-full bg-black ">
            <iframe className="mx-auto w-2/3 h-72" id="ytplayer" type="text/html"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
            </div>

            <div className=" grid sm:max-md:grid-rows-2 md:grid-cols-12 mx-10 rounded-lg my-10 shadow-md  p-5 border-[1px] border-white">
                <div className="row-span-1 md:col-span-2 rounded ">
                    <img
                        className="rounded  "
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
                        alt=""
                    />
                </div>
                <div className="grid gap-7 md:col-start-4 md:col-end-12  py-5 rounded  dark:text-white ">
                    <h1 className="text-3xl">{movie?.title}</h1>
                    <p>{movie?.overview}</p>
                    <div className="flex flex-col md:flex-row justify-between gap-5  ">
                        <div className="grow">
                            <p className="">
                                <span className="font-bold">released:</span>{" "}
                                {movie?.release_date}
                            </p>
                            <p className="">
                                <span className="font-bold">genre:</span>

                                {movie?.genres.map((value) => {
                                    return <span> | {value.name} </span>;
                                })}
                            </p>
                        </div>
                        <div className="grow">
                            <p>
                                <span className="font-bold">Duration:</span>{" "}
                                {movie?.runtime} min
                            </p>
                            <p>
                                <span className="font-bold">wbesite:</span>{" "}
                                {movie?.homepage}{" "}
                            </p>
                            <p>
                                <span className="font-bold">production:</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <MoviesContainer title="You may also like" filter={false} data={relatedMovies?.results}/>

           
            <Footer />
        </>
    );
}

export default Movie;
