// const guest1 = {
//     name: 'johnny',
//     email: 'johnny@hotmail.com',
//     visitTime: '9:10am',
//     phone: '604 555 5555',
//     printGuest: function(){console.log(`${this.name} visited us at ${this.visitTime}`); return this}
// }
// const guest2 = {
//     name: 'Alan',
//     email: 'alan604@yahoo.com',
//     visitTime: '10:30am',
// }
// function Guest(name, email, visitedTime, phone) {
//     this.name = name;
//     this.email = email;
//     this.visitedTime = visitedTime;
//     this.phone = phone;
//     this.printGuest = function() {
//       console.log(`${this.name} visited us at ${this.visitTime}`);
//     }; return 'dont fire off this constructor as a regular function'
//   }

//   const g1 = new Guest('Johnny', 'johnny@hotmail.com', '11am', '604 555 5555',)
//   const g2 = new Guest('Alan', 'alan@hotmail.com', '9am', '604 4444 4444',)
//   console.log(g2 instanceof Guest)
//   console.log(guest1 instanceof Guest)

// function Counter(count=0,step=1){
//     this.count = count;
//     this.step = step;
// }
// Counter.prototype.inc = function(){this.count+=this.step; return this};
// Counter.prototype.dec = function(){this.count-=this.step; return this};
// Counter.prototype.now = function(){console.log(this.count); return this}

// const c1 = new Counter();
// const c2 = new Counter(10,5);
// c2.inc().inc().inc().now()

// function Dog(name){
//     this.name = name;
// }
// Dog.prototype.bark = function(){
//     console.log(`${this.name} woof woof`); return this
// }
// const baily = new Dog('bailey')
// const winston = new Dog('winston')

// function DoggoFighter(name, specialAbility){
//     this.name = name;
//     this.specialAbility = specialAbility;
// }
// DoggoFighter.prototype.useSpecial = function(){
//     console.log(`${this.name} uses the ability ${this.specialAbility}`)
// }


// const drogon = new DoggoFighter('drogon', 'firee breath')
// Object.setPrototypeOf(DoggoFighter.prototype, Dog.prototype)
// drogon.useSpecial()
// drogon.bark()

class Dog {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    bark(){console.log(`${this.name} woof woof`)}
}

const winston = new Dog('winston', 25)
// console.log(winston)

class DoggoFighter extends Dog{
    constructor(name, age, specialAbility){
        super(name,age);
        this.specialAbility = specialAbility;
    }
    useSpecial(){console.log(`${this.name} uses the ability ${this.specialAbility}`)}

    bark(){
        // Dog.prototype.bark()
        this.__proto__.__proto__.bark()
        console.log('Dogoo fighter bark is to loud')}
}

const drogon = new DoggoFighter('drogon', 10, 'firebreath')

// console.log(drogon)
drogon.bark()