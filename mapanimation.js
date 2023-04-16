// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Add your own access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiamNvaG4iLCJhIjoiY2xnamthcm5kMTY4YzNmcG11eWVkeDd5ayJ9.GDELMcZ3-MK9WSjNOTr00g";
 const styles=["mapbox://styles/mapbox/streets-v11","mapbox://styles/mapbox/streets-v11","mapbox://styles/jcohn/clgjnsyxa008c01rum7wailr9","mapbox://styles/jcohn/clgjnuzg8008d01ruri9f96uo","mapbox://styles/jcohn/clgjnw1hd000b01mbp0p1m8yv"]
let countStyle=0;
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  //this is the basic nature style I made in mapbox 
  style: styles[countStyle],
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// adds a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat(busStops[0]).addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  
  // Uses counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) {
      counter = 0;
    
      // code for changing map styles after every iteration.
      if(countStyle>styles.length)
      {
        countStyle=0
      } else {countStyle++;}
      map.setStyle(styles[countStyle]);

    
    }
    //moving bus 
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

move();
