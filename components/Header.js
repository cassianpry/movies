import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className="flex flex-col items-center p-6 select-none sm:flex-row justify-between bg-gray-700 text-gray-200">
      <div className="flex ">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={InformationCircleIcon} title="About" />
      </div>
      <Image
        className="active:brightness-110"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/250px-IMDB_Logo_2016.svg.png"
        alt="imdb logo"
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
