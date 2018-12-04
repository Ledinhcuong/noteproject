<?php 
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 

$sql = "SELECT * FROM TaskTable";

$result = $conn->query($sql);

/*
class Task
{
	var $id;
	var $date;
	var $content;
	
	function __construct($_id, $_date, $_content)
	{
		$this->id = $_id;
		$this->date = $_date;
		$this->content = $_content;
	}
}

while ($row[] = $tasks->fetch_assoc()) {
	array_push($tasks, new Task($row['IdTask'], $row['Date'], $row['Content']));
}*/

if ($result->num_rows >0) { 
	while($row[] = $result->fetch_assoc()) {
		$json = json_encode($row);
	}
} else {
 	echo "No Results Found.";
}

echo $json;

$conn->close();

 ?>