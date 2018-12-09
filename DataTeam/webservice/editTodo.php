<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);

 $id = $obj["id"];
 $content = $obj["content"];
 $state = $obj["state"];
 $priority = $obj["priority"];
 
if ($content) { // update all
    $Sql_Query = "UPDATE TaskTable SET Content = '$content', state = '$state', priority = '$priority' WHERE IdTask = '$id'";
} else { // just update state
    $Sql_Query = "UPDATE TaskTable SET state = '$state' WHERE IdTask = '$id'";
}

 
 // Thực hiện câu truy vấn
 if(mysqli_query($con,$Sql_Query)){

 $MSG = 'Update success' ;  

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Update failed';
 
 }

 // Đóng cơ sở dữ liệu lại
 mysqli_close($con);
 
?>