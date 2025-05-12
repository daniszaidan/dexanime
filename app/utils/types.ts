import { Pagination } from './types';
import type {
  ButtonHTMLAttributes,
  Dispatch,
  ReactElement,
  SetStateAction,
} from 'react';
import type { SubmitHandler } from 'react-hook-form';

export interface ButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

export interface ButtonTitle extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  titleClassName?: string;
}

export interface Chip
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> {
  title: React.ReactNode;
  isHover?: boolean;
  counter?: number;
}

export interface CardAnime {
  item: Anime;
}

export interface SubHeading {
  title: string;
  link?: string;
  className?: string;
}

export interface PageHeading {
  title: string;
  className?: string;
  type: string;
}

export interface Params {
  params: { type: string; id: string };
}

export interface LoadingIcon {
  className?: string;
}

export interface SectionError {
  customError?: string;
}

export interface GridLayout {
  children: React.ReactNode;
  className?: string;
}

export interface SectionLoading {
  className?: string;
}

export interface SectionHeroDetail {
  data: Anime;
}

export interface titlePage {
  title: string;
  pageName: string;
}

export interface Navbar {
  isHiddenSearch?: boolean;
}

export interface FormSearch {
  search: string | null;
}

export interface SearchBoxAdvanced {
  onSubmit: SubmitHandler<FormSearch>;
  setFormData: Dispatch<SetStateAction<FormSearch | null>>;
  formData: FormSearch | null;
}

export interface SearchResultData {
  page: number;
  total_pages: number;
  results: any[];
}

export interface SearchResult {
  data: any;
  isLoading: boolean;
  isError: boolean;
  page: number;
  pagination: Pagination | undefined;
  handlePageChange: (newPage: number) => void;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
    images: {
      image_url?: string;
      small_image_url?: string;
      medium_image_url?: string;
      large_image_url?: string;
      maximum_image_url?: string;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english?: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: {
    from?: string;
    to?: string;
    prop: {
      from: {
        day?: number;
        month?: number;
        year?: number;
      };
      to: {
        day?: number;
        month?: number;
        year?: number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis?: string;
  background: string;
  season?: string;
  year?: number;
  broadcast: {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: any[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface JikanAnimeResponse {
  data: Anime[];
  pagination: Pagination;
}
