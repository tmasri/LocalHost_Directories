<?php

   $test = "this is a file";
   $toDir = explode(" ", $test);
   $test = "";
   
   for ($j = 0; $j < sizeof($toDir); $j++) {
      $test .= $toDir[$j] .'_';
   }
   
   $toDir2 = explode("_", $test);
   for ($j = 0; $j < sizeof($toDir2)-1; $j++) {
      echo $toDir2[$j].'_';
   }

?>