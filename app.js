
let cords = [];
let xhttp = new XMLHttpRequest();

function success(pos) {
  let crd = pos.coords;
  console.log(crd);
  cords.push(pos.coords.latitude);
  cords.push(pos.coords.longitude);
  }


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error);