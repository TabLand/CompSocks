<?php
	 error_reporting(E_ALL);
	 $params = explode(" ",$_GET["q"]);

	 if(count($params)>0){
		 $hold = array_splice($params,0,1);
		 $command = strtolower($hold[0]);
	 };
	 
	 if(file_exists($command.".php")){
	 	include $command.".php";
	 }
	 else {
	 	//did you mean:?
	 	echo "\"" . $command . "\" command not found, try again";
	 }

?>
