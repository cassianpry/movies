import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Card({ result }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="p-3 hover:text-white active:text-red-400 md:hover:scale-105 transition-transform duration-200">
      <Image
        src={`${IMAGE_URL}${result.backdrop_path}`}
        alt={result.title}
        width={600}
        height={200}
        relative
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="truncate text-lg">{result.overview}</p>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <HandThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
