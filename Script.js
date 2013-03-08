//change this to initial text..
var str = null;
var clrstr = null;
var xmlhttp = null;
var timeout = 5;
printing = new Array('test');
var printSpeed = 1;
var url = 'http://localhost/rbbc526/comms.php';
var debugQueue = '';
var consoleQueue = '';

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
	  xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange=httpHandler;

	debug('------------------------------------------------------<br/>Sending asynchronous HTTP GET request to ' + url);
	debug('Parameter q has been set to ' + clrstr);
	xmlhttp.open('GET',url+'?q='+clrstr,true);
	xmlhttp.send();
}

function httpHandler(){

	  //bug
  	  if(xmlhttp.response.length < 1){
  	  	response = 'No valid response';
  	  }
  	  else {
  	  	response = xmlhttp.response;
  	  }
	// all statuses here can be printed to the debug screen.
	  debug('------------------------------------------------------<br/>Start Packet');
	  debug('http{state=' + xmlhttp.readyState + ',status=' + xmlhttp.readyState + '}');
  	  debug('http.response = ' + response);
  	  
	  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	  	//this is the function which uses xmlhttp.responseText to use responses from server
	  	//change this to cute printer
	       str = xmlhttp.responseText;
       	       //more debugging
	       debug('Cute printer typing: ' + str);
	       console(str + '<br/>');
	     }
	debug('End Packet');
}

function cutePrinter(appendMode, id, stringName){

	//threading function
        container = document.getElementById(id);
	string = eval(stringName);    
        container.scrollTop=debugDiv.scrollHeight;
        printSpeed = Math.ceil(string.length/timeout)+1;
	if(printSpeed > string.length){
	     printSpeed = string.length;
	}
	if(appendMode){
	     container.innerHTML += string.substr(0,printSpeed);
	}
	else{
	     container.innerHTML = string.substr(0,printSpeed);	
	}
	string = string.substr(printSpeed);
	strfunc = stringName +'=\'' + string+'\';';
	eval(strfunc);
	func = 'cutePrinter('+appendMode+',\''+id+'\',\''+stringName+'\')';
	//alert(string + 'woah');
	
	if(string.length>0){
		setTimeout(func, timeout);
	}
	else{
		//refresh at end of cycle
		refresh(id);
		//alert("refreshing "+id);
		//stop printing if printing
		printing.splice(printing.indexOf(id),1);
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
		clrstr = document.getElementById('clr').value;
		serverComms();
		//clear clr
		document.getElementById('clr').value = '';
	}

}
function console(dump){

	       consoleDiv = document.getElementById('console');
	       //push at end
	       consoleQueue = consoleQueue + escapeHTML( dump + "<br/>");
       	       //alert(consoleQueue);
	       if(printing.indexOf('console')==-1){
	       		 cutePrinter(true,'console','consoleQueue');
	       		 if(printing.indexOf('console')==-1){
				printing.push('console');
			 } 
	       }
}

function debug(dump){

	       debugDiv = document.getElementById('debug');
	       //push at end
	       debugQueue =  debugQueue + escapeHTML(dump + "<br/>");
	       if(printing.indexOf('debug')==-1){
	       		cutePrinter(true,'debug','debugQueue');
	   		if(printing.indexOf('debug')==-1){
				printing.push('debug');
			}  

	       }
}


function escapeHTML(html){
//	html = html.replace(/<br\/>/gi, "\n");
	html = escape(html);
	return String(html);
}
function unescapeHTML(html){
	html = unescape(html);
//	html = html.replace(/\\n/gi,/<br\/>/);
	return String(html);
}
function focus(inp){
	inp.select();
	inp.focus();
}
function focusSet(){
	focus(document.getElementById('clr'));
}
function configure(){
	focusSet();
	clrstr = 'init';
	serverComms();	
}
function load(){
	setTimeout('configure()',500);
}
function refresh(id){
	div = document.getElementById(id);
	div.innerHTML = unescapeHTML(div.innerHTML);
        div.scrollTop=debugDiv.scrollHeight;
}
