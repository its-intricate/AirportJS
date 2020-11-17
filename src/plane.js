class Plane{
  constructor(id) {
    this.id = id
    this.flying = true
  }

  land(airport){
    airport.land(this.id)
    this.flying = false
  };

  takeoff(airport){
    airport.takeoff(this.id)
    this.flying = true
  };

}
