
 document.querySelector("form").addEventListener("submit", loginFun);

 var regdUser=JSON.parse(localStorage.getItem("signupDetail"));
   

  function loginFun(){
     event.preventDefault();

   var enteredEmail=document.querySelector("#email").value;
   var enteredPass=document.querySelector("#pass").value;
 
   if(enteredEmail=="" && enteredPass=="")
     {
        alert("Invalid Credential")
     }
   else{
        var check=false;
        for(var i=0; i<regdUser.length; i++){
            if(regdUser[i].email==enteredEmail && regdUser[i].password==enteredPass){
                check=true;
            }
        }
        if(check){
            alert("You have successfully created your account!")
            window.location.href="index.html";
        }
        else{
            alert("Sorry, we don't recognize that email. Please try again");
            document.querySelector("#email").value="";
            document.querySelector("#pass").value="";
        }
    }
}