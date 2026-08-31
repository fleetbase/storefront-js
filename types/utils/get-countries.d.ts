export function getCountries(_country?: any):
    | {
          iso2: string;
          alias?: string[];
          capital: string;
          continent: import('countries-list').TContinentCode;
          continents?: import('countries-list').TContinentCode[];
          currency: import('countries-list').TCurrencyCode[];
          languages: import('countries-list').TLanguageCode[];
          name: string;
          native: string;
          partOf?: string;
          phone: number[];
          userAssigned?: boolean;
      }
    | {
          iso2: string;
          alias?: string[];
          capital: string;
          continent: import('countries-list').TContinentCode;
          continents?: import('countries-list').TContinentCode[];
          currency: import('countries-list').TCurrencyCode[];
          languages: import('countries-list').TLanguageCode[];
          name: string;
          native: string;
          partOf?: string;
          phone: number[];
          userAssigned?: boolean;
      }[];
export default getCountries;
