<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $i = json_decode($_GET['i']);
   $id = $i->{'id'};
   $arr = array();

   $check = mysqli_query($con, "SELECT * FROM main WHERE id=$id");
   $get = mysqli_fetch_assoc($check);
   $dir = $get['dir'];

   if (mysqli_query($con, "DELETE FROM main WHERE id=$id")) {
      $arr[0] = "yes";
      rename('../'.$dir, '../delete-'.$id);
   } else {
      $arr[1] = "no";
   }

   echo json_encode($arr);

?>