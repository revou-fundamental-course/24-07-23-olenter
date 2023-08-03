var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("imgview");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

function validateform(){  
  var name=document.myform.name.value;  
  var email=document.myform.email.value;  
    
  if (name==null || name==""){  
    alert("Name can't be blank");  
    return false;  
  }else (email==null || email=="");{  
    alert("Email can't be blank");  
    return false;  
    }  
  }