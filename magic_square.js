class MagicSquare {
  constructor(array) {
    this.flawedSquare = array;
    this.reference = [[8,1,6],[3,5,7],[4,9,2]]
  }


  generatePermutations(){
    //rotate
    //for each
    
  }

  mirrorX(array){
    return
  }

  mirrorX(array){
    return
  }

  rotate90Clockwise(array){
    const rotated = [[],[],[]]
    array.forEach((subArr)=>(
      subArr.forEach((num, index)=>(
        rotated[index].unshift(num)
      ))
    ))
    return rotated
  }

  compareSquares(reference, flawed){
    return
  }













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

export default MagicSquare