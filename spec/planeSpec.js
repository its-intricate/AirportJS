describe('Plane',function(){
  var plane;
  var airport;
  beforeEach(function () {
    plane = new Plane(1);
    airport = new Airport(10);
  });

  describe('land',function(){
    it('lands at an airport',function(){
      plane.land(airport);
      expect(plane.flying).toEqual(false);
    });
  });

  describe('takeoff',function(){
    it('takes off from an airport',function(){
      plane.land(airport);
      plane.takeoff(airport);
      expect(plane.flying).toEqual(true);
    });
  });

});
