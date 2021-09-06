interface BasicCityDataRes {
  _embedded: Embedded;
  _links: Welcome9Links;
  full_name: string;
  geoname_id: number;
  location: Location;
  name: string;
}

interface Embedded {
  "city:admin1_division": CityAdmin1Division;
  "city:alternate-names": EmbeddedCityAlternateNames;
  "city:country": CityCountry;
  "city:timezone": CityTimezone;
}

interface CityAdmin1Division {
  _links: CityAdmin1DivisionLinks;
  geoname_id: number;
  geonames_admin1_code: string;
  name: string;
}

interface CityAdmin1DivisionLinks {
  "a1:cities": CityAlternateNames;
  "a1:country": CityAlternateNames;
  self: CityAlternateNames;
}

interface CityAlternateNames {
  href: string;
}

interface EmbeddedCityAlternateNames {
  _links: CityAlternateNamesLinks;
  alternate_names: AlternateName[];
}

interface CityAlternateNamesLinks {
  "city:item": CityAlternateNames;
  self: CityAlternateNames;
}

interface AlternateName {
  name: string;
}

interface CityCountry {
  _links: CityCountryLinks;
  currency_code: string;
  geoname_id: number;
  iso_alpha2: string;
  iso_alpha3: string;
  name: string;
  population: number;
}

interface CityCountryLinks {
  "country:admin1_divisions": CityAlternateNames;
  "country:continent": CityCountryClass;
  "country:salaries": CityAlternateNames;
  self: CityAlternateNames;
}

interface CityCountryClass {
  href: string;
  name: string;
}

interface CityTimezone {
  _links: CityTimezoneLinks;
  iana_name: string;
}

interface CityTimezoneLinks {
  self: CityAlternateNames;
  "tz:offsets": TzOffsets;
  "tz:offsets-now": CityAlternateNames;
}

interface TzOffsets {
  href: string;
  templated: boolean;
}

interface Welcome9Links {
  "city:admin1_division": CityCountryClass;
  "city:alternate-names": CityAlternateNames;
  "city:country": CityCountryClass;
  "city:timezone": CityCountryClass;
  curies: Cury[];
  self: CityAlternateNames;
}

interface Cury {
  href: string;
  name: string;
  templated: boolean;
}

interface Location {
  geohash: string;
  latlon: Latlon;
}

interface Latlon {
  latitude: number;
  longitude: number;
}
