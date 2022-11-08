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
    <div>
      <div className="">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={InformationCircleIcon} title="About" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/250px-IMDB_Logo_2016.svg.png"
        alt="imdb logo"
        width={100}
        height={100}
      />
    </div>
  );
}
