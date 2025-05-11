import { Link } from 'react-router';
import Chip from '~/components/Chip';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-100 md:px-50 sm:px-30">
      <div className="max-w-6xl mx-auto pb-100 md:pb-50 sm:pb-30">
        <div className="bg-dark-secondary p-50 md:p-30 sm:p-25 rounded-[25px] flex justify-between items-center md:items-start md:flex-col gap-50 md:gap-25">
          <Link to="/" className="sm:w-full">
            <Chip
              className="sm:w-full"
              title={
                <p className="text-[17.5px] sm:text-[15px] font-[700]">
                  Dex
                  <span className="font-[400]">anime</span>
                </p>
              }
            />
          </Link>
          <span className="text-[16px] font-[400] text-white-80 text-right md:text-left">
            Design & Develop by{' '}
            <Link
              to="https://daniszaidan.vercel.app/"
              target="_blank"
              className="font-[600] text-white-100"
            >
              Danis Z.
            </Link>{' '}
            &copy; {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
