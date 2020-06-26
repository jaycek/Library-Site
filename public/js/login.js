function validate(){
    let uname= document.getElementById("uname").value;
    let pwd=document.getElementById("pwd").value;

    
    if (email =="" || pwd =="")
    {
    alert("Please enter emailID and password");
    return false;
    }
    else{
        return true;
    }

   }


    
    