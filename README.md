# 🎬 App Movie - Movie Booking Web Clone

Một website đặt vé xem phim lấy cảm hứng từ các hệ thống rạp chiếu hiện đại, tích hợp thanh toán qua **PayOS**. Dự án gồm **Frontend** (Next.js) và **Backend** (NestJS + MySQL).

> 🚧 **Lưu ý:** Đây là dự án cá nhân nhằm luyện tập, chưa triển khai đầy đủ xác thực & bảo mật mức production.
---
## 🚀 Tính năng

- 🎞️ Danh sách phim và thông tin lịch chiếu
- 🪑 Đặt ghế và thanh toán vé trực tuyến
- 💳 Tích hợp thanh toán qua PayOS
- 🔒 Xác thực người dùng cơ bản
- ✅ Giao diện responsive, hiện đại
- 🔥 Thông báo người dùng với Toast
- 📦 Kiến trúc chia module rõ ràng (client/server)
---
## 📸 Giao diện demo

### 🏠 Trang chủ
![Home Page](./FE_Movie_Node50/public/images/HomePage.png)
### 🔑 Đăng nhập
![Login Page](./FE_Movie_Node50/public/images/LoginPage.png)
### 🎟️ Trang chi tiết phim và lịch chiếu
![Detail Page](./FE_Movie_Node50/public/images/DetailPage.png)
![Showtimes Page](./FE_Movie_Node50/public/images/ShowTimePage.png)
### 💳 Đặt vé
![Booking Page](./FE_Movie_Node50/public/images/BookingPage.png)
### 💳 Thanh toán
![Payment Page](./FE_Movie_Node50/public/images/PaymentPage.png)
### 🏠 Module Admin
### 🏠 Trang quản lý người dùng
![UserAdmin Page](./FE_Movie_Node50/public/images/UserPage.png)
### 🏠 Trang quản lý phim
![MovieAdmin Page](./FE_Movie_Node50/public/images/MoviePage.png)
### 🏠 Trang quản lý lịch chiếu
![BookingAdmin Page](./FE_Movie_Node50/public/images/CreateSchedulePage.png)
### 🏠 Trang quản lý rạp
![CinemaAdmin Page](./FE_Movie_Node50/public/images/CinemaPage.png)
### 🛠️ Swagger BE
![Swagger Page](./FE_Movie_Node50/public/images/Swagger1.png)
![Swagger Page](./FE_Movie_Node50/public/images/Swagger2.png)
![Swagger Page](./FE_Movie_Node50/public/images/Swagger3.png)
---

## 🧰 Tech Stack

### 💻 Frontend
- **Next.js** (App Router)
- **Tailwind CSS**
- **React Hook Form**
- **Axios**
- **React Toastify**
- **Zustand / Hook-based State**

### 🔧 Backend
- **NestJS** (Node.js Framework)
- **MySQL + Prisma**
- **Dotenv config**
- **Swagger**
- **PayOS API integration**

---

## 📁 Cấu trúc thư mục
AppMovie/
├── FE_Movie_Node50/ # Frontend với Next.js
└── BE_Movie_Node50/ # Backend với NestJS + MySQL

---

## ⚙️ Hướng dẫn khởi chạy

### 1. Clone Repo
cmd
git clone https://github.com/Vanquoc0201/AppMovie_NextJS.git
cd AppMovie_NextJS
### 2. Run BE
start image docker
config db_movie to db_movie-export because it has data
cd BE_Movie_Node50
npm install
npm run start:dev
### 3. Run FE
cd FE_Movie_Node50
npm install
npm run dev




