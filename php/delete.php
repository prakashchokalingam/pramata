<?php
include 'connection.php';
extract($_POST);
$sql=mysqli_query($con,"DELETE FROM images WHERE id='$id'");
return $true;
?>
