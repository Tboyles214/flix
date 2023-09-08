import MovieImage from "@/components/MovieImage";
import Image from "next/image";

async function movieDetails({ searchParams }: { searchParams: any }) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&i=${searchParams.movie}`
  );

  const movie = await res.json();

  const full = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie.title}&plot=full`
  );
  const fullMovie = await full.json();

  return (
    <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center mt-8">
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden m-4">
        <div className="w-full md:w-90 h-900">
          <Image
            src={movie.Poster}
            alt={movie.Title}
            width={300}
            height={450}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden m-4">
        <div className="flex-grow p-4">
          <h3 className="mt-2 text-xl font-semibold">{movie.Title}</h3>
          <div className="flex mt-1">
            <p className="mr-4 text-lg text-gray-500">{movie.Year}</p>
            <p className="mr-4 text-lg text-gray-500">{movie.Rated}</p>
            <p className="mr-4 text-lg text-gray-500">{movie.Runtime}</p>
          </div>
          <p className="mt-1 text-lg text-gray-500">{movie.Genre}</p>
          <div className="mt-4">
            <p className="">{fullMovie.Plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}




export default movieDetails;
