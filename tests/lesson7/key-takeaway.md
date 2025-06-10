# Outline
### Playwright
- Test group/suit
- Hooks
- 

#### Test group/suit: gom nhóm các tcs thực hiện cùng 1 chức năng/module trong 1 nhóm và chỉ cần click 1 lần là chạy dc nhiều tcs
test.describe("GroupID - test group name of tcs ",() =>{
    test ("tc01},async (){

    })

    test ("tc02},async (){

    })
})
#### Test hook
Thứ tự:
test.describe("GroupID - test group name of tcs ",() =>{
    test ("tc01},async (){

    })

    test ("tc02},async (){

    })
})

tohavetext(): get text của elemement
#### Playwright assertion
- Bình thường: kiểm  tra mệnh đề a có bằng mệnh đề b ko: expected().
playwright ko chờ đợi nên kiểm tra dễ fail
- web-first assertion: tự động chờ element tồn tại, ko cần phải chờ
await expect(element).
NOte: run typescrip $ npx tsx  tests/students-submission/09-le-phuong/lesson-06/excercise/02-js-class-crm.ts