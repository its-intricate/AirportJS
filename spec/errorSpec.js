describe('Errors',function(){

  var plane;
  var airport;
  beforeEach(function () {
    plane = new Plane(1);
    airport = new Airport(10);
  });

  describe('landing errors',function(){
    it('should not land if stormy',function(){
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function () {plane.land(airport);
      }).toThrowError("Can't land, too stormy!");
    });
    it('should not land if landed',function(){
      spyOn(airport,'isStormy').and.returnValue(false);
      plane.land(airport)
      expect(function () {plane.land(airport);
      }).toThrowError("Already landed!");
    });
    it('should not land if airport is full',function(){
      airport = new Airport(0)
      spyOn(airport,'isStormy').and.returnValue(false);
      expect(function () {plane.land(airport);
      }).toThrowError("Airport is full!");
    });
  });
  describe('takeoff errors',function(){
    it('should not takeoff if stormy',function(){
      plane.land(airport)
      spyOn(airport,'isStormy').and.returnValue(true);
      expect(function () {plane.takeoff(airport);
      }).toThrowError("Can't takeoff, too stormy!");
    });
    it('should not takeoff if flying',function(){
      spyOn(airport,'isStormy').and.returnValue(false);
      expect(function () {plane.takeoff(airport);
      }).toThrowError("Can't takeoff, already flying!");
    });
    it('should not takeoff if wrong airport is given',function(){
      spyOn(airport,'isStormy').and.returnValue(false);
      plane.land(airport)
      airport2 = new Airport(10)
      spyOn(airport2,'isStormy').and.returnValue(false);
      expect(function () {plane.takeoff(airport2);
      }).toThrowError("Can't takeoff, wrong Airport!");
    });
  });
});
