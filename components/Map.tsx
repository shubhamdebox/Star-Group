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
const techsans = localFont({
  src: "../public/Technique+Sans.otf",
  weight: "400",
});
const myFont = localFont({ src: "../public/nimbussandext.ttf" });

const Map = ({ value }: any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCFrUm9HpYqW8Rs74C1xQxdVhF3IjcUDpQ",
    libraries: ["places"],
  });

  const [center, setCenter] = useState({
    lat: 38.72869695056362,
    lng: -80.73035958807661,
  });

  const [places, setPlaces] = useState<any[]>(value.ventures);
  const [zoom, setZoom] = useState(6);
  const [selectedMarker, setSelectedMarker] = useState<string>("");

  return (
    <div className="">
      <div
        className={`max-w-7xl mx-auto grid justify-center pt-5 text-center space-y-6`}
      >
        <div className={`text-4xl  lg:text-5xl ${myFont.className}`}>
          <p>{`Our Reach`}</p>
        </div>
        <p className="md:text-lg max-w-4xl px-3 md:px-0">
          {
            "Starting with the American Star Alliance in 2002, we have come a long way with multiple ventures in hospitality, cosmetology and IT staffing based in Indiana, Pennsylvania and New Jersey."
          }
        </p>
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
              mapContainerStyle={{
                margin: "0 auto",
                width: "80%",
                height: "65vh",
              }}
            >
              {places.length > 0 && (
                <>
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
                                  <Link href={obj.websiteUrl} target="_blank">
                                    <>
                                      <div className="flex space-x-2">
                                        <div>
                                          <Image
                                            src={obj?.mainImage?.url || "/"}
                                            alt={"website url"}
                                            width={150}
                                            height={0}
                                            className="h-full"
                                          />
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                          <p
                                            className={`font-bold ${myFont.className} text-lg`}
                                          >
                                            {obj.ventureName}
                                          </p>
                                          {obj.venturestatus != "Active" ? (
                                            <p
                                              className={`${myFont.className}`}
                                            >
                                              {obj.venturestatus}
                                            </p>
                                          ) : (
                                            ""
                                          )}
                                          <p
                                            className={`${techsans.className}`}
                                          >
                                            {obj.about}
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  </Link>
                                </div>
                              </InfoWindowF>
                            ) : null}
                          </MarkerF>
                        ))}
                      </div>
                    )}
                  </MarkerClustererF>
                </>
              )}
            </GoogleMap>
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
