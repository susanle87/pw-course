# Outline
### Javascript
 * Phạm vi của biến
 * Advance condition: if...else, if...else if, switch...case
 * == and !=
 * Advance loops
 * Array helper functions
 * String helper functions
 * Functions advance
### Phạm vi của biến
* var: Global
  <br> function f() {
         <br>  if (true) {
              <br>   var $bien_two = 0
              <br>   //in ra 0
              <br>   console.log($bien_two);
          <br>   }
            // nó in ra dc vì khai báo var là biến global
          <br>   console.log($bien_two);
     <br>}
    <br>f();
* let: private:
      <br>For example 
                  <br>   function f() {
                        if (true) {
                        let $bien_two = 0
                        //in ra 0
                        console.log($bien_two);
                    }
                    // nó đưa ra lỗi vì biến $bien+two được định nghĩa trong khối if 
                    console.log($bien_two);
        }
        f();1


### 2. JavaScript
* if .. else
* if .. else if ...if
* switch .. case
* for..in: 
* forEach: dùng để duyệt qua từng phần tử của mảng
    - arrA=[1,2,3,4]
    console.log (arrA.forEach)

* for ...of:

