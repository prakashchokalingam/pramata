<?php 
include 'connection.php';
extract($_POST);
if($_GET['task']=="upvote")
{
 $sql=mysqli_query($con,"INSERT INTO votes VALUES('$id','upvote')");
 return true;
}
if($_GET['task']=="downvote")
{
 $sql=mysqli_query($con,"INSERT INTO votes VALUES('$id','downvote')");
 return true;
}