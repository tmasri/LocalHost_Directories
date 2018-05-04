<?php

   include 'connect.inc.php';
   header("Content-Type: application/json");

   $arr = array();
   $i = 0;
   $check = mysqli_query($con, "SELECT * FROM main");
   $num = mysqli_num_rows($check);
   if ($num == 0) {
      $arr[0] = "no";
   } else {
      while ($get = mysqli_fetch_assoc($check)) {
         $id = $get['id'];
         $name = $get['name'];
         $dir = $get['dir'];

         $arr[$i] = $id . '--tm--' . $name . '--tm--' . $dir;
         $i++;

      }
   }

   echo json_encode($arr);

?>