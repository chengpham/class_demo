
function fillRectangle(width, height, char){
    let arr = [];
    let rec = [];
    for (let i = 0; i < width; i++) {
        arr.push(char); 
    }
    for (let i = 0; i < height; i++) {
        rec.push(arr);
    }
    return rec;
  }
  console.log(fillRectangle(3,5, '#'));

function rectangleToString(arr){
    return arr.join("\n");
}

console.log(rectangleToString(fillRectangle(5,3, '#')))