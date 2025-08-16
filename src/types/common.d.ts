export interface PaginationLink {
  url: string|null;
  label: string|number;
  active: boolean;
}

export interface Pagination {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}