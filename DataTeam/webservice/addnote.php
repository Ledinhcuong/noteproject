<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');


  $obj = json_decode($json,true);


 $TitleNote= $obj["TitleNote"];
 $Content = $obj["Content"];
 

  $Sql_Query = "INSERT INTO NoteTable (`TitleNote` ,  `Content` ) 
 VALUES ('$TitleNote','$Content')";
 
 // Thực hiện câu truy vấn
 if(mysqli_query($con,$Sql_Query)){

 $MSG = 'Them Ghi Chu Thanh Cong' ;  // In ra thông báo thêm thành công

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Da xuat hien loi trong luc them roi';
 
 }

 // Đóng cơ sở dữ liệu lại
 mysqli_close($con);
 
?>