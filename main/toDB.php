
<?php
	
	include 'connect.inc.php';
	header("Content-Type: application/json");
	
	$i = json_decode($_GET['i']);
	$name = $i->{'name'};
	$dir = "";
	
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
		mkdir('../'.$dir, 770);
	} else {
		$arr[0] = "no";
	}
	
	echo json_encode($arr);
	
?>

