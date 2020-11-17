class Conditions {
  land(plane, airport){
    plane.flying = false
    plane.airport = airport
  };

  takeoff(plane, airport){
    plane.flying = true
    plane.airport = null
    this.confirmation(plane, airport)
  };

  confirmation(plane, airport){
    console.log(`${plane.id} has left ${airport.name}`)
  };
}
