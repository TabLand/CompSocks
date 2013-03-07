//change this to initial text..
var str = null;
var clrstr = null;
var xmlhttp = null;
var timeout = 0;
var printing = new Array();

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
	       console(str + "<br/>");
	     }
	debug("End Packet");
}

function cutePrinter(appendMode, id, queueName){
	print_ing = printing.indexOf(id);
	queue = eval(queueName);
	//threading function
        container = document.getElementById(id);
	func = "cutePrinter("+appendMode+",\""+id+"\",\""+queueName+"\")"
	if(queue.length > 0) {
		//read from start, dont modify queue
		string = queue[0];
		//if id is not being printed to, set it as printing
		if(print_ing==-1){
			printing.push(id);
		}
                container.scrollTop=debugDiv.scrollHeight;
		if(string.length > 0){
			if(appendMode){
			  container.innerHTML += string.substr(0,1);
		          //alert(func);
			}
			else{
			  container.innerHTML = string.substr(0,1);	
			}
			  string = string.substr(1,string.length-1);
  			  eval(queueName)[0] = string;
			  setTimeout(func,timeout);	
		}
		else{
			  //string is empty, modify queue
  			  eval(queueName).shift();
    			  setTimeout(func,timeout);
 			  refresh(container);
		}
	}
	else{
		//stop printing if printing
		if(print_ing!=-1){
			printing.splice(print_ing,1);
		}
	 	refresh(container);	
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
	       debugDiv = document.getElementById("debug");
	       //push at end
	       debugQueue.push(dump + "<br/>");
	       if(printing.indexOf("debug")==-1) cutePrinter(true,"debug","debugQueue");
}
function console(dump){
	       consoleDiv = document.getElementById("console");
	       //push at end
	       consoleQueue.push(dump + "<br/>");
	       if(printing.indexOf("console")==-1) cutePrinter(true,"console","consoleQueue");
}

function escapeHTML(html){
	return html.replace("<br/>","\n","g").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function unescapeHTML(html){
	return html.replace("\n","<br/>","g").replace( "&amp;","&","g").replace("&lt;","<","g").replace("&gt;",">","g");
}
function focus(inp){
	inp.select();
	inp.focus();
}
function focusSet(){
	focus(document.getElementById("clr"));
}
function refresh(container){
	container.innerHTML = unescapeHTML(container.innerHTML);
}
