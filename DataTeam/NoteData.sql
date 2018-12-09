-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 09, 2018 at 02:05 PM
-- Server version: 5.6.37
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `NoteData`
--

-- --------------------------------------------------------

--
-- Table structure for table `NoteTable`
--

CREATE TABLE IF NOT EXISTS `NoteTable` (
  `Id` int(11) NOT NULL,
  `TitleNote` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Content` varchar(200) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `NoteTable`
--

INSERT INTO `NoteTable` (`Id`, `TitleNote`, `Date`, `Content`) VALUES
(1, 'Thuc hanh react native', '2018-12-04 02:13:16', 'Thuc hien cac thao tac lien quan den listview va co so du lieu'),
(2, 'Thuc hanh laravel', '2018-12-04 02:14:02', 'Thuc hien truy xuat va phan trang tim kiem du lieu trong co so du lieu'),
(3, 'Chuan bi do an ios', '2018-12-04 02:14:45', 'Nghien cuu va phan tich thuc hien  do an mon hoc ios truoc khi het tuan'),
(4, 'On tap kien thuc android', '2018-12-04 14:45:27', 'Tong hop cac kien thuc ve ngon ngu lap trinh android de chuan bi thi'),
(5, 'Thiet ke giao dien do an ios', '2018-12-04 14:47:39', 'Len ke hoach va lua chon de tai va thiet ke giao dien do an lap trinh ios');

-- --------------------------------------------------------

--
-- Table structure for table `TaskTable`
--

CREATE TABLE IF NOT EXISTS `TaskTable` (
  `IdTask` int(11) NOT NULL,
  `Date` date DEFAULT NULL,
  `Content` varchar(100) NOT NULL,
  `state` tinyint(1) NOT NULL,
  `priority` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `TaskTable`
--

INSERT INTO `TaskTable` (`IdTask`, `Date`, `Content`, `state`, `priority`) VALUES
(1, '2018-12-04', 'Hoc react native\r\n', 1, 0),
(2, '2018-12-04', 'Hoc lap trinh android', 1, 0),
(3, '2018-12-04', 'Tin hoc dai cuong\n', 0, 1),
(4, '2018-12-04', 'Hoc cms', 1, 0),
(5, '2018-12-04', 'Hoc lap trinh web', 0, 0),
(6, '2018-12-05', 'Hoc lap trinh java', 1, 1),
(7, NULL, 'Hoc lap trinh ioss', 0, 0),
(9, NULL, 'a no chay roi kia ba con oi\n', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `NoteTable`
--
ALTER TABLE `NoteTable`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `TaskTable`
--
ALTER TABLE `TaskTable`
  ADD PRIMARY KEY (`IdTask`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `NoteTable`
--
ALTER TABLE `NoteTable`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `TaskTable`
--
ALTER TABLE `TaskTable`
  MODIFY `IdTask` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
