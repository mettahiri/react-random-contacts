import React from "react"
import {withScriptjs, withGoogleMap,GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) => 
                <GoogleMap
                defaultZoom={5}
                defaultCenter={{ lat: parseFloat(props.location.latitude), lng: parseFloat(props.location.longitude)}}
                >
                <Marker 
                position={{ lat: parseFloat(props.location.latitude), lng: parseFloat(props.location.longitude) }}
                />
                </GoogleMap>
));

export default Map;
