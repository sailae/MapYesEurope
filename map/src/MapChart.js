import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { useHistory } from "react-router-dom";
import allStates from "./data.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
  const history = useHistory();
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
              const cur = allStates.find(s => s.val === geo.id);
              return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#fff"
                stroke="#8BBE86"
                onClick={() => {
                  let path = cur.find("href");
                  history.pushState(path);
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none"
                  },
                  hover: {
                    fill: "#8BBE86",
                    outline: "none",
                    cursor: "pointer"
                  },
                  pressed: {
                    fill: "#F79320",
                    outline: "#F79320",
                    stroke: "#F79320"
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
