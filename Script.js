//change this to initial text..
var str = null;
var printerBusy = false;
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
	  	//this is the function which uses xmlhttp.responseText to use responses from server
	  	//change this to cute printer
	       document.getElementById("console").innerHTML=xmlhttp.responseText;
	     }
	  }
	xmlhttp.open("GET","comms.php?q="+str,true);
	xmlhttp.send();
}

function cutePrinter(appendMode){
	if(str.length > 0){
		  printerBusy = true;
		if(appendMode){
		  document.getElementById("console").innerHTML += str.substr(0,1);
  		  str = str.substr(1,str.length-1);
		  setTimeout("cutePrinter("+appendMode+")",timeout);	  
		}
		else{
		  document.getElementById("console").innerHTML = str.substr(0,1);
  		  str = str.substr(1,str.length-1);
  		  setTimeout("cutePrinter("+true+")",timeout);
		}
	}
	else{
 		printerBusy = false;
	}
}
