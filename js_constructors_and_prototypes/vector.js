
class Vector {
    constructor(x , y, z){
        this.x = x
        this.y = y
        this.z = z
    }
    plus(val){this.x += val.x, this.y += val.y, this.z += val.z; return this}
    minus(val){this.x -= val.x, this.y -= val.y, this.z -= val.z; return this}
    magnitude(){return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z)}
}

let v1 = new Vector(4,4,0);
let v2 = new Vector(1,2,2);


// console.log(v1.plus(v2)) // returns Vector {x: 5, y: 6, z: 2}
// console.log(v2.plus(v1)) // returns Vector {x: 5, y: 6, z: 2}
// console.log(v1.minus(v2)) // returns Vector {x: 3, y: 2, z: -2}
// console.log(v2.minus(v1)) // returns Vector {x: -3, y: -2, z: 2}
// console.log(v1.magnitude()) // returns 5.656854249492381
// console.log(v2.magnitude()) // returns 3