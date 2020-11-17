class Airport {
  constructor(capacity) {
    this.capacity = capacity
    this.landed_planes = []
  }

  land(id){
    this.landed_planes.push(id)
  };

  takeoff(id){
    var pos = this.landed_planes.map(function(x){return x.landed_planes;}).indexOf('id');
    this.landed_planes.splice(pos)
    // this.landed_planes.forEach(index)()
    //   if this.landed_planes[index] == id
    //     this.landed_planes.splice(index)
  };

}
