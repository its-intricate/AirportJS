describe('Weather',function(){
  describe('weather as a function',function(){
    var weather = new Weather();
    it('check whether weather is stormy',function(){
      expect(weather.stormy()).toMatch(/true|false/);
    });
  });
});
