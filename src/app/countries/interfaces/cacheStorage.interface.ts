import { Country } from "./country";
import { Region } from "./region.type";

export interface CacheStorage { 
    "capital": termsCountries;
    "name": termsCountries; 
    "region": termsCountriesRegion;
}

export interface termsCountries{
    data: Country[];
    term: string
}

export interface termsCountriesRegion{
    data: Country[];
    term?: Region
}
