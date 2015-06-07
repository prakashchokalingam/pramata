$(document).ready(function(){
//loading main function
main();
  //triggering click and upload
  $("#drop").click(function(){
     $("#image").click();
  });

  //drag and drop
   var dropbox;

dropbox = document.getElementById("drop");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
    
  e.stopPropagation();
  e.preventDefault();
}
function drop(e) {
 $("#load").show();
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
function handleFiles(files,dt)
{
      var formdata=new FormData();

   for (var i = 0; i < files.length; i++) {
    var file = files[i];
    formdata.append("file",files[i]);
    }
    $("#msg").attr('class','alert alert-danger');
$("#msg").show();
$("#msg #content").html('Please wait while your image uploading !');
        $.ajax({
            url:"php/save.php",
            type:"POST",
           data:formdata,
           processData: false,
contentType: false,
           success:function(data){
             
             //moves to main function on success
             main();
             
           },
           error:function(data)
           {
           	$("#msg").attr('class','alert alert-warning');
           	$("#msg").show();

$("#msg #content").html('Please wait while your image uploading !');
           
           }
        });

    }

// click and upload
  $(document).on("change","#image",function(){

               var formdata=new FormData();
             formdata.append('file',$('input[type=file]')[0].files[0]);
                $("#msg").attr('class','alert alert-danger');
$("#msg").show();
$("#msg #content").html('Please wait while your image uploading !');
        $.ajax({
            url:"php/save.php",
            type:"POST",
           data:formdata,
           processData: false,
contentType: false,
           success:function(data){
             
             //moves to main function on success
                      $("#msg").attr('class','alert alert-success');
$("#msg").show();
$("#msg #content").html('Image Uploaded Successfully !');
             main();
             
           },
           error:function(data)
           {
           	$("#msg").attr('class','alert alert-warning');
           	$("#msg").show();

$("#msg content").html('Please wait while your image uploading !');
           
           }
        });

         });

  //search

  $("#form").submit(function(e){
e.preventDefault();
$("#result h1").html("Search Results !");
     var val=$('#search-field').val();
     $.ajax({
       url:'php/search.php',
       method:"POST",
       data:{val:val},
       success:function(data)
       {
              
               $("#result h1").val('Search results ! ');
               $("#result h1").append('<button class="btn btn-sm btn-primary" onclick="main()">Back</button>');
               $("#result #content").html(data);
       },
       error:function(data)
       {

       }
     });
  });
       
       //image tricks
      $("body").on('mouseover','#timage',function(){
         $(this).find('#options').show();
      });
      $("body").on('mouseout','#timage',function(){
         $(this).find('#options').hide();
      });
//main function loading images

function main()
{
	$("#msg").hide();
$("#result h1").html("Uploaded Images");


  $.ajax({
           url:'php/show.php',
           method:'post',
           success:function(data)
           {
           	$("#result #content").html(data);
           }
  });
}

});
// operations
// upvote
function upvote(id)
{
  $.ajax({
           url:'php/votes.php?task=upvote',
           method:'POST',
           data:{id:id},
           success:function(data)
           {
          	alert("Upvoted !");
          	main();
           }
  });
	
}
// downvote
function downvote(id)
{
  $.ajax({
           url:'php/votes.php?task=downvote',
           method:'POST',
           data:{id:id},
           success:function(data)
           {
          	alert("Downvoted !");
          	main();
           }
  });
	
}
// delete
function deleted(id)
{
  $.ajax({
           url:'php/delete.php',
           method:'POST',
           data:{id:id},
           success:function(data)
           {
          	alert("Deleted !");
          	main();
           }
  });
	
}
//share
function share(id)
{
	var url="http://www.facebook.com/sharer/sharer.php?u=http://localhost/pramata/php/"+id;
	window.open(url,'_blank','height:500px;width:500px');
}

//main function loading images

function main()
{
$("#msg").hide();
$("#result h1").html("Uploaded Images");
  $.ajax({
           url:'php/show.php',
           method:'post',
           success:function(data)
           {
           	$("#result #content").html(data);
           }
  });
}

