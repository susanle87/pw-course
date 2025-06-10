# Outline
### DOM: Releation
- ancestor: cha
- descendant: hậu duệ(con cháu chắt)...
- sibling: thẻ anh em ruột (ngang hàng-cùng cha)
- following: node bên dưới của node hiện tại, ko bao gồm thẻ con, thẻ cháu của thẻ hiện tại
- preceding: nằm phía trước của node hiện tại và ko bao gồm tổ tiên/cha
- following-sibling: thẻ anh em cùng cấp nằm dưới
 <br> example: //label[@for='gender']/following-sibling::div//input
- preceding-sibling:thẻ ngang hàng phía trên
### XPATH: advance method
- Wild cart: * ko quan tâm thẻ có tag là j, chỉ quan tâm thới phần bên trong
example: //*[id='test']// chỉ cần tìm thẻ có id=test
//table[@id=”usertable”]/ancestor::*[@id=’ads-here’]

- Chứa thuộc tính:ĐI theo thuộc tính của thẻ. Example: id, name,....
- and và or: liên quan điều kiện. 
 <br> example: //div[@id='' and @class='']//nếu 1 thuộc tính ko tìm dc duy nhất thì dùng add kết hợp điều kiện
 <br> //div[@id='' or @class=''] // nếu muốn tìm nhiều
- Tìm them innter text : //div[text()='Gender:']  //input chính xác text
- normalize space: text có khoảng trống đầu cuối //div[normalize-space()='Gender:'] 
- contains: text quá dài. example //a[contains(text(),'Gender')]
- starts-with : tìm đoạn text bắt đầu bằng chữ trong starts-with .  //a[start-with(text(),'Gender')]
- not : phủ định lại những cái đang tìm. //a[not(start-with(text(),'Gender'))]
### XPATH: Axes : trục
- parent: thẻ cha (chỉ 1 thôi): example //div[]
- child
-



NOte: run typescrip $ npx tsx  tests/students-submission/09-le-phuong/lesson-06/excercise/02-js-class-crm.ts