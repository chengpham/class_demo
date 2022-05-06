const side = process.argv.splice(2);
const [side1,side2,side3] = [parseFloat(side[0]),parseFloat(side[1]),parseFloat(side[2])];
if (side.length == 3){
    if (side1 + side2 >= side3 || side1 + side3 >= side2 || side2 + side3 >= side1){
        const perimeter = (side1 + side2 + side3) / 2;
        const area = perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3);
        console.log("Perimeter: ", side1+side2+side3);
        console.log("Area: ", Math.sqrt(area));
    }
} else {
    console.log("Impossible triangle!");
}
