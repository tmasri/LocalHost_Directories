<?php

   include 'connect.inc.php';
   header('Content-Type: application/json');

   $i = json_decode($_GET['i']);
   $id = $i->{'id'};
   $name = $i->{'name'};
   $dir = "";
   $arr = array();

   $check = mysqli_query($con, "SELECT * FROM main WHERE id=$id");
   $get = mysqli_fetch_assoc($check);
   $oldDir = $get['dir'];

   if ($name == "") $arr[0] = "yes";
   else {
      if (mysqli_query($con, "UPDATE main SET name='$name' WHERE id=$id")) {
         $arr[0] = "yes";
      } else {
         $arr[0] = "no";
      }
   }

   // this is a file
	$toDir = explode(" ", $name);
	// this_is_a_file_
	if (sizeof($toDir) > 1) {
		for ($j = 0; $j < sizeof($toDir); $j++) {
			if ($j < sizeof($toDir)-1) $dir .= $toDir[$j] . '_';
			else $dir .= $toDir[$j];
		}
	} else $dir = $name;

   if ($dir == "") $arr[1] = "yes";
   else {
      if (mysqli_query($con, "UPDATE main SET dir='$dir' WHERE id=$id")) {
         $arr[1] = "yes";
         rename('../'.$oldDir, '../'.$dir);
      } else {
         $arr[1] = "no";
      }
   }

   echo json_encode($arr);

?>