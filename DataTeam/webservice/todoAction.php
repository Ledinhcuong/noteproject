<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');

 $obj = json_decode($json,true);

 $id = $obj["id"];
 $content = $obj["content"];
 $state = $obj["state"];
 $priority = $obj["priority"];
 $date = $obj["date"];

 $action = $obj["action"];

 switch($action)
 {
    case "insert":
        $Sql_Query = "INSERT INTO TaskTable (`Content`, `priority`, `date`) 
                      VALUES ('$content', '$priority', '$date')";
        break;
    case "update":
        if ($content) { // update all
            $Sql_Query = "UPDATE TaskTable SET Content = '$content', state = '$state', priority = '$priority' WHERE IdTask = '$id'";
        } else { // just update state
            $Sql_Query = "UPDATE TaskTable SET state = '$state' WHERE IdTask = '$id'";
        }
        break;
    case "delete":
        $Sql_Query = "DELETE FROM TaskTable WHERE IdTask= '$id'";
        break;
    case "empty":
        $Sql_Query = "DELETE FROM TaskTable WHERE state= '1'";
        break;
    default:
        break;
 }
 

// Thực hiện câu truy vấn
if (mysqli_query($con,$Sql_Query)) {
    $MSG = 'action success' ; 
    $json = json_encode($MSG);
    echo $json ; 
} else { 
    echo 'action failed';
}

// Đóng cơ sở dữ liệu lại
mysqli_close($con);
 
?>