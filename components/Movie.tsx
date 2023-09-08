import Link from 'next/link';
import React from 'react';
import MovieImage from './MovieImage';

type MovieProps = {
  movie: any;
};
const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className='justify-center'>
    <Link
      href={{
        pathname: '/movie',
        query: { movie: movie.imdbID },
      }}
      >
      <div className='max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden'>
        <div className='relative w-70 h-80'>
          <MovieImage
            src={movie.Poster}
            alt={movie.Title}
            
            />
        </div>
        <div className='p-4'>
          <h3 className='mt-2 text-xl font-semibold'>{movie.Title}</h3>
          <p className='mt-1 text-lg text-gray-500'>{movie.Year}</p>
        </div>
      </div>
    </Link>
  </div>
  );
};



export default Movie;


