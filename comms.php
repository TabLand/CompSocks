<?php
	 $file = $_GET["q"].".php";
	 if(file_exists($file)){
	 	include $file;
	 }
	 else {
	 	//did you mean:?
	 	echo "\"" . $_GET["q"] . "\" command not found, try again";
	 }

?>
