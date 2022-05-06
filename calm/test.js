// PROBLEM 1:
function teams(n){
    let resultA = [], resultB = []
    let sumA = 0, sumB = 0
    for (let i=0; i < n.length; i++){
        if (resultA.length < n.length/2 && sumA < sumB){
            resultA.push(sortedArray[i])
            sumA += sortedArray[i]
        } else {
            resultB.push(sortedArray[i])
            sumB += sortedArray[i]
        }
    }
    return `TeamA: ${resultA} and ${sumA}, TeamB: ${resultB} and ${sumB}`
}
console.log(teams([8,5,6,9,3,8,2,4,6,10,8,5,6,1,7,10,5,3,7,6]))
    
// PROBLEM 2: 

// <?php
// $im = ImageCreate(200,200);
// $white = ImageColorAllocate($im,0xFF, 0xFF, 0xFF);
// $black = ImageColorAllocate($im, 0x00, 0x00, 0x00);
// ImageFilledRectangle($im,50,50,150,150,$black);
// header('Content-Type: image/jpeg');
// ImageJPEG($im);
// ?>

// PROBLEM 3: 
// SELECT firstName, lastName, address, city, provice, postalCode
// FROM Employees
// INNER JOIN Addresses ON Employees.employeeID = Addresses.employeeID
// INNER JOIN Provinces On Addresses.provinceID = Provinces.provinceID;

    
