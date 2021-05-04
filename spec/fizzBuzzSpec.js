describe("fizzBuzz", function(){
  let fizzBuzz
  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });
  
  it("replace 3 with fizz", function(){
    // fizzBuzz.play(3);
    expect(fizzBuzz.play(3)).toEqual("Fizz");
  });

  it("replaces all multiples of 3", function(){
    expect(fizzBuzz.play(9)).toEqual("Fizz");
  });

  it("replaces all mutiples of 5 with buzz", function(){
    expect(fizzBuzz.play(5)).toEqual("Buzz");
  });

  it("it replaces mutiples of both 3 and 5 with fizzbuzz", function(){
    expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
  });

  it("return fizzbuzz for 45", function(){
    expect(fizzBuzz.play(45)).toEqual("FizzBuzz");
  }); 

  it("other than above to return the number given", function(){
    expect(fizzBuzz.play(7)).toEqual(7);
  }); 
})
