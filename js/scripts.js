//business logic for places I've been
function TravelList() {
  this.places = [];
  this.currentId = 0;
}

TravelList.prototype.addPlace = function(place) {
  place.id = this.assignId();
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


TravelList.prototype.findPlace = function(id) {
  for (var i=0; i < this.places.length; i++) {
    if (this.places[i] && this.places[i].id === id) {
        return this.places[i];
    }
  };
  return false;
}


TravelList.prototype.deletePlaces = function(id) {
  for (var i=0; i < this.places.length; i++) {
    if (this.places[i] && this.places[i].id === id) {
      delete this.places[i];
      return true;
    }
  };
  return false;
}

//user interface
$(function() {
  
});
