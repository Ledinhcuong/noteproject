<?php
include 'DBConfig.php';
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$json = file_get_contents('php://input');


$obj = json_decode($json,true);

$IdNote = $obj["IdNote"];
$TitleNote= $obj["TitleNote"];
$Content = $obj["Content"];

  // Viết câu truy vấn
$Sql_Query = "UPDATE NoteTable SET TitleNote = '$TitleNote', Content = '$Content' WHERE Id = '$IdNote'";

 // Thực hiện câu truy vấn
if(mysqli_query($con,$Sql_Query)){

 $MSG = 'Sua Ghi Chu Thanh Cong' ;  // In ra thông báo thêm thành công

 $json = json_encode($MSG);
 echo $json ; 
}
else{
	
	echo 'Da_xuat_hien_loi_trong_luc_sua_roi ';
	
}

 // Đóng cơ sở dữ liệu lại
mysqli_close($con);

?>