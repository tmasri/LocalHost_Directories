<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $i = json_decode($_GET['i']);
   $id = $i->{'id'};
   $name = $i->{'name'};
   $dir = $i->{'dir'};
   $arr = array();

   if ($name == "") $arr[0] = "yes";
   else {
      if (mysqli_query($con, "UPDATE main SET name='$name' WHERE id=$id")) {
         $arr[0] = "yes";
      } else {
         $arr[0] = "no";
      }
   }

   if ($account == "") $arr[1] = "yes";
   else {
      if (mysqli_query($con, "UPDATE main SET dir='$dir' WHERE id=$id")) {
         $arr[1] = "yes";
      } else {
         $arr[1] = "no";
      }
   }

   echo json_encode($arr);

?>