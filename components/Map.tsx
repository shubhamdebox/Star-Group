import React, { useState } from "react";
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
    <div className="">
    <div className={`max-w-7xl mx-auto grid justify-center pt-10 text-4xl  lg:text-5xl ${myFont.className}`}>
        <p>{`Our Reach`}</p>
    </div>
    <div className="max-w-7xl mx-auto py-10 px-5">
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
              minimumClusterSize={2}
              maxZoom={20}
              zoomOnClick={true}
              styles={[
                {
                  url: "/cluster/m1.png",
                  height: 26,
                  width: 26,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "/cluster/m2.png",
                  height: 29,
                  width: 29,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "/cluster/m3.png",
                  height: 34,
                  width: 34,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "/cluster/m4.png",
                  height: 40,
                  width: 40,
                  fontFamily: "Lato",
                  textColor: "#FFF",
                },
                {
                  url: "/cluster/m5.png",
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
                          <div className=" ">
                            <a href={obj.websiteUrl} target="_blank">
                              <div className="flex space-x-2">
                                <div>
                                <Image
                                  src={obj?.mainImage?.url || "/"}
                                  alt={"website url"}
                                  width={150}
                                  height={40}
                                
                                />
                                </div>
                                <div className="flex flex-col space-y-2">
                                <p className="font-bold">{obj.ventureName}</p>
                                {obj.venturestatus != "Active" ? <p>{obj.venturestatus}</p> : ""}
                                <p>{obj.about}</p>
                                </div>
                              </div>
                            </a>
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
    </div>
  );
};

export default Map;
