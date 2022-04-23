import { useCallback, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "../Marker";
import { useMapOptions, useMutateMapOptions } from "../../hooks/useMapOptions";
import { useSocket } from "../../hooks/useSocket";
import { State } from "../../@types";
import { useMarkedLocation, useMutateLocations } from "../../store/locations";

export const Map = () => {
  const mapOptions = useMapOptions();
  const { setTempSelectedCords } = useMutateLocations();
  const markedLocations = useMarkedLocation();
  const updateMapOptions = useMutateMapOptions();

  useEffect(() => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition((e) => {
        updateMapOptions({
          center: { lat: e.coords.latitude, lng: e.coords.longitude },
        });
      });
    }
  }, []);

  const { onMapCredChange } = useSocket((opt) => {
    updateMapOptions(opt);
  });

  const updateCurrentLocation = useCallback((options: State["mapOptions"]) => {
    updateMapOptions(options);
    onMapCredChange(options);
  }, []);
  return (
    <div className="w-full h-screen left-0 right-0 fixed">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API_MAP_KEY }}
        defaultCenter={mapOptions.center}
        defaultZoom={mapOptions.zoom}
        zoom={mapOptions.zoom}
        center={mapOptions.center}
        yesIWantToUseGoogleMapApiInternals
        onClick={(e) => setTempSelectedCords({ lat: e.lat, lng: e.lng })}
        onChange={({ center, zoom }) => updateCurrentLocation({ center, zoom })}
      >
        {markedLocations.map((location) => (
          <Marker
            lat={location.map.lat}
            lng={location.map.lng}
            key={location.id}
            {...location}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
