describe('Conditions',function(){

  var plane;
  var airport;
  var conditions;
  beforeEach(function () {
    plane = new Plane(1);
    airport = new Airport(10);
    conditions = new Conditions();
  });

  describe('landing conditions',function(){
    it('should not be flying',function(){
      plane.land(airport)
      expect(plane.flying).toEqual(false)
    });
    it('landed at stated airport',function(){
      plane.land(airport)
      expect(plane.airport).toEqual(airport)
    });
  });
  describe('takeoff conditions',function(){
    it('should be flying',function(){
      plane.land(airport)
      plane.takeoff(airport)
      expect(plane.flying).toEqual(true)
    });
    it('expect no airport',function(){
      plane.land(airport)
      plane.takeoff(airport)
      expect(plane.airport).toEqual(null)
    });
  });
});
