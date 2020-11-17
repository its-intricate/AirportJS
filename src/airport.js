class Airport {
  constructor(capacity) {
    this.name = "Airport"
    this.capacity = capacity
    this.landed_planes = []
  }

  land(id){
    this.landed_planes.push(id)
  };

  takeoff(id){
    var pos = this.landed_planes.map(function(x){return x.landed_planes;}).indexOf('id');
    this.landed_planes.splice(pos)
  };

  full(){
    return this.landed_planes.length >= this.capacity
  };

  contains(id){
    return this.landed_planes.includes(id)
  };

  isStormy(){
    var weather = new Weather()
    return weather.stormy()
  }
}
