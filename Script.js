function serverComms(str)
{
	if (str.length==0){ 
	  //nothing sent to server
	  // no action
	  return;
	}
	  //creating XML object..
	if (window.XMLHttpRequest){
	// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	       document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
	     }
	  }
}
	xmlhttp.open("GET","comms.php?q="+str,true);
	xmlhttp.send();
}
