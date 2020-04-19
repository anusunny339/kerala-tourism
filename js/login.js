function login()
{
 var username=document.getElementById("email");
 var password=document.getElementById("password");
 let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(regexp.test(username.value)){
        error1.innerHTML="valid email id";
        error1.style.color="green";
        username.style.border="2px solid rgb(43, 107, 226)";
         
        if(password.value.length>=8)
        {
        if(password.value.length>5)
        {
       
        if(password.value == username.value) {
            alert("Error: Password must be different from Username!");
            password.focus();
            password.style.border="2px solid red";
             return false;
            }
  
            re = /[0-9]/;
            if(!re.test(password.value)) {
             alert("Error: password must contain at least one number (0-9)!");
             password.focus();
             password.style.border="2px solid red";
             return false;
            }
            re = /[a-z]/;
            if(!re.test(password.value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            password.focus();
            password.style.border="2px solid red";
            return false;
           }
            re = /[A-Z]/;
           if(!re.test(password.value)) {
           alert("Error: password must contain at least one uppercase letter (A-Z)!");
           password.focus();
           password.style.border="2px solid red";
            return false;
        
           } 
           
             password.style.border="2px solid rgb(43, 107, 226)";
    
        password.style.border="2px solid rgb(43, 107, 226)";
        return true;
       
      }
      else{
      
      
       
      
        if(password.value == username.value) {
          alert("Error: Password must be different from Username!");
          password.focus();
          password.style.border="2px solid red";
          return false;
          
        }
  
        re = /[0-9]/;
        if(!re.test(password.value)) {
          alert("Error: password must contain at least one number (0-9)!");
          password.focus();
          password.style.border="2px solid red";
          return false;
          
        }
        re = /[a-z]/;
        if(!re.test(password.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          password.focus();
          password.style.border="2px solid red";
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(password.value)) {
          alert("Error: password must contain at least one uppercase letter (A-Z)!");
          password.focus();
          password.style.border="2px solid red";
          return false;
         
        } 
        
        
  
      } 
      password.style.border="2px solid red";
    }
    else{
      alert("password must contain 8 characters with at least one uppercase and lowercase,must contain at least one number");
      password.focus();
      password.style.border="2px solid red";
      return false;
    }
        return true; 
    }
   
   else{
      error1.innerHTML="Invalid email id";
      error1.style.color="red";
      username.style.border="2px solid red";
      username.focus();
      return false;
   }
   
}