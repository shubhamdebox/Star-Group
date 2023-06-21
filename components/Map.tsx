import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  MarkerClustererF,
  OverlayViewF,
  InfoWindowF,
  InfoBoxF,
} from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const myFont = localFont({ src: '../public/nimbussandext.ttf' })
const techsans = localFont({ src: '../public/Technique+Sans.otf', weight: "400" },)

const Map = ({ value }: any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCr4VwBanytO5rAGUOyhJ3VgNCltEYCUeI",
    libraries: ["places"],
  });

  

  const [center, setCenter] = useState({
    lat: 39.83441344114856,
    lng: -86.08096143695595,
  });

  const [places, setPlaces] = useState<any[]>(value.ventures);
  const [zoom, setZoom] = useState(7);
  const [selectedMarker, setSelectedMarker] = useState<string>("");

  return (
    <div className="bg-lightwhite">
    <div className={`max-w-7xl mx-auto grid justify-center py-10 bg-lightwhite text-4xl ${myFont.className}`}>
        <p>{`Our Location`}</p>
    </div>
      {isLoaded && (
        <>
          <GoogleMap
            center={center}
            zoom={zoom}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: false,
            }}
            mapContainerStyle={{ width: "100%", height: "85vh" }}
          >
            {places.length > 0 && <>
            
             <MarkerClustererF
              averageCenter
              ignoreHidden
              enableRetinaIcons
              gridSize={40}
              minimumClusterSize={4}
              maxZoom={20}
              zoomOnClick={true}
              styles={[
                {
                  url: "../public/cluster/m1.png",
                  height: 26,
                  width: 26,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "../public/cluster/m2.png",
                  height: 29,
                  width: 29,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "../public/cluster/m3.png",
                  height: 34,
                  width: 34,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "../public/cluster/m4.png",
                  height: 40,
                  width: 40,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "../public/cluster/m5.png",
                  height: 46,
                  width: 46,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
              ]}
            >
              {(clusterer) => (
                <div>
                  {places?.map((obj, i) => (
                    <MarkerF
                      key={i}
                      position={{
                        lat: obj.geolocation.latitude,
                        lng: obj.geolocation.longitude,
                      }}
                      clusterer={clusterer}
                      label={{
                        fontSize: "12px",
                        className: "bg-white text-black p-1 text-sm",
                        text: `${obj.ventureName}`,
                      }}
                      icon={""}
                      clickable={true}
                      onClick={() => setSelectedMarker(obj.id.toString())}
                    >
                      {selectedMarker === obj.id ? (
                        <InfoWindowF
                          onCloseClick={() => setSelectedMarker("")}
                          position={{
                            lat: obj.geolocation.latitude,
                            lng: obj.geolocation.longitude,
                          }}
                        >
                          <div className="w-full h-full">
                            <Link href={obj.websiteUrl} target="_blank">
                              <div className=" ">
                                <Image
                                  src={obj.mainImage.url}
                                  alt={"website url"}
                                  width={100}
                                  height={30}
                                />
                                <p className="font-bold">{obj.ventureName}</p>
                                <p>{obj.venturestatus}</p>
                              </div>
                            </Link>
                          </div>
                        </InfoWindowF>
                      ) : null}
                    </MarkerF>
                  ))}
                </div>
              )}
            </MarkerClustererF>
            </> }
           
          </GoogleMap>
        </>
      )}
    </div>
  );
};

export default Map;
