
let cords = [];
let xhttp = new XMLHttpRequest();

const success = (pos) => {
  let crd = pos.coords;
  console.log(crd);
  cords.push(pos.coords.latitude);
  cords.push(pos.coords.longitude);
  }


const error = (err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);