

document.querySelector("form").addEventListener("submit",signupFun)

    var userData=JSON.parse(localStorage.getItem("signupDetail"))||[];

    function signupFun(){
        event.preventDefault()
        
        userObj={
            name:document.querySelector("#name").value,
            contact:document.querySelector("#contact").value,
            email:document.querySelector("#email").value,
            password:document.querySelector("#pass").value,
            
        };

        for(var key in userObj){
            //console.log(key,userObj[key]);
            if(userObj[key]==""){
                //console.log("invalid");
                alert("Invalid Credential, Try Again");
                break;
            }
            else{
                alert("Registraion Successfull");
                window.location.href="login.html";
                break;
            }
        }
       userData.push(userObj);
       localStorage.setItem("signupDetail",JSON.stringify(userData))
       
    };