

var button = document.getElementById("counter");

button.onclick = function() {
    
  //create a request object
  var request = new XMLHttpRequest();
  
  
  //capture the response and store it in a variable.
  request.onreadystatechange = function () {
      if (request.readystate=== XMLHttpRequest.Done){
          //take some action
          if(request.status==200) {
             var counter= request.responseText;
              var span = document.getElementById("count");
  span.innerHTML=counter.toString();
          }
      }
      //dont do anything
  };
  
 
  //make a request
    request.open('GET','http://rusheelraj.imad.hasura-app.io/counter',true);
    request.send(null);
    
  
    
    
    
};