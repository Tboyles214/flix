import Movie from "@/components/Movie";



async function SearchPage({ searchParams }: { searchParams: searchParams }) {
  const API_KEY = process.env.API_KEY;

  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchParams.searchTerm}`
  );
  const response = await res.json();

  const searchMovies = response.Search || [];

  const limitedSearchMovies = searchMovies.slice(0, 6);
  return (
    <div className="mx-10 md:mx-20">
      <main className="pt-40 mx-auto px-8 xl:px-0">
        <section className="flex flex-col space-y-12 pb-44 items-center">
          <h1 className="text-5xl font-bold text-center text-black">
            Search Results for &quot;{searchParams.searchTerm}&quot;
          </h1>
          <div className="mx-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {limitedSearchMovies.map((movie) => (
              <div key={movie.imdbID} className="flex-shrink-0">
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
