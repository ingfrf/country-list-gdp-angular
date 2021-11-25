export interface CountriesResponseModel {
  content: CountryModel[];
  last: boolean;
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface CountryModel {
  code: string;
  name: string;
  continent: string;
  region: string;
  surfaceArea: number;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}
