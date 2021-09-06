interface LocationNearestCityElement {
  _embedded: Embedded;
  _links: FluffyLinks;
  distance_km: number;
}

interface Embedded {
  "location:nearest-city": EmbeddedLocationNearestCity;
}

interface EmbeddedLocationNearestCity {
  _links: PurpleLinks;
  full_name: string;
  geoname_id: number;
  location: Location;
  name: string;
  population: number;
}

interface PurpleLinks {
  "city:admin1_division": LocationNearestCity;
  "city:alternate-names": CityAlternateNames;
  "city:country": LocationNearestCity;
  "city:timezone": LocationNearestCity;
  "city:urban_area": LocationNearestCity;
  self: CityAlternateNames;
}

interface LocationNearestCity {
  href: string;
  name: string;
}

interface CityAlternateNames {
  href: string;
}

interface Location {
  geohash: string;
  latlon: Latlon;
}

interface Latlon {
  latitude: number;
  longitude: number;
}

interface FluffyLinks {
  "location:nearest-city": LocationNearestCity;
}
