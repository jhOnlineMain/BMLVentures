import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Map = (kmlSrc) => {
    <div 
    id="map"
    style={{
        height: '360px',
        width: '300px',
        overflow: 'hidden',
        float: 'left',
        border: 'thin solid #333'
    }}
 ></div>

    let map
    function initMap() {
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
      }
      


}

export default Map 