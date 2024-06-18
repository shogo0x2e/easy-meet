"use client";

import {
  APIProvider,
  Map,
  type MapMouseEvent,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { env } from "~/env";

export default function Home() {
  const [markerRef, marker] = useMarkerRef();

  useEffect(() => {
    if (!marker) return;
  }, [marker]);

  return (
    <APIProvider apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        onClick={(e: MapMouseEvent) => {
          console.log(e);
        }}
      >
        <Marker
          ref={markerRef}
          position={{ lat: 22.54992, lng: 0 }}
          onClick={() => {
            window.alert("OK");
          }}
        />
      </Map>
    </APIProvider>
  );
}
