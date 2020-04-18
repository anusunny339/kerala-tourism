var username=document.getElementById("email");
 var password=document.getElementById("password");
 var error1=document.getElementById("error1");
 var error2=document.getElementById("error2");
 

function log()
{
 
let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(regexp.test(username.value)){
        error1.innerHTML="valid email id";
        error1.style.color="green";
   
        if(password.value.length>=5)
        {
       
         if(password.value != cpassword.value)
          {
            alert("Error: Password and confirm password not match!");
        
             return false;
           }
    
          if(password.value == username.value) {
          alert("Error: Password must be different from Username!");
        
           return false;
          }

          re = /[0-9]/;
          if(!re.test(password.value)) {
           alert("Error: password must contain at least one number (0-9)!");
        
           return false;
          }
          re = /[a-z]/;
          if(!re.test(password.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
        
          return false;
         }
          re = /[A-Z]/;
         if(!re.test(password.value)) {
         alert("Error: password must contain at least one uppercase letter (A-Z)!");
        
          return false;
      
         } 
      error2.innerHTML="password  is strong";
      error2.style.color="green";
      return true;
     
    }
    else{
    
    
      if(password.value !=  cpassword.value)
      {
        alert("Error: Password and confirm password not match!");
        
        return false;
      }
    
      if(password.value == username.value) {
        alert("Error: Password must be different from Username!");
        return false;
        
      }

      re = /[0-9]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        return false;
        
      }
      re = /[a-z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        return false;
        
      
      } 
      error2.innerHTML="password  is weak";
      error2.style.color="red";
       password.style.border="2px solid red";
      return true;

    }  
}
 else{
    error1.innerHTML="Invalid email id";
    error1.style.color="red";
    
    return false;
 }
}

function passcheck()
{

    if(password.value.length>=5)
    {
    
    if(password.value == username.value) {
        alert("Error: Password must be different from Username!");
        password.focus();
        return false;
      }

      re = /[0-9]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        password.focus();
        return false;
      }
      re = /[a-z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        password.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        password.focus();
        return false;
       
      } 
      error2.innerHTML="password  is strong";
      error2.style.color="green";
      return true;
   
    }
   else{
    
    
      if(password.value == username.value) {
        alert("Error: Password must be different from Username!");
        password.focus();
        return false;
        
      }

      re = /[0-9]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one number (0-9)!");
        password.focus();
        return false;
        
      }
      re = /[a-z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one lowercase letter (a-z)!");
        password.focus();
        return false;
      }
      re = /[A-Z]/;
      if(!re.test(password.value)) {
        alert("Error: password must contain at least one uppercase letter (A-Z)!");
        password.focus();
        return false;
        
      
      } 
     error2.innerHTML="password  is weak";
     error2.style.color="red";
     password.style.border="2px solid red";
     return true;

    }  
}


function cpasscheck()
{
    if(password.value != cpassword.value)
    {
        alert("Error: Password and confirm password not match!");
        cpassword.value="";
        cpassword.focus();
        return false;
    }  
}

function checkemail()
{
    let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


 
 if(regexp.test(username.value)){
    error1.innerHTML="valid email id";
    error1.style.color="green";
   
 }
 else{
    error1.innerHTML="Invalid email id";
    error1.style.color="red";
    
    username.focus();
 }
}

function phonecheck()
{
    var phone=document.getElementById("phone");
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(phone.value.match(phoneno))
        {
       return true;
        }
      else
        {
        alert("invalid phone no");
        return false;
        phone.focus();
        }
}