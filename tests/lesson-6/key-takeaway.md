# Outline
### Git
 * Git clone: lấy code có sẵn trên remote về máy local
 tại thư mục của dự án lấy về, chuột phải mở terminal ()
 chạy câu lệnh clone (copy SHH key của code trên remote)
 'git clone +ssh; nếu muốn đổi tên thì git clon +sshkey namemoi71'
 * Git Branch
 `git branch <branch name > tạo 1 nhánh mới`
 git checkout <branch name> qua nhánh mới

 * Git push: Đưa code từ vùng repo lên server
`git push <remote name><branch name>`
* Git Pull : Lấy dữ liệu mới dc update từ người khác từ repos về local
- GIt pull là tổng hợp của git fetch and git merge
<br> `git pull origin main`
<br> `git pull origin <branchname>` -- lấy từ nhánh
  <br>vùng phụ: Remote Branch
  <br>git fetch: lấy luôn phần thay đổi của các bạn ở các nhánh khác về vùng remote để đọc thôi, chứ chưa có update về code của mình chưa có merge
  <br>git merge: sau khi chạy git merge tất cả các thông tin về máy, mới có những thay đôi về máy
 * Git Stash: lưu lại tất cả các file đã được add công việc thay đổi thì lưu lại: stash lại chỉ lưu ở local thôi

 git stash pop:  
 git stash list == xem cái list stash
### Git Convention
* Đặt tên branch: 
* Viết commit message
    - feat: Tính năng mới
    - Fix: 
    - chore
    - 
* Function

### Javascript
* Class: tạo ra 1 cái khuôn 
- Dùng để khai báo kiểu dữ liệu
- Định nghĩa thuộc tính và phương thức của đối tương
- Mục đích: tái sử dụng
NOte: 
Class NameofClass{
constructor(name,birthday){}

greet()
}
//khai báo
Class NameofClass{//khai báo thuộc tính bên trong
    name;
    age;
    job_title
};
const Trinh= new NameofClass14{
    Trinh.name="";
    Trinh.age="";
    Trinh.job_title=""
}

để không tốn thời gian khi tạo data thì mình tạo 1 hàm khởi tạo constructor
`constructor (name,age,job_title){
    this.name=name ;
    this.age =   age;
    this.job_title= job_title
}`
 doExxercise()
<br>`const Trinh= new NamofClass14("","","")`
Trinh.doExxercise()
 //phương thức của class Method ko cần khai báo function đàng trước nếu nằm trong class
 ko phải biến nào trong class cũng phải cho vào hàm khởi tạo