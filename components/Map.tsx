import { MapContainer, TileLayer, Popup, Polyline, CircleMarker } from 'react-leaflet';;
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

const multiPolyline: [number, number][][] =
    [
        [
            [49.2861184990615, -123.11158038924412],
            [49.282539158679576, -123.11862343224203],
            [49.27460459979303, -123.12188919345208],
            [49.26653997127544, -123.11563073224309],
            [49.262829971274925, -123.11451917457221],
            [49.24922056862075, -123.11585920868123],
            [49.2331482655285, -123.11662064573841],
            [49.22640837602466, -123.11610415597644],
            [49.20967704399602, -123.11701866293129],
            [49.195549103910935, -123.12607444813916],
            [49.18396848397822, -123.13642747457689],
            [49.17483783463341, -123.13643016320805],
            [49.1681349122144, -123.1363047934521],
        ],
        [
            [49.195549103910935, -123.12607444813916],
            [49.19668127126503, -123.14631327457617],
            [49.19303905983603, -123.15786854574083],
            [49.19420857126479, -123.1782618745764]
        ]
    ]

const redOptions = { color: 'red' }
const orangeOptions = { color: 'orange' }
const fillBlueOptions = { color: '#6495ED' }

const center: [number, number] = [49.25299, -123.00600];

const Map = () => {
    return (
        <MapContainer
            style={{ height: "100vh" }}
            center={[49.241257258705964, -123.11854366108025]} zoom={13} scrollWheelZoom={true} // zoom in/out by scrolling
        >
            
            <TileLayer
                attribution='&copy; <a href="https://github.com/IngridChou/Canada-line.git">By Ingrid Chou</a> contributors' //put repository url here
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CircleMarker center={[49.2861184990615, -123.11158038924412]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Waterfront Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.282539158679576, -123.11862343224203]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Vancouver City Centre
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.27460459979303, -123.12188919345208]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Yaletown-Roundhouse Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.26653997127544, -123.11563073224309]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Olympic Village Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.262829971274925, -123.11451917457221]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Broadway-City Hall Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.24922056862075, -123.11585920868123]} pathOptions={redOptions} radius={15}>
                <Popup>
                    King Edward Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.2331482655285, -123.11662064573841]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Oakridge-41st Avenue Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.22640837602466, -123.11615415597644]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Langara-49th Avenue Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.20967704399602, -123.11701866293129]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Marine Drive Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.195549103910935, -123.12607444813916]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Bridgeport Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.18396848397822, -123.13642747457689]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Aberdeen Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.17483783463341, -123.13643016320805]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Lansdowne Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.1681349122144, -123.1363047934521]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Brighouse Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.19668127126503, -123.14631327457617]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Templeton Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.19303905983603, -123.15786854574083]} pathOptions={redOptions} radius={15}>
                <Popup>
                    Sea Island Centre Station
                </Popup>
            </CircleMarker>
            <CircleMarker center={[49.19420857126479, -123.1782618745764]} pathOptions={redOptions} radius={15}>
                <Popup>
                    YVR-Airport Station
                </Popup>
            </CircleMarker>
            <Polyline pathOptions={fillBlueOptions} positions={multiPolyline} />
        </MapContainer>
    )
}

export default Map;