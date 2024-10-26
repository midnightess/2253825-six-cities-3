type OfferHost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

type OfferLocation = {
  latitude:number;
  longitude: number;
  zoom: number;
}

type OfferCityLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferCity = {
  name: string;
  location :OfferCityLocation;
}

type Offer = {
city: OfferCity;
previewImage: string;
images: string[];
title: string;
isFavorite:boolean;
isPremium:boolean;
rating: number;
type: string;
bedrooms: number;
maxAdults: number;
price:number;
goods: string[];
host: OfferHost;
description:string;
location: OfferLocation;
id:string;
}

type CityLocation = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

type PointOfferLocation = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
  id: string;
}

type IconToMap = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}


export type { Offer, CityLocation, PointOfferLocation, IconToMap};

