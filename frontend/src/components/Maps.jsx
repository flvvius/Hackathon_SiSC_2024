import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const style = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          invert_lightness: true,
        },
        {
          saturation: -80,
        },
        {
          lightness: 30,
        },
        {
          gamma: 0.5,
        },
        {
          hue: "#3d433a",
        },
      ],
    },
  ];

  const libraries = ["places"];
  const mapContainerStyle = {
    width: "65vw",
    height: "75vh",
    borderRadius: "8px",
  };
  const center = {
    lat: 45.44417190551758,
    lng: 28.02769660949707,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC4ZzPVR1ikmjgmbuv3vLGzPXeajDY62sg",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={{ styles: style }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Maps;
