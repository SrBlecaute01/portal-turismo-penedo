import React, { useState, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import Navbar from '../../components/Navbar';

interface Location {
  lat: number;
  lng: number;
}

interface Place {
  id: string;
  name: string;
  location: Location;
}

interface MapComponentProps {
  apiKey: string; // Chave da API do Google Maps
  initialZoom?: number;
}

const PENEDO_COORDINATES: Location = {
  lat: -10.2906,
  lng: -36.5808
};

const Map: React.FC<MapComponentProps> = ({
  apiKey,
  initialZoom = 15
}) => {
  const [center, setCenter] = useState<Location>(PENEDO_COORDINATES);
  const [markers, setMarkers] = useState<Place[]>([]);
  const [zoom, setZoom] = useState<number>(initialZoom);
  const [selectedFilter, setSelectedFilter] = useState<string>('');

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const mapContainerStyle = {
    width: '100%',
    height: '500px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
    streetViewControl: true,
    mapTypeControl: true,
    fullscreenControl: true,
  };

  const searchBoxStyle = {
    boxSizing: 'border-box' as const,
    border: '1px solid transparent',
    width: '240px',
    height: '40px',
    padding: '0 12px',
    borderRadius: '3px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    fontSize: '14px',
    outline: 'none',
    textOverflow: 'ellipses',
    marginTop: '10px',
  };

  const filterOptions = [
    { id: '', label: 'Popular aqui' },
    { id: 'filter1', label: 'Filtro 1' },
    { id: 'filter2', label: 'Filtro 2' },
    { id: 'filter3', label: 'Filtro 3' },
    { id: 'filter4', label: 'Filtro 4' }
  ];

  const onSearchBoxLoad = (ref: google.maps.places.SearchBox) => {
    searchBoxRef.current = ref;
  };

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onPlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();

      if (places && places.length > 0) {
        const newMarkers = places.map((place) => {
          const location = {
            lat: place.geometry?.location?.lat() || PENEDO_COORDINATES.lat,
            lng: place.geometry?.location?.lng() || PENEDO_COORDINATES.lng
          };

          return {
            id: place.place_id || `marker-${Date.now()}`,
            name: place.name || 'Local sem nome',
            location
          };
        });

        setMarkers([...markers, ...newMarkers]);

        if (places[0].geometry?.location) {
          setCenter({
            lat: places[0].geometry.location.lat(),
            lng: places[0].geometry.location.lng()
          });
          setZoom(16);
        }
      }
    }
  };

  const applyFilter = (filterId: string) => {
    setSelectedFilter(filterId);

    if (filterId) {
      const simulatedPlaces: Place[] = [
        {
          id: `${filterId}-1`,
          name: `Local ${filterId} #1`,
          location: {
            lat: PENEDO_COORDINATES.lat + (Math.random() * 0.01 - 0.005),
            lng: PENEDO_COORDINATES.lng + (Math.random() * 0.01 - 0.005)
          }
        },
        {
          id: `${filterId}-2`,
          name: `Local ${filterId} #2`,
          location: {
            lat: PENEDO_COORDINATES.lat + (Math.random() * 0.01 - 0.005),
            lng: PENEDO_COORDINATES.lng + (Math.random() * 0.01 - 0.005)
          }
        }
      ];

      setMarkers(simulatedPlaces);
    } else {
      setMarkers([]);
      setCenter(PENEDO_COORDINATES);
      setZoom(initialZoom);
    }
  };

  const resetMapToPenedo = () => {
    setCenter(PENEDO_COORDINATES);
    setZoom(initialZoom);
  };

  useEffect(() => {
    resetMapToPenedo();
  }, [initialZoom]);

  return (
    <div className="penedo-map-container">
      <Navbar />
      <LoadScript
        googleMapsApiKey={apiKey}
        libraries={['places']}
      >
        <div className="filter-container" style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          padding: '10px 0'
        }}>
          {filterOptions.map(filter => (
            <button
              key={filter.id}
              onClick={() => applyFilter(filter.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid #ddd',
                background: selectedFilter === filter.id ? '#4285F4' : 'white',
                color: selectedFilter === filter.id ? 'white' : 'black',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={mapOptions}
            onLoad={onMapLoad}
          >
            <StandaloneSearchBox
              onLoad={onSearchBoxLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Buscar locais em Penedo..."
                style={{
                  ...searchBoxStyle,
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  zIndex: 1
                }}
              />
            </StandaloneSearchBox>

            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '10px',
                background: 'white',
                padding: '8px',
                borderRadius: '4px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                zIndex: 1
              }}
              onClick={resetMapToPenedo}
            >
              Voltar para Penedo
            </div>

            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.location}
                title={marker.name}
              />
            ))}
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default Map;