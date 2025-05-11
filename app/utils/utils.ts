import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const createURL = (title: string, id: number): string => {
  let lowerCaseText = title?.toLowerCase();
  lowerCaseText = lowerCaseText?.replace(/[^a-z0-9\s-]/g, '');
  let url = lowerCaseText?.replace(/\s+/g, '-');
  return `${url}-${id}`;
};

export const extractURL = (url: string): { title: string; id: number } => {
  const parts = url.split('-');
  const id = Number(parts.pop() as string);
  const title = parts.join(' ');
  return {
    title: title?.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()),
    id: id,
  };
};
