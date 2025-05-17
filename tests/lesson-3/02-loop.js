//tổng 1-100
function sumtotal(a, b) {
    let i = a;
    let sum = 0
    for (i = a; i <= b; i++) {
        sum = sum + i
    }
    console.log(sum);
}
sumtotal(1, 100);

//in ra bảng cửu chương từ 2-9
function multable(a, b) {
    for (let i = a; i <= b; i++) {
        for (let j = 1; j <= b; j++) {
            mul = `${i} x ${j} = ${i * j}\t`;;
            console.log(mul)
        } 
    }
}
multable(2, 9)

//Tạo một mảng chứa các số lẻ từ 1 đến 99
function evenArr(a,b){
    let evenumArr=[];
    for (let i =a; i<=b; i++)
    {
        if (i%2 !=0){
            evenumArr.push(i)
        }
    }
    console.log(evenumArr)
}
evenArr (1,99)

//In ra 10 email dựa trên tên người dùng và số thứ tự
function genEmail(username,email,total){
let emaillist=[]
    for (let i =1; i<=total; i++)
    {
         emaillist.push(username +i+email)     
    }
    console.log(emaillist)
    }
genEmail ("susan","@email.com",10)

//Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
//Note:có tham khảo 
function totalIncom(incomesArr){
    let totalincom=incomesArr.reduce((sum, item) => sum + test.total, 0)
    return totalincom
}
let incomesArr =[
    {month: 1, total: 100},
    {month: 2, total: 120},
    {month: 3, total: 130},
    {month: 4, total: 140},
    {month: 5, total: 150},
    {month: 6, total: 160},
    {month: 7, total: 170},
    {month: 8, total: 180},
    {month: 9, total: 190},
    {month: 10, total: 200},
    {month: 11, total: 210},
    {month: 12, total: 220}
]
let totalincom12=totalIncom(incomesArr)
console.log ("Doanh thu 12 tháng" ,totalincom12)