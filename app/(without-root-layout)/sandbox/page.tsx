"use client";
import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geoUrl from "./countries.geo.json";

export default function MapChart() {
  return (
    <div className="w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          //   rotate: [-10.0, -52.0, 0],
          //   center: [-5, -3],
          scale: 100,
        }}
        // width={1000}
        // height={1000}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#FF5533"
                stroke="#000000"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
