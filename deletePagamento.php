<?php


$id = $_POST['id'];



$server = 'localhost';
$username = 'root';
$password = '';
$dbName = 'hotelDB';
$conn = new mysqli($server, $username, $password, $dbName);


if ($id) {
  $conn = new mysqli($server, $username, $password, $dbName);
}


$sql = "
DELETE FROM `paganti` 
WHERE `paganti`.`id` = " . $id;


$conn -> query($sql);
$conn -> close();