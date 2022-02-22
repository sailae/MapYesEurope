import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import allStates from "./data.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 850
      }}
    >

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = allStates.find(s => s.value === geo.rsmKey);
              return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={(e) => {
                  if (cur !== undefined) {
                    e.preventDefault();
                    window.parent.location.href=cur.href;
                  }
                }}
                style={{
                  default: {
                    fill: cur !== undefined? '#8BBE86': '#EDEAE5',
                    stroke: cur !== undefined? '#72A46D': '#E3DFD9',
                    outline: "none"
                  },
                  hover: {
                    fill: cur !== undefined? '#72A46D': '#EDEAE5',
                    stroke: cur !== undefined? 'stroke': '#E3DFD9',
                    outline: "none",
                    cursor: cur !== undefined? 'pointer': "default"
                  },
                  pressed: {
                    fill: cur !== undefined? '#72A46D': '#EDEAE5',
                    outline: "none",
                    stroke: cur !== undefined? '#72A46D': '#E3DFD9'
                  }
                }}
              />
            )})
          }
        </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
