// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
    constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  volume() {
    let cuboidVolume = this.length * this.width * this.height
    return cuboidVolume;
  }
  surfaceArea() {
    let surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return surfaceArea;
  }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(length, width, height) {
    super(length, width, height);
  }
  cubeVolume() {
    let volumeOfACube = Math.pow(this.length, 3);
    return volumeOfACube;
  }
  cubeArea() {
    let areaOfACube = 6 * Math.pow(this.length, 2);
    return areaOfACube;
  }
}

const cubey = new CubeMaker(2, 2, 2);

console.log(cubey.cubeVolume());

console.log(cubey.cubeArea());

///////////////////////////////////////////////////////////////////////
// Below: reformatted with object as constructor parameter
///////////////////////////////////////////////////////////////////////

// 1. Copy and paste your prototype in here and refactor into class syntax.
/* class CuboidMaker {
  constructor(dimensions) {
  this.length = dimensions.length;
  this.width = dimensions.width;
  this.height = dimensions.height;
  }
  volume() {
    let cuboidVolume = this.length * this.width * this.height
    return cuboidVolume;
  }
  surfaceArea() {
    let surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return surfaceArea;
  }
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(dimensions) {
  super(dimensions);
  }
  cubeVolume() {
    let volumeOfACube = Math.pow(this.length, 3);
    return volumeOfACube;
  }
  cubeArea() {
    let areaOfACube = 6 * Math.pow(this.length, 2);
    return areaOfACube;
  }
}

const cubey = new CubeMaker({length: 2, width: 2, height: 2});

console.log(cubey.cubeVolume());

console.log(cubey.cubeArea()); */ 

