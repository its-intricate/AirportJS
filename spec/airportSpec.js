describe('Airport',function(){
  var plane;
  var airport;
  beforeEach(function () {
    plane = new Plane(1);
    airport = new Airport(10);
  });

  describe('land',function(){
    it('adds plane id to landed planes array',function(){
      plane.land(airport);
      expect(airport.landed_planes).toContain(plane.id);
    });
  });

  describe('takeoff',function(){
    it('removes plane id from landed planes array',function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(airport.landed_planes).not.toContain(plane.id);
    });
  });
}); 
