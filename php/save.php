<?php
include 'connection.php';
$location=uniqid().'.jpg';
$name=$_FILES['file']['name'];
//saving file
copy($_FILES['file']['tmp_name'],"../uploaded/".$location);

//adding to database
 $x=mysqli_query($con,"INSERT INTO images VALUES('0','$name','$location')");

 if($x)
return "done";
else
echo mysqli_error($con);
?>


