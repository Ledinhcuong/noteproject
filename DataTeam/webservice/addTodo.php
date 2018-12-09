<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);

 $Content = $obj["Content"];

 $Sql_Query = "INSERT INTO TaskTable (`Content`) 
 VALUES ('$Content')";
 
 // Thực hiện câu truy vấn
 $res = mysqli_query($con,$Sql_Query);
 if ($res) {
    $MSG = 'added success' ;  // In ra thông báo thêm thành công
    $json = json_encode($MSG);
    echo $json ; 
 } else { 
    echo $res;
 }

 // Đóng cơ sở dữ liệu lại
 mysqli_close($con);
 
?>