import React from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

const MapCard: React.FC<MapProps> = ({ latitude, longitude }) => {
  let origin = `${latitude}, ${longitude}`;
  let destination = `Baiterek, 4CHJ+86C, Astana 01000, Kazakhstan`;
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyCn3yfJFchob_gVT4tLJ8XhHn8AB1YmWf0&origin=${origin}&destination=${destination}`}
        width="90%"
        height={300}
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapCard;
