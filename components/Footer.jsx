import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import Link from 'next/link';

function Footer() {
    return (
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 fixed bottom-0 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-x-4 h-16">
          <div className='flex flex-row gap-3'>
          <Link href="/">
            <BiCameraMovie className="text-5xl text-white" />
          </Link>
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl"
              >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-5xl"
              >
              <FaLinkedin />
            </a>
        </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;

  