import React from 'react';
import './App.css';

window.addEventListener('load', () => {
  let long;
  let lat;
  let h1 = document.querySelector('h1')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude

      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `${proxy}https://api.darksky.net/forecast/7feeba086d5bba97a3311db9757129cb/${lat},${long}`

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
          const { temperature, summary } = data.currently;

        })
    });

  } else {
    h1.innerHTML = "Please enable geolocation"
  }
})


function App() {
  return (
    <div className="App">
      <h1></h1>
    </div>
  );
}

export default App;
