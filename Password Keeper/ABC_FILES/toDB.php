
<?php
	
	include 'connect.inc.php';
	header("Content-Type: application/json");
	
	$i = json_decode($_GET['i']);
	$name = $i->{'name'};
	$account = $i->{'account'};
	$email = $i->{'email'};
	$pass = $i->{'password'};
	
	$arr = array();
	if (mysqli_query($con, "INSERT INTO pass VALUES('', '$name', '$account', '$email', '$pass')")) {
		$arr[0] = "yes";
	} else {
		$arr[0] = "no";
	}
	
	echo json_encode($arr);
	
?>

