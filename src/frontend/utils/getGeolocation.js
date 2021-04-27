const successs = (position) => {
  console.log(position)
  const crd = position.coords;
  console.log(crd)
}

const error = (err) => {
  console.error('error get your position', err)
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
}



const getGeolocation = () => {
  const geolocation = navigator.geolocation;
  if (geolocation) {
    const geocoder = new google.maps.Geocoder;
    console.log(geocoder())
    console.log('geolocation enable in navigator')
    geolocation.getCurrentPosition(successs, error, options)

  } else {
    console.log('geolocation disable in navigator')
  }
}



export default getGeolocation
