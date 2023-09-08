'use client'
import Image from 'next/image';
import React, { useState } from 'react';

type MovieImageProps = {
  src: string;
  alt: string;
};

const MovieImage: React.FC<MovieImageProps> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 100);
  };

  return (
    <div className=''>
      {!imageLoaded && <div className='inset-0 bg-gray-400 blur-md animate-pulse'></div>}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit='fill'
        className={`rounded-lg hover:scale-110 transition-transform ease-in-out duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default MovieImage;

