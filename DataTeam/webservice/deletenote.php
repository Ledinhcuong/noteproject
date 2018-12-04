<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');


 $obj = json_decode($json,true);

 $IdNote = $obj["IdNote"];

 

  $Sql_Query = "DELETE FROM NoteTable WHERE Id= '$IdNote'";
 
 // Thực hiện câu truy vấn
 if(mysqli_query($con,$Sql_Query)){

 $MSG = 'Xoa ghi chu thanh cong' ;  // In ra thông báo nếu xóa thành công!

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Delete_Error';   // In thông báo nếu xóa thất bại
 
 }

 // Đóng cơ sở dữ liệu lại
 mysqli_close($con);
 
?>