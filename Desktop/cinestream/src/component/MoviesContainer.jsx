import MovieCard from "./MovieCard";


function MoviesContainer(props) {
    return (
        <>
        <div className="flex justify-start gap-5 items-center mt-14 md:mt-28 mx-5 md:mx-9">
            <h3 className="text-4xl line-clamp-1 hover:line-clamp-none dark:text-white">{props.title}</h3>
            {/* {props.filter && <MovieFilter/> }  */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6  gap-4   items-stretch  my-10 mx-5 md:mx-9">
            {
                props.data?.map((value,key) => {
                return  <MovieCard movie_data={value} key={value.id}   />
         
                })
            }
 
        </div>
        </>
    );
}

export default MoviesContainer;
