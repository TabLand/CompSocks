<?php
	echo "Welcome, visitor " . visitorCount() . " to the City University LSU Computing Society Website.<br/>Here at CompSocks, we believe in simplicity, and 1 dimensional experiences.<br/>Therefore this webpage does not contain any clickable links (though there might be a hack for that).<br/>Please type <a id=\"help\" href=\"#\">help</a> for help (followed by a carriage return).";
		
function visitorCount(){
	@$value = unpack('H*', $_SERVER['REMOTE_ADDR']);
	return substr(base_convert($value[1], 16, 2),0,8);
}
?>
