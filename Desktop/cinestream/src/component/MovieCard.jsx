import { Link } from "react-router-dom";
function MovieCard({ movie_data }) {
    return (
        <div className=" h-auto rounded-xl bg-transparent">
            <div className="h-auto w-full  rounded-xl relative group ">
                <Link href="#" to={`/${movie_data.id}`}>
                    <img
                        className=" h-[%100] w-[100%] rounded-xl"
                        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie_data.poster_path}`}
                        alt=""
                    />
                    <svg
                        className="invisible group-hover:visible h-8 w-8 md:h-10 md:w-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H18C18.7956 0 19.5587 0.316071 20.1213 0.87868C20.6839 1.44129 21 2.20435 21 3V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V3Z"
                            fill="#00A6ED"
                        />
                        <path
                            d="M16.125 9.8505C16.239 9.91633 16.3337 10.011 16.3995 10.125C16.4653 10.239 16.5 10.3684 16.5 10.5C16.5 10.6316 16.4653 10.761 16.3995 10.875C16.3337 10.989 16.239 11.0837 16.125 11.1495L7.125 16.3455C7.01099 16.4113 6.88166 16.446 6.75001 16.446C6.61835 16.446 6.48902 16.4113 6.37501 16.3455C6.26099 16.2797 6.16632 16.185 6.10049 16.071C6.03466 15.957 6 15.8276 6 15.696V5.304C6 5.17235 6.03466 5.04302 6.10049 4.929C6.16632 4.81499 6.26099 4.72032 6.37501 4.65449C6.48902 4.58867 6.61835 4.55402 6.75001 4.55402C6.88166 4.55402 7.01099 4.58867 7.125 4.6545L16.125 9.8505Z"
                            fill="white"
                        />
                    </svg>
                </Link>
            </div>
            <div className=" flex flex-col gap-2 justify-between  ">
                <p className="p-2 pb-0 mb-auto dark:text-white">
                    {movie_data.title}
                </p>
                <p className="text-sm inline-flex gap-x-2 justify-between px-2 dark:text-white items-center">
                    {movie_data.release_date.slice(0, 4)} &#9679; 130 min{" "}
                    <span className="ml-auto border border-gray-400 px-2 rounded text-gray-400 dark:text-white ">
                        Movie
                    </span>{" "}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
