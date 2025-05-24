const str = "Playwright";
//2.1 in lần lượt từng kí tự của str
for (let char of str) {
    console.log(char);
}

//2.1 tạo mảng đảo ngược từ string
let swapArr = []
for (let char of str) {
    swapArr.push(char)
}
console.log("Mảng đảo ngược :", swapArr.reverse())

//2.3 tìm và in vi trí đầu tiên và cuối cùng của giá trị 3 trong arr
const arr = [1, 2, 3, 4, 3, 55, 23];
console.log('Vị trí đầu của số 3 là', arr.indexOf(3))
console.log('Vị trí cuối của số 3 là', arr.lastIndexOf(3))

//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr index đầu vs index cuối giống nhau
const dupArr = [1, 2, 3, 1, 2, 4, 5];
let singleNum = dupArr.filter(num => dupArr.indexOf(num) === dupArr.lastIndexOf(num))
console.log(singleNum)

