<?php
	$links = array();
	$links[0] = "Home";
	$links[1] = "About Us";
	$links[2] = "Events";
	$links[3] = "Sponsors";
	$links[4] = "Contact Us";

	
	foreach($links as $link){
		echo makelink($link) . "<br/>";
	}
	
	function makelink($name){
		return '<a href="#">'.$name."</a>";
	}
?>
