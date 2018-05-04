<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $arr = array();
   $i = 0;

   $check = mysqli_query($con, "SELECT * FROM pass");
   $num = mysqli_num_rows($check);

   if ($num == 0) {
      $arr[0] = "no";
   } else {
      while ($get = mysqli_fetch_assoc($check)) {
         $name = $get['name'];
         $account = $get['account'];
         $email = $get['email'];
         $pass = $get['password'];

         $arr[$i] = $name . '--tm--' . $account . '--tm--' . $email . '--tm--' . $pass;
         $i++;

      }
   }

   echo json_encode($arr);

?>