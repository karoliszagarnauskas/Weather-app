<?php
$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "clothes";

$connection = mysqli_connect($dbServername,$dbUsername,$dbPassword,$dbName);

if (!$connection) {
die("Connection failed: " .mysqli_connect_error());
}
// else {
//   echo "connected";
// }
