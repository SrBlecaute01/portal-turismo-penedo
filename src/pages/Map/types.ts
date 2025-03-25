export interface Location {
  lat: number;
  lng: number;
}

export interface Place {
  id: string;
  name: string;
  location: Location;
}

export interface MapComponentProps {
  apiKey?: string;
  initialZoom?: number;
}