import { useForm, type SubmitHandler } from 'react-hook-form';
import ButtonIcon from './ButtonIcon';
import type { FormSearch } from '~/utils/types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router';

export default function SearchBox() {
  const { register, handleSubmit } = useForm<FormSearch>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormSearch> = (data) =>
    navigate(`/search?query=${data?.search}`);

  return (
    <>
      <ButtonIcon
        onClick={handleSubmit(onSubmit)}
        className="bg-white-30 hover:bg-white-45 hidden sm:flex w-[45px] h-[45px]"
        type="submit"
        icon={
          <MagnifyingGlassIcon className="w-[25px] h-[25px] text-white-100" />
        }
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-[250px] md:max-w-[175px] sm:hidden"
      >
        <input
          className="outline-none h-[45px] w-full py-5 pl-15 pr-[45px] rounded-full transition-all duration-300 bg-white-30 hover:bg-white-45 backdrop-blur-[30px] placeholder:text-white-100"
          placeholder="Search..."
          {...register('search')}
        />
        <ButtonIcon
          className="absolute top-1/2 translate-y-[-50%] right-10 w-[30px] h-[30px]"
          type="submit"
          icon={
            <MagnifyingGlassIcon className="w-[17.5px] h-[17.5px] text-white-100" />
          }
        />
      </form>
    </>
  );
}
