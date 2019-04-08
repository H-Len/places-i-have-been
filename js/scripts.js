//business logic for places I've been

function Place(city, country, date) {
  this.city = city;
  this.country = country;
  this.date = date;
}

Place.prototype.visit = function() {
  return this.city + ", " + this.country;
}
