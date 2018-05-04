<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $i = json_decode($_GET['i']);
   $id = $i->{'id'};
   $arr = array();

   if (mysqli_query($con, "DELETE FROM main WHERE id=$id")) {
      $arr[0] = "yes";
   } else {
      $arr[1] = "no";
   }

   echo json_encode($arr);

?>