

<?php
include 'connection.php';
extract($_POST);
$sql=mysqli_query($con,"SELECT * FROM images WHERE name LIKE '%$val%'");
if(mysqli_affected_rows($con)==0)
{
  echo "No Results Found !";
}
else
{


echo '';
while($data=mysqli_fetch_object($sql))
//printing images
{
   $upvotesql=mysqli_query($con,"SELECT * FROM votes WHERE id='$data->id' AND type='upvote'");
   $upvote=mysqli_affected_rows($con);
    $downvotesql=mysqli_query($con,"SELECT * FROM votes WHERE id='$data->id' AND type='downvote'");
   $downvote=mysqli_affected_rows($con);
 
echo ' 
  <span id="timage">
<img src="uploaded/'.$data->location.'" border="1" id="'.$data->id.'" style="height:15%;width:15%;">
<span id="options" style="display:none">   

      <button class="btn btn-sm btn-primary" id="'.$data->id.'" onclick="upvote(this.id)"><span class="glyphicon glyphicon-thumbs-up" ></span>('.$upvote.')</button>
          <button class="btn btn-sm btn-primary" id="'.$data->id.'" onclick="downvote(this.id)"> <span class="glyphicon glyphicon-thumbs-down" >('.$downvote.')</span></button>
            <button class="btn btn-sm btn-primary" id="'.$data->id.'" onclick="deleted(this.id)"><span class="glyphicon glyphicon-trash" ></span></button>
             <button class="btn btn-sm btn-primary" id="'.$data->location.'" onclick="share(this.id)"><span class="glyphicon glyphicon-share" ></span></button>
             </span>
             </span>
             
';
}
echo '';
}