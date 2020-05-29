<?php

header('Content-Type: application/json');


$server = 'localhost';
$username = 'root';
$password = '';
$dbName = 'hotelDB';
$conn = new mysqli($server, $username, $password, $dbName);

if ($conn -> connect_errno) {
  echo $conn -> connect_errno;
  return;
}


$sql = "
SELECT id, name, lastname, address
from paganti
";


$results = $conn -> query($sql);
$res = [];
if ($results -> num_rows > 0) {

  while($row = $results -> fetch_assoc()) {
    $res[] = $row;  
  }

  echo json_encode($res);  
} else {
  echo json_encode("0 results");
}
$conn -> close();