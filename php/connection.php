<?php
//establishing conection
$host="localhost";
$username="root";
$password="";
$database="pramata";
//connection variable

$con=mysqli_connect($host,$username,$password,$database);
if(!$con)
{
	echo "DataBase connection Failed !";
}