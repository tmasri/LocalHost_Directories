<?php

function buildText($n) {
   $text = "<html>\n";
   $text .= "<head>\n";
   $text .= "<title>" . ucwords($n) . "</title>\n";
   $text .= "<link href=\"https://fonts.googleapis.com/css?family=Quicksand\" rel=\"stylesheet\">";
   $text .= "<style type=\"text/css\">\n";
   $text .= "table td {\n";
   $text .= "font-family: quicksand;";
   $text .= "font-size:50px;";
   $text .= "}";
   $text .= "</style>\n";
   $text .= "</head>\n";
   $text .= "<body>\n";
   $text .= "<table style=\"width: 100%; height: 100%;\">\n";
   $text .= "<tr>\n";
   $text .= "<td>\n";
   $text .= "<center>\n";
   $text .= ucwords($n) . "\n";
   $text .= "</center>\n";
   $text .= "</td>\n";
   $text .= "</tr>\n";
   $text .= "</table>\n";
   $text .= "</body>\n";
   $text .= "</html>";

   return $text;

}

function setup($d, $n) {

   $file = fopen('../'.$d.'/index.html', 'w');
   fwrite($file, buildText($n));
   fclose($file);

}

?>