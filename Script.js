//change this to initial text..
var str = null;
var clrstr = null;
var xmlhttp = null;
var timeout = 1;
printing = new Array("test");
var printSpeed = 1;
var url = "http://localhost/rbbc526/comms.php";
var debugQueue = new Array();
var consoleQueue = new Array();

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

	  //bug
  	  if(xmlhttp.response.length < 1){
  	  	response = "No valid response";
  	  }
  	  else {
  	  	response = xmlhttp.response;
  	  }
	// all statuses here can be printed to the debug screen.
	  debug("------------------------------------------------------\nStart Packet");
	  debug("http{state=" + xmlhttp.readyState + ",status=" + xmlhttp.readyState + "}");
  	  debug("http.response = " + response);
  	  
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	  	//this is the function which uses xmlhttp.responseText to use responses from server
	  	//change this to cute printer
	       str = xmlhttp.responseText;
       	       //more debugging
	       debug("Cute printer typing: " + str);
	       console(str + "\n");
	     }
	debug("End Packet");
}

function cutePrinter(appendMode, id, queueName){
	queue = eval(queueName);
	//threading function
        container = document.getElementById(id);
	//if id is not being printed to, set it as printing      
	for(j=0;j<queue.length;j=j+1) {
		//read from start, dont modify queue
		string = queue[j];

                container.scrollTop=debugDiv.scrollHeight;
		for(i=0;i<string.length;i+=printSpeed){
			if(i+printSpeed > string.length){
				printSpeed = string.length -i;
			}
			if(appendMode){
			  container.innerHTML += string.substr(i,printSpeed);
			}
			else{
			  container.innerHTML = string.substr(i,printSpeed);	
			}
  			  eval(queueName)[0] = string;
		}
	}
	//stop printing if printing
	printing.splice(printing.indexOf(id),1);
	refresh(container);
	refresh(container);
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
	       debugDiv = document.getElementById("debug");
	       //push at end
	       debugQueue.push(dump + "\n");
	       if(printing.indexOf("debug")==-1){
	       		cutePrinter(true,"debug","debugQueue");
	   		if(printing.indexOf("debug")==-1){
				printing.push("debug");
			}  
	       		//alert("started debug printer" + printing);
	       }
}
function console(dump){
	       consoleDiv = document.getElementById("console");
	       //push at end
	       consoleQueue.push(dump + "\n");
	       if(printing.indexOf("console")==-1){
	       		 cutePrinter(true,"console","consoleQueue");
	       		 if(printing.indexOf("console")==-1){
				printing.push("console");
			 } 
 	       		 //alert("started console printer" + printing);
	       }
}

function escapeHTML(html){
	return html.replace("<br/>","\n","g");
	//.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function unescapeHTML(html){
	return html.replace("\n","<br/>","g");
	//.replace( "&amp;","&","g").replace("&lt;","<","g").replace("&gt;",">","g");
}
function focus(inp){
	inp.select();
	inp.focus();
}
function focusSet(){
	focus(document.getElementById("clr"));
}
function configure(){
	focusSet();
	clrstr = "init";
	serverComms();	
	refresh(document.getElementById("console"));
}
function load(){
	setTimeout("configure()",500);
}
function refresh(container){
	container.innerHTML = unescapeHTML(container.innerHTML);
	//alert(container.innerHTML);
}
