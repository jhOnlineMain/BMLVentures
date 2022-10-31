import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const Map = () => {
  const Qdata = useStaticQuery(graphql`
    query  {
      wpPage(slug: {eq: "about"}) {
        about {
          latitude
          longitude
        }
      }
      }

  `)
  let latitude = parseInt(Qdata.wpPage.about.latitude)
  let longitude = parseInt(Qdata.wpPage.about.longitude)

    const containerStyle = {
        width: '400px',
        height: '400px'
    }
      
    const center = {
        lat: latitude,
        lng: longitude
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA5bcQe5DXfs35wRxj9dFOXQjQSmhBBzCQ"
    })
    
    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, []);
      
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, []);

      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>    
      
    // <div 
    // id="map"
    // style={{
    //     height: '360px',
    //     width: '300px',
    //     overflow: 'hidden',
    //     float: 'left',
    //     border: 'thin solid #333'
    // }}
    // >
    // </div>

    // function initMap() {
        // map = new google.maps.Map(document.getElementById('map'), {
        //   center: new google.maps.LatLng(-19.257753, 146.823688),
        //   zoom: 2,
        //   mapTypeId: 'terrain'
        // });

        // var kmlLayer = new google.maps.KmlLayer(kmlSrc, {
        //   suppressInfoWindows: true,
        //   preserveViewport: false,
        //   map: map
        // });
        // kmlLayer.addListener('click', function(event) {
        //   var content = event.featureData.infoWindowHtml;
        //   var testimonial = document.getElementById('capture');
        //   testimonial.innerHTML = content;
        // });
      //}
}

export default React.memo(Map) 