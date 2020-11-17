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

  describe('full',function(){
    it('states whether capacity is full',function(){
      airport = new Airport(1);
      plane.land(airport);
      expect(airport.capacity).toEqual(1);
      expect(airport.full()).toEqual(true);
    });
    it('full is false when not at capacity',function(){
      expect(airport.full()).toEqual(false);
    });
  });
  describe('contains?',function(){
    it('states if airport contains a plane',function(){
      plane.land(airport)
      expect(airport.contains(plane.id)).toEqual(true);
    });
  });
});
