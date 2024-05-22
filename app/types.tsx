export interface Anime {
  mal_id: number;
  title: string;
  url: string;
  episodes: number;
  score: number;
  year: number;
  images: {
    webp: {
      image_url: string;
    };
  };
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
      count: number,
      total: number,
      per_page: number,
  };
}

export interface AnimeData {
  pagination: Pagination;
  data: Anime[];
}