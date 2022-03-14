import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "./constants";

const radius=2500;

const dummyGasStations = [
  {
    post_code: "64546",
    city: "Moerfelden-Walldorf",
    brand: "Shell",
    street: "Am Schlichter",
    house_number: "2",
    position: [49.973503, 8.552479],
  },
  {
    post_code: "64546",
    city: "Moerfelden-Walldorf",
    brand: "Aral",
    street: "Okrifteler Straße",
    house_number: "18-20",
    position: [50.00558, 8.567565],
  },
  {
    post_code: "64546",
    city: "Moerfelden-Walldorf",
    brand: "Esso",
    street: "Aschaffenburger Str.",
    house_number: "1",
    position: [50.012665, 8.584838],
  },
  {
    post_code: "64546",
    city: "Moerfelden-Walldorf",
    brand: "Elan",
    street: "Ruesselsheimer Str.",
    house_number: "60",
    position: [49.973003, 8.553158],
  },
  {
    post_code: "85356",
    city: "München",
    brand: "OMV",
    street: "Erdinger Allee",
    house_number: "2",
    position: [48.35972, 11.82388],
  },
  {
    post_code: "25980",
    city: "Sylt",
    brand: "Shell",
    street: "Trift",
    house_number: "7",
    position: [54.904569, 8.310836],
  },
  {
    post_code: "14129",
    city: "Berlin",
    brand: "Shell",
    street: "Potsdamer Chaussee",
    house_number: "24",
    position: [52.429717, 13.22338],
  },
  {
    post_code: "60594",
    city: "Frankfurt",
    brand: "Aral",
    street: "Siemensstraße",
    house_number: "37",
    position: [50.10236, 8.695524],
  },
  {
    post_code: "68165",
    city: "Mannheim",
    brand: "Shell",
    street: "Seckenheimer Str.",
    house_number: "17",
    position: [49.480509, 8.479488],
  },
  {
    post_code: "68163",
    city: "Mannheim-Neuostheim",
    brand: "E-Center",
    street: "Seckenheimer Landstr.",
    house_number: "246",
    position: [49.47353, 8.536847],
  }
];

function GetIconGasStation(_iconSize) {
  return L.icon({
    iconUrl: require("./icons/Gas_Station_Icon.png"),
    iconSize: [_iconSize],
  });
}

/* function GetIconUserLocation(_iconSize) {
  return L.icon({
    iconUrl: require("./icons/User_Location_Icon.png"),
    iconSize: [_iconSize],
  });
} */

export default function TestMapsView() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        /* const radius = 2500; */
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>
          You are here. <br />
          {/* Map bbox: <br />
          <b>Southwest lng</b>: {bbox[0]} <br />
          <b>Southwest lat</b>: {bbox[1]} <br />
          <b>Northeast lng</b>: {bbox[2]} <br />
          <b>Northeast lat</b>: {bbox[3]} */}
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={[50.217450, 7.907970]} /* Holzhausen an der Tauber als Geburtsort von Nicolaus August Otto - dem Gründer des Otto Motors und 
                                        der Inspiration von "Ottomize" */
      zoom={12}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {dummyGasStations.map((dummyGasStation) => (
        <Marker
          position={dummyGasStation.position}
          icon={GetIconGasStation(30)}
        >
          <Popup>
            {dummyGasStation.post_code}, {dummyGasStation.city}{" "}
            {dummyGasStation.street} {dummyGasStation.house_number},{" "}
            {dummyGasStation.brand} {" "}
            {dummyGasStation.position[0]}, {dummyGasStation.position[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
