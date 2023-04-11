class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, val) => acc + val, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      const [a, b, c] = this.sides;
      return (
        this.countSides === 3 &&
        a + b > c &&
        a + c > b &&
        b + c > a
      );
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      const [a, b, c, d] = this.sides;
      return (
        this.countSides === 4 &&
        a === b &&
        b === c &&
        c === d
      );
    }
  
    get area() {
      const [a] = this.sides;
      return a ** 2;
    }
  }