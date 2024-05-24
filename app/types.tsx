export interface Genre {
  mal_id: number;
  name: string;
}

export interface Producer {
  mal_id: number;
  name: string;
}

export interface Licensor {
  mal_id: number;
  name: string;
}

export interface Studio {
  mal_id: number;
  name: string;
}

export interface Anime {
  mal_id: number;
  title: string;
  url: string;
  score: number;
  scored_by: number;
  popularity: number;
  members: number;
  year: number;
  rating: string;
  episodes: number;
  synopsis: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  trailer: {
    youtube_id: number;
    url: string;
    embed_url: string;
    images: {
      large_image_url: string;
    };
  };
  genres: Genre[];
  producers: Producer[];
  licensors: Licensor[];
  studios: Studio[];
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

export interface AnimeData {
  pagination: Pagination;
  data: Anime[];
}

export interface AnimeDetail {
  data: Anime;
}
