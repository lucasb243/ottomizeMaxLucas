import React from "react";
import L from "leaflet";
import { geolocated } from "react-geolocated";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
  useMapEvents,
} from "react-leaflet";
import classes from "./MapsView.module.css";
import LocationMarker from "./LocationMarker";

const DEFAULT_LATITUDE = 49.30315;
const DEFAULT_LONGITUDE = 8.64284;

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
];
function GetIconGasStation(_iconSize) {
  return L.icon({
    iconUrl: require("./icons/Gas_Station_Icon.png"),
    iconSize: [_iconSize],
  });
}

function GetIconUserLocation(_iconSize) {
  return L.icon({
    iconUrl: require("./icons/User_Location_Icon.png"),
    iconSize: [_iconSize],
  });
}

export default function MapsView(props) {
  /* const longitude = props.coords ? props.coords.longitude : DEFAULT_LONGITUDE;
  const latitude = props.coords ? props.coords.latitude : DEFAULT_LATITUDE; */
  const longitude = DEFAULT_LONGITUDE;
  const latitude = DEFAULT_LATITUDE;
  return (
    <MapContainer 
      center={[latitude, longitude]}
      zoom={5}
      scrollWheelZoom={true}
      className={classes.leafmap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      {/* {!props.coords ? (
        <div className="loading">Loading</div>
      ) : (
        <Marker position={[latitude, longitude]} icon={GetIconUserLocation(25)}>
          <Popup>Current location!</Popup>
        </Marker>
      )} */}
      <Marker position={[latitude, longitude]} icon={GetIconUserLocation(25)}>
        <Popup>Current location!</Popup>
      </Marker>
      {dummyGasStations.map((dummyGasStation) => (
        <Marker
          position={dummyGasStation.position}
          icon={GetIconGasStation(30)}
        >
          <Popup>
            {dummyGasStation.post_code}, {dummyGasStation.city}{" "}
            {dummyGasStation.street} {dummyGasStation.house_number},{" "}
            {dummyGasStation.brand}
          </Popup>
        </Marker>
      ))}
      <Circle center={[latitude, longitude]} radius={10000} />
    </MapContainer>
  );
}

/* export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 20000,
})(MapsView); */
