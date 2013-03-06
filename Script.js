//change this to initial text..
var str = null;
var clrstr = null;
var printerBusy = false;
var xmlhttp = null;
var url = "http://localhost/rbbc526/comms.php";
function serverComms()
{
	if (clrstr.length==0){ 
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
	xmlhttp.onreadystatechange=httpHandler;

	debug("Sending asynchronous HTTP GET request to " + url);
	debug("Parameter q has been set to " + clrstr);
	xmlhttp.open("GET",url+"?q="+clrstr,true);
	xmlhttp.send();
}

function httpHandler(){
	// all statuses here can be printed to the screen.
	  debug("http state = " + xmlhttp.readyState);
  	  debug("http status = " + xmlhttp.readyState);
  	  debug("http response = " + xmlhttp.response);
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	  	//this is the function which uses xmlhttp.responseText to use responses from server
	  	//change this to cute printer
	       str = xmlhttp.responseText;
	       debug("Cute printer typing<br/>" + str);
	       //more debugging
	     }

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
//clr submit
function submit(keyPress){
	//Up key pressed. Use for history..
	if(keyPress.keyCode==38){
	
	}
	//Up key pressed. Use for history..
	if(keyPress.keyCode==38){
	
	}
	//enter key pressed
	else if(keyPress.keyCode==13){
		clrstr = document.getElementById("clr").value;
		serverComms();
		//clear clr
		document.getElementById("clr").value = "";
	}

}
function debug(dump){
	       alert(unescapeHTML(escapeHTML(dump)));
}

function escapeHTML(html){
	return html.replace("<br/>","\n","g").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function unescapeHTML(html){
	return html.replace("\n","<br/>","g").replace( "&amp;","&","g").replace("&lt;","<","g").replace("&gt;",">","g");
}
function focus(inp){
	alert(inp.value);
	inp.select();
	inp.focus();
}
function focusSet(){
	focus(document.getElementById("clr"));
}
