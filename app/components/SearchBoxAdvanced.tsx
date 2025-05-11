import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import type { SearchBoxAdvanced, FormSearch } from '~/utils/types';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router';

export default function SearchBoxAdvanced(props: SearchBoxAdvanced) {
  const { onSubmit, formData, setFormData } = props;
  const navigate = useNavigate();

  const { handleSubmit, setValue, register, reset } = useForm<FormSearch>();

  useEffect(() => {
    setFormData((prevFormData) => ({
      search: prevFormData?.search || '',
    }));
  }, [setFormData, setValue]);

  const handleReset = () => {
    setFormData({
      search: '',
    });
    reset();
    navigate(`/search?query=`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-50 transition-all duration-300 bg-dark-secondary rounded-full w-full flex items-center p-15 gap-10"
    >
      <ButtonIcon
        className="w-[40px] h-[40px] shrink-0"
        type="submit"
        icon={<MagnifyingGlassIcon className="w-[17.5px] h-[17.5px]" />}
      />
      <input
        autoFocus
        className="outline-none bg-transparent w-full h-full transition-all duration-300 placeholder:text-white-100 text-[17.5px] shrink"
        placeholder="Search..."
        defaultValue={formData?.search || ''}
        {...register('search')}
      />
      <ButtonIcon
        onClick={handleReset}
        className="w-[40px] h-[40px] shrink-0"
        type="button"
        icon={<XMarkIcon className="w-[17.5px] h-[17.5px]" />}
      />
    </form>
  );
}
