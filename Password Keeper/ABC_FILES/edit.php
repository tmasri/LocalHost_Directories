<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $i = json_decode($_GET['i']);
   $id = $i->{'id'};
   $name = $i->{'name'};
   $account = $i->{'account'};
   $email = $i->{'email'};
   $pass = $i->{'password'};
   $arr = array();

   if ($name == "") $arr[0] = "yes";
   else {
      if (mysqli_query($con, "UPDATE pass SET name='$name' WHERE id=$id")) {
         $arr[0] = "yes";
      } else {
         $arr[0] = "no";
      }
   }

   if ($account == "") $arr[1] = "yes";
   else {
      if (mysqli_query($con, "UPDATE pass SET account='$account' WHERE id=$id")) {
         $arr[1] = "yes";
      } else {
         $arr[1] = "no";
      }
   }

   if ($email == "") $arr[2] = "yes";
   else {
      if (mysqli_query($con, "UPDATE pass SET email='$email' WHERE id=$id")) {
         $arr[2] = "yes";
      } else {
         $arr[2] = "no";
      }
   }

   if ($pass == "") $arr[3] = "yes";
   else {
      if (mysqli_query($con, "UPDATE pass SET password='$pass' WHERE id=$id")) {
         $arr[3] = "yes";
      } else {
         $arr[3] = "no";
      }
   }

   echo json_encode($arr);

?>