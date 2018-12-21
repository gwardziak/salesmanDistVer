let getFitness = tour => {
  if (tour.fitness == 0) {
    tour.distance = getDistance(tour);
    tour.fitness = 1 / tour.distance;
  }
  return tour.fitness;
};

let getDistance = tour => {
  let tourArr = tour;
  if (tour.distance == 0) {
    let tourDistance = 0;
    // Loop through our tour's cities
    for (let cityIndex = 0; cityIndex < tourArr.tour.length; cityIndex++) {
      // Get city we're travelling from
      let fromCity = tourArr.tour[cityIndex];
      // City we're travelling to
      let destinationCity;
      // Check we're not on our tour's last city, if we are set our
      // tour's final destination city to our starting city
      if (cityIndex + 1 < tourArr.tour.length) {
        destinationCity = tourArr.tour[cityIndex + 1];
      } else {
        destinationCity = tourArr.tour[0];
      }
      // Get the distance between the two cities
      tourDistance += Math.floor(distanceTo(fromCity, destinationCity));
    }
    distance = tourDistance;
  }
  return distance;
};

var distanceTo = (fromCity, destCity) => {
  let xDistance = Math.abs(fromCity.x - destCity.x);
  let yDistance = Math.abs(fromCity.y - destCity.y);
  let distance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  return distance;
};

module.exports = getFitness;
