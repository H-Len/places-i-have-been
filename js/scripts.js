//business logic for places I've been
function TravelList() {
  this.places = [];
  this.currentId = 0;
}

TravelList.prototype.addPlace = function(place) {
  this.places.push(place);
}

TravelList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(city, country, date) {
  this.city = city;
  this.country = country;
  this.date = date;
}

Place.prototype.visit = function() {
  return this.city + ", " + this.country;
}
