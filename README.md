# Cấu trúc thư mục 


```bash
|-- public/                     #Thư mục này chứa các tài nguyên tĩnh không thay đổi
|   |-- index.html
|   |-- favicon.ico
|-- src/                        #Thư mục chính của dự án
|   |-- assets/                 #Chứa tất cả các tài nguyên như hình ảnh, biểu tượng, font chữ, và các file CSS chung
|   |   |-- images/
|   |   |-- styles/
|   |-- components/             #Chứa các thành phần React để tái sử dụng
|   |   |-- components_1/
|   |   |   |-- components_1.js
|   |   |   |-- components_1.css
|   |   |-- components_2/
|   |   |   |-- components_2.js
|   |   |   |-- components_2.css
|   |   |...
|   |-- pages/                  #Mỗi trang của dự án(có các thành phần liên quan đến nó)
|   |   |-- page_1/
|   |   |   |-- page_1.js
|   |   |   |-- page_1.css
|   |   |-- page_2/
|   |   |   |-- page_2.js
|   |   |   |-- page_2.css
|   |   |...
|   |-- services/               # Chứa các file liên quan giao tiếp API
|   |   |-- api.js
|   |-- utils/                  #Chứa các helper functions
|   |   |-- helpers.js
|   |-- App.js
|   |-- index.js
|-- .gitignore
|-- package.json
|-- README.md
```
