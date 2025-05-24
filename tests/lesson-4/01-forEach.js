const numbers = [1, 2, 3];

//1.1  In lần lượt từng phần tử của numbers.
numbers.forEach((number) => {
    console.log(number);
})

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
let total = 0
numbers.sort();
numbers.forEach((number) => {
    total = total + number
})
console.log("Cách 1 foreach Tống bằng", total)
total2 = numbers.reduce((accum, value) => accum + value)
console.log("Cách 2 dùng reduce Tống bằng", total2);
console.log("Số nhỏ nhất", numbers[0]);
console.log("Số lớn nhất", numbers[(numbers.length) - 1]);

///1.3 Tao mảng mới từ numbers, mỗi phần tử nhân đôi
let newArr = [];
numbers.forEach((number) => {
    newArr.push(number * 2)
})
console.log("Mảng mới ", newArr)
