"use client"
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader';

declare const google: any;

export default function Map() {
    const mapRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: 'AIzaSyCu7XKLXSg1v_OZMQQgvUv02wy-XIel22I' as string,
                version: 'weekly'
            })

            const { Map, InfoWindow } = await loader.importLibrary('maps');
            const { Marker } = await loader.importLibrary('marker');

            const position = {
                lat: 3.4834604263305664,
                lng: -76.48432922363281,
            }

            // map options
            const mapOptions = google.maps.MapOptions = {
                center: position,
                zoom: 14,
                mapId: 'DEMO_MAP_ID'
            }

            // setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new Marker({
                map: map,
                position: position
            })

            const infoWindow = new InfoWindow({
                content: `<div>
                            <img src='/logo.png' width="100px" height="100px" alt='image'/>
                            <h1>Pestañas divinas Ladylashes</h1>
                            <p>Ubicación: Cra1a9bis #73a23.</p>
                          </div>`,
            });

            marker.addListener('click', () => {
                infoWindow.open({
                    anchor: marker,
                    map,
                });
            });
        }

        initMap();
    }, []);
  return (
    <div className='h-[500px] w-[500px] max-sm:w-[370px] rounded-md' ref={mapRef}>

    </div>
  )
}
