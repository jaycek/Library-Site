function validate(){
    let name=document.getElementById("name").value;
    let email= document.getElementById("mail").value;
    let pwd=document.getElementById("pwd").value;
    let confirmpwd=document.getElementById("cpwd").value;
    let address=document.getElementById("address").value;
    let city=document.getElementById("city").value;
    let zip=document.getElementById("zip").value;
    let state= document.getElementById("state").value;
   

    console.log(state);
    console.log(pwd);
    if (name =="" ||email =="" || pwd =="" || address == "" || city == "" 
    || zip =="" || state == "Choose..." )
    {
    alert("Please enter the required fields");
    return false;
    }
    else{
        let pwdValid = validatePassword(pwd,confirmpwd);
        if (pwdValid == true)
        {
            let zipValid = validateZipcode(zip);
            if (zipValid == true)
            {
                let mailValid =  validateEmail(email);
                if (mailValid == true)
                {
                        return true
                }
                else
                {
                        return false;
                }
            }
            else
            {
                return false;
            }
        }
        else
        {
           return false; 
        }
    }

   }

   function validateZipcode(zip){
        let regexp=/^([0-9-]+)$/;
        if (regexp.test(zip))
        {
            console.log("passed zip code validation");
            return true;
        }
        else
        {
            alert(`${zip} is not a valid Zip Code`);
            console.log("Failed zip code validation");
            return false;
        }

   }
function validateEmail(email){

    
    // let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
    // let regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,4})(.[a-z]{2,4})?$/
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
        
        if(regexp.test(email))
        {
            console.log("Passed email check");
            return true;
    
        }
        else
        {
            console.log(`Failed email check for ${email}`);
            alert(`${email} is not a valid email ID`)
            return false;
        }
    
    }
    
     function validatePassword(pwd,cpwd){
        if (pwd.length < 8)  
        {
            alert("Minimum password length is 8.");
            return false;
        }
        else if(pwd.trim() != cpwd.trim()){
            alert("Passwords donot match");
            return false;
        }
        else 
        {
            return true;
        }
    }

    function checkPwdStrength(password){

        // Do not show anything when the length of password is zero.
        if (password.length === 0) {
            document.getElementById("msg").innerHTML = "";
            return;
        }
        // Create an array and push all possible values that you want in password
        var matchedCase = new Array();
        matchedCase.push("[!@#$%^&*]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates

        // Check the conditions
        var ctr = 0;
        for (var i = 0; i < matchedCase.length; i++) {
            if (new RegExp(matchedCase[i]).test(password)) {
                ctr++;
            }
        }
        // Display it
        var color = "";
        var strength = "";
        switch (ctr) {
            case 0:
            case 1:
            case 2:
                strength = "Strength:Very Weak";
                color = "red";
                break;
            case 3:
                strength = "Strength:Medium";
                color = "orange";
                break;
            case 4:
                strength = "Strength:Strong";
                color = "green";
                break;
        }
        document.getElementById("msg").innerHTML = strength;
        document.getElementById("msg").style.color = color;
}