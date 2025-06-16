/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `Banners`;
CREATE TABLE `Banners` (
  `maBanner` int NOT NULL,
  `maPhim` int DEFAULT NULL,
  `hinhAnh` varchar(255) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maBanner`),
  KEY `maPhim` (`maPhim`),
  CONSTRAINT `Banners_ibfk_1` FOREIGN KEY (`maPhim`) REFERENCES `Movies` (`maPhim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `BookingDetails`;
CREATE TABLE `BookingDetails` (
  `maBookingDetail` int NOT NULL AUTO_INCREMENT,
  `maBooking` int NOT NULL,
  `maGhe` int NOT NULL,
  `trangThaiGhe` enum('DangDat','DaDat') DEFAULT 'DangDat',
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maBookingDetail`),
  UNIQUE KEY `maBooking` (`maBooking`,`maGhe`),
  KEY `maGhe` (`maGhe`),
  CONSTRAINT `BookingDetails_ibfk_1` FOREIGN KEY (`maBooking`) REFERENCES `Bookings` (`bookingId`) ON DELETE CASCADE,
  CONSTRAINT `BookingDetails_ibfk_2` FOREIGN KEY (`maGhe`) REFERENCES `Chairs` (`maGhe`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Bookings`;
CREATE TABLE `Bookings` (
  `bookingId` int NOT NULL AUTO_INCREMENT,
  `taiKhoan` varchar(100) DEFAULT NULL,
  `maLichChieu` int DEFAULT NULL,
  `maGhe` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`bookingId`),
  KEY `taiKhoan` (`taiKhoan`),
  KEY `maLichChieu` (`maLichChieu`),
  KEY `maGhe` (`maGhe`),
  CONSTRAINT `Bookings_ibfk_1` FOREIGN KEY (`taiKhoan`) REFERENCES `Users` (`taiKhoan`),
  CONSTRAINT `Bookings_ibfk_2` FOREIGN KEY (`maLichChieu`) REFERENCES `Showtimes` (`maLichChieu`),
  CONSTRAINT `Bookings_ibfk_3` FOREIGN KEY (`maGhe`) REFERENCES `Chairs` (`maGhe`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Chairs`;
CREATE TABLE `Chairs` (
  `maGhe` int NOT NULL,
  `tenGhe` varchar(100) DEFAULT NULL,
  `loaiGhe` varchar(100) DEFAULT NULL,
  `maRap` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maGhe`),
  KEY `maRap` (`maRap`),
  CONSTRAINT `Chairs_ibfk_1` FOREIGN KEY (`maRap`) REFERENCES `Cinema` (`maRap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Cinema`;
CREATE TABLE `Cinema` (
  `maRap` int NOT NULL,
  `tenRap` varchar(100) DEFAULT NULL,
  `maCumRap` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maRap`),
  KEY `maCumRap` (`maCumRap`),
  CONSTRAINT `Cinema_ibfk_1` FOREIGN KEY (`maCumRap`) REFERENCES `CinemaCluster` (`maCumRap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `CinemaCluster`;
CREATE TABLE `CinemaCluster` (
  `maCumRap` int NOT NULL,
  `maHeThongRap` int DEFAULT NULL,
  `tenCumRap` varchar(100) DEFAULT NULL,
  `diaChi` varchar(200) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maCumRap`),
  KEY `maHeThongRap` (`maHeThongRap`),
  CONSTRAINT `CinemaCluster_ibfk_1` FOREIGN KEY (`maHeThongRap`) REFERENCES `CinemaSystem` (`maHeThongRap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `CinemaSystem`;
CREATE TABLE `CinemaSystem` (
  `maHeThongRap` int NOT NULL,
  `tenHeThongRap` varchar(100) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`maHeThongRap`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Movies`;
CREATE TABLE `Movies` (
  `maPhim` int NOT NULL,
  `tenPhim` varchar(100) DEFAULT NULL,
  `trailerPhim` varchar(255) DEFAULT NULL,
  `hinhAnh` varchar(255) DEFAULT NULL,
  `moTa` varchar(255) DEFAULT NULL,
  `ngayKhoiChieu` date DEFAULT NULL,
  `danhGia` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `trangThai` enum('DangChieu','SapChieu','NgungChieu') DEFAULT 'DangChieu',
  `thoiLuong` int DEFAULT NULL,
  `quocGia` varchar(100) DEFAULT NULL,
  `dienVien` varchar(255) DEFAULT NULL,
  `theLoai` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`maPhim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Showtimes`;
CREATE TABLE `Showtimes` (
  `maLichChieu` int NOT NULL,
  `maPhim` int DEFAULT NULL,
  `maRap` int DEFAULT NULL,
  `ngayGioChieu` date DEFAULT NULL,
  `giaVe` int DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `trangThai` enum('DangChieu','HetSuat','NgungChieu') DEFAULT 'DangChieu',
  PRIMARY KEY (`maLichChieu`),
  KEY `maRap` (`maRap`),
  KEY `maPhim` (`maPhim`),
  CONSTRAINT `Showtimes_ibfk_1` FOREIGN KEY (`maRap`) REFERENCES `Cinema` (`maRap`),
  CONSTRAINT `Showtimes_ibfk_2` FOREIGN KEY (`maPhim`) REFERENCES `Movies` (`maPhim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `taiKhoan` varchar(100) DEFAULT NULL,
  `hoTen` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `soDt` varchar(100) DEFAULT NULL,
  `matKhau` varchar(100) DEFAULT NULL,
  `loaiNguoiDung` varchar(100) DEFAULT NULL,
  `deletedBy` int NOT NULL DEFAULT '0',
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  `deletedAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `taiKhoan` (`taiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Banners` (`maBanner`, `maPhim`, `hinhAnh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1280, 1280, 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746173168/images/gdiueygtkm6nnwwxz4c3.jpg', 0, 0, NULL, '2025-05-03 12:55:28', '2025-05-03 12:55:28');
INSERT INTO `Banners` (`maBanner`, `maPhim`, `hinhAnh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1281, 1281, 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746173900/images/twbszseprwrwseix0aua.jpg', 0, 0, NULL, '2025-05-03 12:55:28', '2025-05-03 12:55:28');
INSERT INTO `Banners` (`maBanner`, `maPhim`, `hinhAnh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1282, 1282, 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174406/images/fpaqegmfl95558hrx3iv.jpg', 0, 0, NULL, '2025-05-03 12:55:28', '2025-05-03 12:55:28');
INSERT INTO `Banners` (`maBanner`, `maPhim`, `hinhAnh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1283, 1283, 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174641/images/nxarqn2ikh3w2rwtgrff.jpg', 0, 0, NULL, '2025-05-03 12:55:28', '2025-05-03 12:55:28');
INSERT INTO `Banners` (`maBanner`, `maPhim`, `hinhAnh`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1284, 1284, 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174768/images/mfglfkcspj2nwvzxobmv.jpg', 0, 0, NULL, '2025-05-03 12:55:28', '2025-05-03 12:55:28');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, 'DangDat', 0, 0, NULL, '2025-05-08 12:26:59', '2025-05-08 12:26:59');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 2, 2, 'DangDat', 0, 0, NULL, '2025-05-08 12:26:59', '2025-05-08 12:26:59');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 2, 3, 'DangDat', 0, 0, NULL, '2025-05-08 12:26:59', '2025-05-08 12:26:59');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 3, 74, 'DaDat', 0, 0, NULL, '2025-06-16 15:21:37', '2025-06-16 15:21:37');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(5, 3, 75, 'DaDat', 0, 0, NULL, '2025-06-16 15:21:37', '2025-06-16 15:21:37');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(6, 3, 76, 'DaDat', 0, 0, NULL, '2025-06-16 15:21:37', '2025-06-16 15:21:37');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(7, 3, 77, 'DaDat', 0, 0, NULL, '2025-06-16 15:21:37', '2025-06-16 15:21:37');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(8, 4, 49, 'DaDat', 0, 0, NULL, '2025-06-16 15:27:28', '2025-06-16 15:27:28');
INSERT INTO `BookingDetails` (`maBookingDetail`, `maBooking`, `maGhe`, `trangThaiGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(9, 4, 50, 'DaDat', 0, 0, NULL, '2025-06-16 15:27:28', '2025-06-16 15:27:28');
INSERT INTO `Bookings` (`bookingId`, `taiKhoan`, `maLichChieu`, `maGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'vovanquoc0201', 1280211, 1, 0, 0, NULL, '2025-05-04 11:55:45', '2025-05-04 11:55:45');
INSERT INTO `Bookings` (`bookingId`, `taiKhoan`, `maLichChieu`, `maGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 'vovanquoc0201', 1280211, NULL, 0, 0, NULL, '2025-05-08 12:26:59', '2025-05-08 12:26:59');
INSERT INTO `Bookings` (`bookingId`, `taiKhoan`, `maLichChieu`, `maGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 'vovanquoc0201', 1280211, NULL, 0, 0, NULL, '2025-06-16 15:21:37', '2025-06-16 15:21:37');
INSERT INTO `Bookings` (`bookingId`, `taiKhoan`, `maLichChieu`, `maGhe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 'vovanquoc0201', 1280211, NULL, 0, 0, NULL, '2025-06-16 15:27:28', '2025-06-16 15:27:28');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1, 'A1', 'Thuong', 211, 0, 0, NULL, '2025-05-04 11:55:34', '2025-05-04 11:55:34');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(2, 'A2', 'Thuong', 211, 0, 0, NULL, '2025-05-04 11:55:34', '2025-05-04 11:55:34');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(3, 'A3', 'Thuong', 211, 0, 0, NULL, '2025-05-04 11:55:34', '2025-05-04 11:55:34');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(4, 'A4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(5, 'A5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(6, 'A6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(7, 'A7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(8, 'A8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(9, 'A9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(10, 'A10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-05-08 12:39:17');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(11, 'B1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(12, 'B2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(13, 'B3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(14, 'B4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(15, 'B5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(16, 'B6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(17, 'B7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(18, 'B8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(19, 'B9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(20, 'B10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(21, 'C1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(22, 'C2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(23, 'C3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(24, 'C4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(25, 'C5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(26, 'C6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(27, 'C7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(28, 'C8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(29, 'C9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(30, 'C10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(31, 'D1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(32, 'D2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Chairs` (`maGhe`, `tenGhe`, `loaiGhe`, `maRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(33, 'D3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(34, 'D4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(35, 'D5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(36, 'D6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(37, 'D7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(38, 'D8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(39, 'D9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(40, 'D10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(41, 'E1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(42, 'E2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(43, 'E3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(44, 'E4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(45, 'E5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(46, 'E6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(47, 'E7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(48, 'E8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(49, 'E9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(50, 'E10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(51, 'F1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(52, 'F2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(53, 'F3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(54, 'F4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(55, 'F5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(56, 'F6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(57, 'F7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(58, 'F8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(59, 'F9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(60, 'F10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(61, 'J1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(62, 'J2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(63, 'J3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(64, 'J4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(65, 'J5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(66, 'J6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(67, 'J7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(68, 'J8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(69, 'J9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(70, 'J10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(71, 'H1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(72, 'H2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(73, 'H3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(74, 'H4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(75, 'H5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(76, 'H6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(77, 'H7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(78, 'H8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(79, 'H9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(80, 'H10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(81, 'I1', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(82, 'I2', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(83, 'I3', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(84, 'I4', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(85, 'I5', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(86, 'I6', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(87, 'I7', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(88, 'I8', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(89, 'I9', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56'),
(90, 'I10', 'Thuong', 211, 0, 0, NULL, '2025-05-08 12:39:17', '2025-06-15 12:58:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(211, 'Rạp 1', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(212, 'Rạp 2', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(213, 'Rạp 3', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(214, 'Rạp 4', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(215, 'Rạp 5', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(216, 'Rạp 6', 1210, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(221, 'Rạp 1', 1220, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(222, 'Rạp 2', 1220, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(223, 'Rạp 3', 1220, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(224, 'Rạp 4', 1220, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(231, 'Rạp 1', 1230, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(232, 'Rạp 2', 1230, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(243, 'Rạp 3', 1240, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(244, 'Rạp 4', 1240, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(255, 'Rạp 5', 1250, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(256, 'Rạp 6', 1250, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(267, 'Rạp 7', 1260, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(268, 'Rạp 8', 1260, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(311, 'Rạp 1', 1310, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(312, 'Rạp 2', 1310, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(323, 'Rạp 3', 1320, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(324, 'Rạp 4', 1320, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(335, 'Rạp 5', 1330, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(336, 'Rạp 6', 1330, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(347, 'Rạp 7', 1340, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(348, 'Rạp 8', 1340, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(359, 'Rạp 9', 1350, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(360, 'Rạp 10', 1350, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `Cinema` (`maRap`, `tenRap`, `maCumRap`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(361, 'Rạp 1', 1360, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56'),
(362, 'Rạp 2', 1360, 0, 0, NULL, '2025-05-03 13:34:56', '2025-05-03 13:34:56');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1210, 1200, 'BHD Star Cineplex - 3/2', 'L5-Vincom 3/2, 3C Đường 3/2, Q.10', 0, 0, NULL, '2025-05-02 09:11:35', '2025-05-02 09:11:35');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1220, 1200, 'BHD Star Cineplex - Bitexco', 'L3-Bitexco Icon 68, 2 Hải Triều, Q.1', 0, 0, NULL, '2025-05-02 09:14:43', '2025-05-02 09:14:43');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1230, 1200, 'BHD Star Cineplex - Phạm Hùng', 'L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh', 0, 0, NULL, '2025-05-02 09:14:43', '2025-05-02 09:14:43');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1240, 1200, 'BHD Star Cineplex - Vincom Lê Văn Việt', 'L4-Vincom Plaza, 50 Lê Văn Việt, Q.9', 0, 0, NULL, '2025-05-02 09:14:43', '2025-05-02 09:14:43');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1250, 1200, 'BHD Star Cineplex - Vincom Quang Trung', 'B1-Vincom QT, 190 Quang Trung, Gò Vấp', 0, 0, NULL, '2025-05-02 09:14:43', '2025-05-02 09:14:43');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1260, 1200, 'BHD Star Cineplex - Vincom Thảo Điền', 'L5-Megamall, 159 XL Hà Nội, Q.2', 0, 0, NULL, '2025-05-02 09:14:43', '2025-05-02 09:14:43');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1310, 1300, 'CGV - Aeon Bình Tân', 'Tầng 3, TTTM Aeon Mall Bình Tân, Số 1 đường số 17A, khu phố 11, Bình Trị Đông B, Bình Tân', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1320, 1300, 'CGV - Aeon Tân Phú', '30 Bờ Bao Tân Thắng, Sơn Kỳ, Tân Phú', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1330, 1300, 'CGV - CGV Saigonres Nguyễn Xí', 'Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P. 26, Bình Thạnh', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1340, 1300, 'CGV - Crescent Mall', 'Lầu 5, Crescent Mall, Đại lộ Nguyễn Văn Linh, Phú Mỹ Hưng, Q. 7', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1350, 1300, 'CGV - CT Plaza', '60A Trường Sơn,P. 2, Tân Bình', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1360, 1300, 'CGV - Golden Plaza', 'Tầng 4, Trung tâm thương mại Golden Plaza, 922 Nguyễn Trãi, P. 14, Q. 5', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1370, 1300, 'CGV - Hoàng Văn Thụ', 'Tầng 1 và 2 Gala Center, 415 Hoàng Văn Thụ, P. 2, Tân Bình', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1380, 1300, 'CGV - Hùng Vương Plaza', 'Lầu 7, 126 Hùng Vương, Q. 5', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1381, 1300, 'CGV - Vincom Landmark 81', 'T B1 , TTTM Vincom Center Landmark 81, 772 Điện Biên Phủ, P.22, Q. Bình Thạnh, HCM', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1382, 1300, 'CGV - Vincom Thủ Đức', 'Tầng 5 Vincom Thủ Đức, 216 Võ Văn Ngân, Bình Thọ, Thủ Đức', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1383, 1300, 'CGV - VivoCity', 'Lầu 5, Trung tâm thương mại SC VivoCity - 1058 Nguyễn Văn Linh, Q. 7', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1390, 1300, 'CGV - IMC Trần Quang Khải', 'T2&3, TTVH Đa Năng, 62 Trần Quang Khải, P.Tân Định, Q.1', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1391, 1300, 'CGV - Liberty Citypoint', 'Tầng M - 1, khách sạn Liberty Center Saigon Citypoint, 59 - 61 Pateur, Q. 1', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1392, 1300, 'CGV - Pandora City', 'Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1393, 1300, 'CGV - Paragon', 'Tầng 5, toà nhà Parkson Paragon, 03 Nguyễn Lương Bằng, Q. 7', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48');
INSERT INTO `CinemaCluster` (`maCumRap`, `maHeThongRap`, `tenCumRap`, `diaChi`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1394, 1300, 'CGV - Parkson Đồng Khởi', 'Tầng 5 Parkson Đồng Khởi, 35bis-45 Lê Thánh Tôn, Bến Nghé, Q.1', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1395, 1300, 'CGV - Pearl Plaza', 'Lầu 5, Pearl Plaza, 561 Điện Biên Phủ, Bình Thạnh', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1396, 1300, 'CGV - Satra Củ Chi', 'T3, TTTM Satra Củ Chi, Số 1239, Tỉnh Lộ 8, Ấp Thạnh An, Trung An, Củ Chi, TP.HCM', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1397, 1300, 'CGV - Sư Vạn Hạnh', 'T6 Vạn Hạnh Mall, 11 Sư Vạn Hạnh, Quận 10', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1398, 1300, 'CGV - Vincom Đồng Khởi', 'Tầng 3, TTTM Vincom Center B, 72 Lê Thánh Tôn, Bến Nghé, Q. 1', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1399, 1300, 'CGV - Vincom Gò Vấp', 'Tầng 5 TTTM Vincom Plaza Gò Vấp, 12 Phan Văn Trị, P. 7, Gò Vấp', 0, 0, NULL, '2025-05-02 09:25:48', '2025-05-02 09:25:48'),
(1410, 1400, 'CNS - Hai Bà Trưng', '135 Hai Bà Trưng, Bến Nghé, Q.1', 0, 0, NULL, '2025-05-02 09:27:08', '2025-05-02 09:27:08'),
(1420, 1400, 'CNS - Quốc Thanh', '271 Nguyễn Trãi, Q.1', 0, 0, NULL, '2025-05-02 09:27:08', '2025-05-02 09:27:08'),
(1510, 1500, 'GLX - Huỳnh Tấn Phát', '1362 Huỳnh Tấn Phát, KP1, Phú Mỹ, Q. 7', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1520, 1500, 'GLX - Kinh Dương Vương', '718bis Kinh Dương Vương, Q.6', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1530, 1500, 'GLX - Nguyễn Du', '116 Nguyễn Du, Q.1', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1540, 1500, 'GLX - Nguyễn Văn Quá', '119B Nguyễn Văn Quá, Đông Hưng Thuận, Q.12, TPHCM', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1550, 1500, 'GLX - Phạm Văn Chí', 'Lầu 5, TTTM Platinum Plaza, 634 Phạm Văn Chí, Q.6', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1560, 1500, 'GLX - Quang Trung', 'L3-Co.opmart Foodcosa, 304A Quang Trung, Gò Vấp', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1570, 1500, 'GLX - Tân Bình', '246 Nguyễn Hồng Đào, Tân Bình', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1580, 1500, 'GLX - Trung Chánh', 'TTVH Q12 – 09, Q L 22, Trung Mỹ Tây , Q.12', 0, 0, NULL, '2025-05-02 09:31:01', '2025-05-02 09:31:01'),
(1610, 1600, 'Lotte - Cantavil', 'L7-Cantavil Premier, Xa Lộ Hà Nội, Q.2', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1620, 1600, 'Lotte - Cộng Hòa', 'L4-Pico Plaza, 20 Cộng Hòa, Tân Bình', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1630, 1600, 'Lotte - Diamond', 'L13-Diamond Plaza, 34 Lê Duẩn, Q.1', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1640, 1600, 'Lotte - Gò Vấp', 'L3-Lotte Mart, 242 Nguyễn Văn Lượng, Gò Vấp', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1650, 1600, 'Lotte - Nam Sài Gòn', 'L3-Lotte Mart NSG, 469 Nguyễn Hữu Thọ, Q.7', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1660, 1600, 'Lotte - Nowzone', 'L5-Nowzone, 235 Nguyễn Văn Cừ, Q.1', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1670, 1600, 'Lotte - Phú Thọ', 'L4-Lotte Mart Phú Thọ, Q.11', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1680, 1600, 'Lotte - Thủ Đức', 'L2-Joy Citipoint, KCX Linh Trung, Thủ Đức', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1710, 1700, 'MegaGS - Cao Thắng', '19 Cao Thắng, Q.3', 0, 0, NULL, '2025-05-02 09:35:52', '2025-05-02 09:35:52'),
(1810, 1800, 'Beta Cinemas Quang Trung', '647 Đ. Quang Trung, Phường 11, Gò Vấp, Hồ Chí Minh', 0, 0, NULL, '2025-06-14 16:41:51', '2025-06-14 16:41:51'),
(1820, 1800, 'Beta Cinemas Trần Quang Khải', '62 Đ. Trần Quang Khải, Phường Tân Định, Quận 1, Hồ Chí Minh', 0, 0, NULL, '2025-06-14 16:57:36', '2025-06-14 16:57:36');
INSERT INTO `CinemaSystem` (`maHeThongRap`, `tenHeThongRap`, `logo`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1200, 'BHD Star Cineplex', 'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58');
INSERT INTO `CinemaSystem` (`maHeThongRap`, `tenHeThongRap`, `logo`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1300, 'CGV', 'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58');
INSERT INTO `CinemaSystem` (`maHeThongRap`, `tenHeThongRap`, `logo`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1400, 'CineStar', 'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58');
INSERT INTO `CinemaSystem` (`maHeThongRap`, `tenHeThongRap`, `logo`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1500, 'Galaxy Cinema', 'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58');
INSERT INTO `CinemaSystem` (`maHeThongRap`, `tenHeThongRap`, `logo`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(1600, 'Lotte Cinema', 'https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58'),
(1700, 'MegaGS', 'https://movienew.cybersoft.edu.vn/hinhanh/megags.png', 0, 0, NULL, '2025-05-02 08:45:17', '2025-05-02 09:10:58'),
(1800, 'Beta', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1749843447/images/hjrxnhkcn5basberf0qg.jpg', 0, 0, NULL, '2025-06-13 19:37:28', '2025-06-13 19:37:28');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1280, 'Thám Tử Kiên : Kỳ Án Không Đầu', 'https://www.youtube.com/watch?v=QiXNbEKF3U0', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746173168/images/gdiueygtkm6nnwwxz4c3.jpg', 'Thám Tử Kiên: Kỳ Không Đầu sẽ là một phim Victor Vũ trở về với thể loại sở trường Kinh Dị - Trinh Thám sau những tác phẩm tình cảm lãng mạn trước đó.', '2025-04-30', 10, 0, 0, NULL, '2025-05-02 08:06:10', '2025-05-08 11:06:11', 'DangChieu', 131, 'Việt Nam', 'Quốc Huy, Đinh Ngọc Diệp, Quốc Anh, Minh Anh, Anh Phạm', 'Kinh dị');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1281, 'Lật Mặt 8: Vòng Tay Nắng', 'https://www.youtube.com/watch?time_continue=1&v=W_0AMP9yO1w&embeds_referring_euri=https%3A%2F%2Fwww.momo.vn%2F&embeds_referring_origin=https%3A%2F%2Fwww.momo.vn&source_ve_path=MjM4NTE', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746173900/images/twbszseprwrwseix0aua.jpg', 'Lật Mặt 8: Vòng Tay Nắng đang trong giai đoạn quay hình tại bối cảnh Bình Thuận, Ninh Thuận. Phần thứ 8 sẽ đa dạng chủ đề hơn các phần trước bao gồm hành động, hài, gia đình và yếu tố âm nhạc', '2025-04-30', 10, 0, 0, NULL, '2025-05-02 08:18:22', '2025-05-08 11:06:11', 'DangChieu', 135, 'Việt Nam', ' NSƯT Kim Phương, Long Đẹp Trai, NSƯT Tuyết Thu, Quách Ngọc Tuyên, Đoàn Thế Vinh, Hồng Thu, Yuno Bigboi, Anh Tú Wilson, Bảo Ngọc, Tín Nguyễn, Hồ Đông Quan, Cherry Hải My, Rio Hạo Nhiên,', 'Gia đình, Tâm Lý');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1282, 'Tìm Xác: Ma Không Đầu', 'https://www.youtube.com/watch?v=Ij19LCYrGrE', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174406/images/fpaqegmfl95558hrx3iv.jpg', 'Bộ đôi Tiến Luật và Ngô Kiến Huy, với nghề nghiệp \"độc lạ\" hốt xác và lái xe cứu thương, hứa hẹn mang đến những tràng cười không ngớt cho khán giả qua hành trình tìm xác có một không hai trên màn ảnh Việt.', '2025-04-18', 9, 0, 0, NULL, '2025-05-02 08:26:47', '2025-05-08 11:06:11', 'DangChieu', 119, 'Việt Nam', 'Tiến Luật; Ngô Kiến Huy; NSND Hồng Vân; NSƯT Hữu Châu; NSƯT Đại Nghĩa, Thanh Hương, Hoàng Mèo, Nghệ sĩ Phi Phụng, Phan Vũ', 'Hài, Kinh Dị');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1283, 'Mật Danh: Kế Toán 2', 'https://www.youtube.com/watch?v=aOrFMxobW34', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174641/images/nxarqn2ikh3w2rwtgrff.jpg', 'Christian Wolff (Ben Affleck) sở hữu tài năng giải quyết những vấn đề phức tạp. Khi một người bạn cũ bị ám sát, để lại một thông điệp mơ hồ yêu cầu \"truy tìm kế toán\", Wolff bị cuốn vào việc giải quyết vụ án', '2025-05-02', 8, 0, 0, NULL, '2025-05-02 08:30:42', '2025-05-08 11:06:11', 'DangChieu', 128, 'Mỹ', 'Ben Affleck, Jon Bernthal, J.K. Simmons', 'Hành Động, Tâm Lý, Tội phạm');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1284, 'Đêm Thánh: Đội Săn Quỷ', 'https://www.youtube.com/watch?v=02pBCP84vSE', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1746174768/images/mfglfkcspj2nwvzxobmv.jpg', 'Tổ đội săn lùng và tiêu diệt các thế lực tôn thờ quỷ dữ với những sức mạnh siêu nhiên khác nhau gồm “tay đấm” Ma Dong-seok, Seohuyn (SNSD) và David Lee hứa hẹn mở ra cuộc chiến săn quỷ khốc liệt nhất dịp lễ 30/4 này!', '2025-05-09', 7, 0, 0, NULL, '2025-05-02 08:32:51', '2025-05-08 11:06:11', 'DangChieu', 91, 'Hàn Quốc', 'Don Lee; Seo Hyun; David Lee', ' Hành Động, Kinh Dị, Thần thoại');
INSERT INTO `Movies` (`maPhim`, `tenPhim`, `trailerPhim`, `hinhAnh`, `moTa`, `ngayKhoiChieu`, `danhGia`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`, `thoiLuong`, `quocGia`, `dienVien`, `theLoai`) VALUES
(1286, 'Doraemon Movie 44: Nobita và cuộc phiêu lưu vào thế giới trong tranh', 'https://www.youtube.com/watch?v=nDR_9NCMIYk', 'https://res.cloudinary.com/dadvwo1ur/image/upload/v1749634423/images/ekijadezp3avn6j4dwbk.jpg', 'Trên hành trình tìm kiếm viên ngọc, nhóm bạn Doraemon phát hiện một truyền thuyết về sự hủy diệt của thế giới, mà truyền thuyết đó dường như đang sống dậy! Liệu cả nhóm có thể phá hủy lời nguyền này và bảo vệ cả thế giới?', '2025-05-23', 10, 0, 0, NULL, '2025-06-11 09:33:44', '2025-06-11 09:33:44', 'DangChieu', 105, 'Nhật Bản', 'Wasabi Mizuta, Megumi Ôhara, Yumi Kakazu, Subaru Kimura, Tomokazu Seki', 'Hoạt hình, Phiêu Lưu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280211, 1280, 211, '2025-05-03', 1000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-06-16 15:13:45', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280222, 1280, 222, '2025-05-03', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280231, 1280, 231, '2025-05-03', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280243, 1280, 243, '2025-05-02', 75000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280255, 1280, 255, '2025-05-04', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280267, 1280, 267, '2025-05-04', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1280311, 1280, 311, '2025-06-16', 1000, 0, 0, NULL, '2025-06-16 15:12:30', '2025-06-16 15:12:30', 'DangChieu');
INSERT INTO `Showtimes` (`maLichChieu`, `maPhim`, `maRap`, `ngayGioChieu`, `giaVe`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`, `trangThai`) VALUES
(1281311, 1281, 311, '2025-05-03', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu'),
(1281323, 1281, 323, '2025-05-04', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu'),
(1281347, 1281, 347, '2025-05-03', 90000, 0, 0, NULL, '2025-05-03 13:44:50', '2025-05-03 13:44:50', 'DangChieu'),
(1282311, 1282, 311, '2025-05-02', 70000, 0, 0, NULL, '2025-05-04 14:19:07', '2025-05-04 14:19:07', 'DangChieu'),
(1282323, 1282, 323, '2025-06-15', 90000, 0, 0, NULL, '2025-06-14 21:01:52', '2025-06-14 21:01:52', 'DangChieu'),
(1286211, 1286, 211, '2025-06-05', 70000, 0, 0, NULL, '2025-06-14 20:58:25', '2025-06-14 20:58:25', 'DangChieu');
INSERT INTO `Users` (`userId`, `taiKhoan`, `hoTen`, `email`, `soDt`, `matKhau`, `loaiNguoiDung`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(10, 'vovanquoc123', 'Võ Văn Quốc', 'voquoc020106@gmail.com', '0123456789', '$2b$10$G3msJpMK4EJ8l2Wkxdo68eRU4IUNCnWwnX8YVmQqrve2tkjTk0sF2', 'QuanTriVien', 0, 0, NULL, '2025-05-01 11:45:23', '2025-05-01 11:45:23');
INSERT INTO `Users` (`userId`, `taiKhoan`, `hoTen`, `email`, `soDt`, `matKhau`, `loaiNguoiDung`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(14, 'nguyenvanb', 'Nguyễn Văn B', 'nguyenvanb123@gmail.com', '0123456789', '$2b$10$pasMu4ftEeNwSV9GtYBz8OTVJzj7mz2HrEn5q0SGqiecqJIj7xMqi', 'KhachHang', 0, 0, NULL, '2025-05-01 11:54:00', '2025-06-11 06:47:36');
INSERT INTO `Users` (`userId`, `taiKhoan`, `hoTen`, `email`, `soDt`, `matKhau`, `loaiNguoiDung`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(16, 'vovanquoc0201', 'Võ Văn Quốc', 'vovanquoc0201@gmail.com', '0342701549', '$2b$10$It/ojJk0kKrqeuNVV6nHju5WXkwadSMrB.Smnc6o7zgnNfW6PHE6K', 'QuanTriVien', 0, 0, NULL, '2025-05-01 11:58:30', '2025-05-01 11:58:30');
INSERT INTO `Users` (`userId`, `taiKhoan`, `hoTen`, `email`, `soDt`, `matKhau`, `loaiNguoiDung`, `deletedBy`, `isDeleted`, `deletedAt`, `createdAt`, `updatedAt`) VALUES
(18, 'Adm08', 'Admin 01', 'Adm08@gmail.com', '09876543210', '$2b$10$ONhKaW8J7IffHFbqNZAQsePaCIxKRe4z5Wm3ZR46TWkBSXV7qLrN6', 'QuanTriVien', 0, 0, NULL, '2025-05-18 08:29:31', '2025-06-11 07:52:32'),
(19, 'newbie002', 'Bùi Nguyễn Thuỳ Như', 'huynhmailinh1112@gmail.com', '01234567890', '$2b$10$6IkKWK6MdkdkDaIiz3kCAuurbIM5IJNpwxNpl6c894mIBA3LMiUlG', 'KhachHang', 0, 0, NULL, '2025-05-18 08:32:24', '2025-05-18 08:32:24'),
(20, 'nguyendp', 'Đình Phúc Nguyên', 'nguyendp@gmail.com', '09876543211', '$2b$10$Ryt..YCbDTcRxRfKLuwQrOU5W78PcM78wq2JMxmw0Cwtfh8bpRnQ.', 'QuanTriVien', 0, 0, NULL, '2025-06-10 14:02:06', '2025-06-10 14:02:06');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;