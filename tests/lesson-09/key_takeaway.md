# Outline
### Git -merge
- fast-foward merge: đưa new commit từ nhánh mới qua nhánh main (thời điểm này nhánh main nó chưa có thay đổi j so vs lúc check out từ main qua nhánh kia)
-Three -way -merge:check out từ main qua nhánh mới, sau đó nhánh mới có commit, nhánh main cũng có commit thay dôi

### Git - rebase
- Lấy lịch sử thay đổi của nhánh main sau khi mình checkout vào nhánh mà mình đang work 

### Git - swash
- Gộp nhiều commit lộn xộn hoặc không cần thiết thành một commit duy nhất mà không làm mất các thay đổi.
   -git rebase -i HEAD~6
### Playwright 
#### CSS selector
- ưu điểm: Cú pháp đơn giản
- Khuyết điểm: Không sử dụng được cho case phức tạp như contains text,hoặc trỏ ngược lên để tìm thì nên dùng xpath
<br> [This is a link to css selector](https://css-selectors-cheatsheet.fullstack.edu.vn/assets/answers/CSS-selectors-cheatsheet.pdf)


#### Playwright selector
Những Playwright locator thường dùng:
<br> ● page.getByRole()
<br> ● page.getByText()
<br> ● page.getByLabel()
<br> ● page.getByPlaceholder()
<br> ● page.getByAltText()
<br> ● page.getByTitle()
<br> ● page.getByTestId()
<br> ● page.getByRole() (button, checkbox, heading, link, list, table, and many more)
<br> [This is a link to playwright selector](https://playwright.dev/docs/locators)