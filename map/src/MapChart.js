import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule
} from "react-simple-maps";
import allStates from "./data.json";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };

const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 850
      }}
    >
      <Graticule display="none" />

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
                onMouseEnter={() => {
                  const { NAME, POP_EST } = geo.properties;
                  setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
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
