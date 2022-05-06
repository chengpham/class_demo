
class Turtle{
    constructor(x, y){
        this.x = x
        this.y = y
        this.dir = 'e'
        this.points = [[this.x, this.y]]
        this.arrPoints = [[this.x, this.y]]
    }
    allPoints(){
        console.log(this.arrPoints); 
    }
    print(){
        const grid = [];
        for(let i=0; i<Math.max(...this.arrPoints.map(i=>[i[1]])) +1; i++){
            grid.push(Array(Math.max(...this.arrPoints.map(i=>[i[0]])) ).fill(' '));
        }
        for(let [i,j] of this.arrPoints){
            grid[j][i] = 'o'
        }
        for(let i=0; i < grid.length; i++){
            console.log(grid[i].join(''))
        }
    }
    forward(n) {
        this.move = 0
        while(this.move<n){
            if (this.dir =='n'){
                this.y--
            } else if (this.dir =='e'){
                this.x++
            } else if (this.dir =='s'){
                this.y++
            } else if (this.dir =='w'){
                this.x--
            }
            this.move++
            this.arrPoints.push([this.x, this.y])
        }
        this.points.push([this.x, this.y])
        return this
    }
    right(){
        if (this.dir=='n'){
            this.dir='e'
        } else if (this.dir=='e'){
            this.dir='s'
        } else if (this.dir=='s'){
            this.dir='w'
        } else if (this.dir=='w'){
            this.dir='n'
        } 
        return this
    }
    left(){
        if ( this.dir=='n'){
            this.dir='w'
        } else if (this.dir=='e'){
            this.dir='n'
        } else if (this.dir=='s'){
            this.dir='e'
        } else if (this.dir=='w'){
            this.dir='s'
        } 
        return this
    }
}

// speedturtle = new Turtle(0,0).forward(4).right().forward(5).right().forward(2).print()
// [ '0,0', '2,0', '2,5', '0,5' ] 

// speedturtle1 = new Turtle(0, 4).forward(3).left().forward(3).right().forward(3).print()
// [ '0,4', '3,4', '3,1', '6,1' ] 

// speedturtle2 = new Turtle(0,0).forward(3).right().forward(2).print()
// [ '0,0', '3,0', '3,2' ]

// speedturtle3 = new Turtle(0, 4).forward(3).left().forward(3).print()
// [ '0,4', '3,4', '3,1' ]

speedturtle4 = new Turtle(0, 4).forward(3).left().forward(3).right().forward(5).right().forward(8).right().forward(5).right().forward(3).left().forward(3).print()
// ['0,4', '3,4', '3,1', '8,1', '8,9', '3,9', '3,6', '0,6']

