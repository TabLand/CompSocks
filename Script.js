//change this to initial text..
var str = null;
var printerBusy = false;
function serverComms()
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
	// all statuses here can be printed to the screen.
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	  	//this is the function which uses xmlhttp.responseText to use responses from server
	  	//change this to cute printer
	       str = xmlhttp.responseText;
	       debug("Cute printer typing<br/>" + str);
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
//cld submit
function submit(keyPress){
	//Up key pressed. Use for history..
	if(keyPress.keyCode==38){
	
	}
	//Up key pressed. Use for history..
	if(keyPress.keyCode==38){
	
	}
	//enter key pressed
	else if(keyPress.keyCode==13){
		str = document.getElementById("cld").value;
		serverComms();
		//clear cld
		document.getElementById("cld").value = "";
		//send to server
		
	}

}
function String escapeHTML(html){
	return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function String unescapeHTML(html){
	return html.replace( "&amp;",/&/g).replace("&lt;",/</g).replace("&gt;",/>/g);
}
