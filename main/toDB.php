
<?php
	
	include 'connect.inc.php';
	header("Content-Type: application/json");
	
	$i = json_decode($_GET['i']);
	$name = $i->{'name'};
	$dir = "";

	function buildText($n) {
		$text = "<html>\n";
		$text .= "<head>\n";
		$text .= "<title>" . ucwords($n) . "</title>\n";
		$text .= "<link href=\"https://fonts.googleapis.com/css?family=Quicksand\" rel=\"stylesheet\">";
		$text .= "<style type=\"text/css\">\n";
		$text .= "table td {\n";
		$text .= "font-family: quicksand;";
		$text .= "font-size:30px;";
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
	
	// this is a file
	$toDir = explode(" ", $name);
	// this_is_a_file_
	if (sizeof($toDir) > 1) {
		for ($j = 0; $j < sizeof($toDir); $j++) {
			if ($j < sizeof($toDir)-1) $dir .= $toDir[$j] . '_';
			else $dir .= $toDir[$j];
		}
	} else $dir = $name;

	$arr = array();
	if (mysqli_query($con, "INSERT INTO main VALUES('', '$name', '$dir')")) {
		$arr[0] = "yes";
		mkdir('../'.$dir);
		setup($dir, $name);
	} else {
		$arr[0] = "no";
	}
	
	echo json_encode($arr);
	
?>

