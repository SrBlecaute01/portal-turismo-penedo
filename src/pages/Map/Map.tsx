import React, { useState, useRef, useCallback } from 'react';
import {
  GoogleMap,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api';
import Navbar from '../../components/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Map.module.css';
import { Location, Place, MapComponentProps } from './types';
import Footer from '../../components/Footer/Footer';
import { useLoadScript } from '@react-google-maps/api';

const PENEDO_COORDINATES: Location = {
  lat: -10.2906,
  lng: -36.5808
};

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map: React.FC<MapComponentProps> = ({
  initialZoom = 15
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ['places'],
  });

  const [center, setCenter] = useState<Location>(PENEDO_COORDINATES);
  const [markers, setMarkers] = useState<Place[]>([]);
  const [zoom, setZoom] = useState<number>(initialZoom);
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const mapContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };

  const filterOptions = [
    { id: 'hoteis', label: 'Hotéis' },
    { id: 'restaurantes', label: 'Restaurantes' },
    { id: 'pontos-turisticos', label: 'Pontos Turísticos' },
    { id: 'servicos', label: 'Serviços' }
  ];

  const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
    searchBoxRef.current = ref;
  };

  const onPlacesChanged = useCallback(() => {
    if (searchBoxRef.current && isLoaded) {
      const places = searchBoxRef.current.getPlaces();

      if (places && places.length > 0) {
        const newMarkers: Place[] = places.map((place) => ({
          id: place.place_id || `marker-${Date.now()}`,
          name: place.name || 'Local sem nome',
          location: {
            lat: place.geometry?.location?.lat() || PENEDO_COORDINATES.lat,
            lng: place.geometry?.location?.lng() || PENEDO_COORDINATES.lng
          }
        }));

        setMarkers(newMarkers);

        const firstPlace = places[0];
        if (firstPlace.geometry?.location) {
          setCenter({
            lat: firstPlace.geometry.location.lat(),
            lng: firstPlace.geometry.location.lng()
          });
          setZoom(16);
        }
      }
    }
  }, [isLoaded]);

  const applyFilter = (filterId: string) => {
    if (!isLoaded || !mapRef.current) return;

    setSelectedFilter(filterId);

    if (searchBoxRef.current) {
      const penedoBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(PENEDO_COORDINATES.lat - 0.05, PENEDO_COORDINATES.lng - 0.05),
        new google.maps.LatLng(PENEDO_COORDINATES.lat + 0.05, PENEDO_COORDINATES.lng + 0.05)
      );
      searchBoxRef.current.setBounds(penedoBounds);

      const service = new google.maps.places.PlacesService(mapRef.current);

      service.nearbySearch({
        location: PENEDO_COORDINATES,
        radius: 5000,
        type: filterId === 'hoteis' ? 'lodging' :
              filterId === 'restaurantes' ? 'restaurant' :
              filterId === 'pontos-turisticos' ? 'tourist_attraction' :
              filterId === 'servicos' ? 'point_of_interest' : undefined
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const filteredMarkers: Place[] = results.map((place) => ({
            id: place.place_id || `marker-${Date.now()}`,
            name: place.name || 'Local sem nome',
            location: {
              lat: place.geometry?.location?.lat() || PENEDO_COORDINATES.lat,
              lng: place.geometry?.location?.lng() || PENEDO_COORDINATES.lng
            }
          }));

          setMarkers(filteredMarkers);
        }
      });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.mapContainer}>
      <Navbar />

      {isLoaded ? (
        <GoogleMap
          onLoad={(map) => {
            mapRef.current = map;
          }}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={mapOptions}
        >
          <div className={styles.filterContainer}>
            <StandaloneSearchBox
              onLoad={onSearchBoxLoad}
              onPlacesChanged={onPlacesChanged}
              bounds={new google.maps.LatLngBounds(
                new google.maps.LatLng(PENEDO_COORDINATES.lat - 0.05, PENEDO_COORDINATES.lng - 0.05),
                new google.maps.LatLng(PENEDO_COORDINATES.lat + 0.05, PENEDO_COORDINATES.lng + 0.05)
              )}
            >
              <input
                type="text"
                placeholder="Pesquisar em Penedo..."
                value={searchQuery}
                onChange={handleSearch}
                className={styles.searchInput}
              />
            </StandaloneSearchBox>

            {filterOptions.map(filter => (
              <button
                key={filter.id}
                onClick={() => applyFilter(filter.id)}
                className={`${styles.filterButton} ${selectedFilter === filter.id ? styles.activeFilter : ''}`}
              >
                <FaMapMarkerAlt />
                {filter.label}
              </button>
            ))}
          </div>

          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.location}
              title={marker.name}
            />
          ))}
        </GoogleMap>
      ) : (
        <div className={styles.loadingContainer}>
          <p>Carregando mapa...</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Map;
