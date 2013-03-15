<?php
	echo "<pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;
&nbsp;&nbsp;&nbsp;)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(()/(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;/(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;(&nbsp;/(&nbsp;
&nbsp;(((_)&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`&nbsp;&nbsp;)&nbsp;&nbsp;&nbsp;/(_))&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;)\())&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))\&nbsp;&nbsp;)\())
&nbsp;)\___&nbsp;&nbsp;&nbsp;)\&nbsp;&nbsp;&nbsp;&nbsp;)\&nbsp;&nbsp;'&nbsp;/(/(&nbsp;&nbsp;(_)_)&nbsp;&nbsp;)\&nbsp;&nbsp;&nbsp;)\&nbsp;(__)\&nbsp;&nbsp;&nbsp;)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\&nbsp;)&nbsp;&nbsp;/((_)(_))/&nbsp;
&nbsp;&nbsp;/&nbsp;__|&nbsp;___&nbsp;&nbsp;____))&nbsp;(__)_\&nbsp;/&nbsp;__|&nbsp;_(_)&nbsp;_(_)|&nbsp;|/_/&nbsp;(__)&nbsp;&nbsp;&nbsp;&nbsp;_(_/(&nbsp;(_))&nbsp;&nbsp;|&nbsp;|_&nbsp;&nbsp;
&nbsp;|&nbsp;(__&nbsp;/&nbsp;_&nbsp;\|&nbsp;'&nbsp;&nbsp;\()|&nbsp;'_&nbsp;\)\__&nbsp;\/&nbsp;_&nbsp;\/&nbsp;_|&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;(_-<&nbsp;_&nbsp;|&nbsp;'&nbsp;\))/&nbsp;-_)&nbsp;|&nbsp;&nbsp;_|&nbsp;
&nbsp;&nbsp;\___|\___/|_|_|_|&nbsp;|&nbsp;.__/&nbsp;|___/\___/\__|&nbsp;|_|\_\&nbsp;/__/(_)|_||_|&nbsp;\___|&nbsp;&nbsp;\__|&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|_|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</pre>";
	echo "Welcome, visitor " . visitorCount() . " to the City University LSU Computing Society Website.<br/>Here at CompSocks, we believe in simplicity, and 1 dimensional experiences.<br/>Therefore this webpage does not contain any clickable links (though there might be a hack for that).<br/>Please type <a id=\"help\" href=\"#\">help</a> for help (followed by a carriage return).";
		
function visitorCount(){
	@$value = unpack('H*', $_SERVER['REMOTE_ADDR']);
	return substr(base_convert($value[1], 16, 2),0,8);
}
?>
