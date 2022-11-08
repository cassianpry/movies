import Link from 'next/link';
import requests from '../utils/requests';

export default function Navbar() {
  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 text-xl lg:text-2xl select-none">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <Link href={`?genre=${key}`} key={key}>
          <h2 className="m-6 hover:text-white active:text-red-400">{title}</h2>
        </Link>
      ))}
    </div>
  );
}
