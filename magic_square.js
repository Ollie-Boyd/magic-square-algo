class MagicSquare {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter can be used like this example.area as if it were a property.
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }

  //silly example 
  set area(value) {
    const sideLength = Math.sqrt(value)
    this.height, this.width = sideLength;
  }

}
