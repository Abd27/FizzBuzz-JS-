describe("fizzBuzz", function(){
  let fizzBuzz
  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("multiple of 3", function(){
    it("replace 3 with fizz", function(){
      // fizzBuzz.play(3);
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });

    it("replaces all multiples of 3", function(){
      expect(fizzBuzz.play(9)).toEqual("Fizz");
    });

  });
})