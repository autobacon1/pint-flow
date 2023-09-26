import logo from './logo.svg';
import './App.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {



  return (

    <div className="App">

 

      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>

      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  
        <TileLayer 
          attribution='&copy; <a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=wDf3ZgonNxjeaoWRBSAsd2Yw9VnaqWBdhVXRRehCEN3yAn2vBMAfjtW91WFo3yBn"
          subdomains='abcd'
          accessToken='wDf3ZgonNxjeaoWRBSAsd2Yw9VnaqWBdhVXRRehCEN3yAn2vBMAfjtW91WFo3yBn'
        />

        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

    </div>
  );
}

export default App;