class Plane{
  constructor(id) {
    this.id = id
    this.flying = true
    this.airport = null
    this.conditions = new Conditions()
  }

  land(airport){
    this.errors_land(airport)
  };

  takeoff(airport){
    this.errors_takeoff(airport)
  };

  errors_land(airport) {
    if (airport.isStormy()){
      throw new Error("Can't land, too stormy!");
    }else if (this.flying == false){
      throw new Error("Already landed!");
    }else if (airport.full()) {
      throw new Error("Airport is full!");
    }else {
      this.conditions.land(this, airport)
      airport.land(this.id)
    };
  };

  errors_takeoff(airport) {
    if (airport.isStormy()){
      throw new Error("Can't takeoff, too stormy!");
    }else if (this.flying == true){
      throw new Error("Can't takeoff, already flying!");
    }else if (airport.contains(this.id) == false) {
      throw new Error("Can't takeoff, wrong Airport!");
    }else {
      airport.takeoff(this.id)
      this.conditions.takeoff(this, airport)
    };
  };

}
