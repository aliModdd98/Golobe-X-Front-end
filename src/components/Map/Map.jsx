import React from 'react'
import GoogleMapReact from 'google-map-react';
import './MapStyle.css'
import { IoLocation } from "react-icons/io5";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const defaultProps = {
        center: {
          lat: 35.99835602,
          lng: 35.01502627
        },
        zoom: 11
      };
    return (
   

    <div className="container">
      <div className="mapTitle"><span className='mapF'>Location/Map</span><button className='mapbtn'>View on google maps</button></div>

      <div className='mapView' style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="Hotel"
          />
        </GoogleMapReact>
        <div className="mapdesc"><IoLocation className='location' />Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</div>
      </div></div>
  )
}

export default Map