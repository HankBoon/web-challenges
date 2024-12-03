import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher
  );
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  const coords = { longitude: data.longitude, latitude: data.latitude };

  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
