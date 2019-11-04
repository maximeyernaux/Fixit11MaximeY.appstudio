// LDAP (Blue) Login
// This demo app will allow you to log in a user.
// Like the SQL on it does an Ajax requestion with variables
// j_username and j_password with a POST request
// The responses are:
// 1 = Login Successful 
// 0 = Login Failed
// -1 or -2 = Error

// look at form property setFocusID - this puts 
// cursor in specified control when form is loaded




btnLogin.onclick=function(){
  req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) { //everything worked.
        lblResult.hidden = false  // none to hide
        lblResult.value = "Your LDAP return code was" + req1.responseText
        //1 good 0 bad
        if (req1.responseText == 1)
          ChangeForm(favFoods)
          
        else
          lblResult.value = "Your login or password isn't correct"
        
    } else {
        //Handle that. 
        lblResult.hidden = false  // none to hide
        lblResult.value = "Error: " + req1.status;
    }
}

btnGoToFav.onclick=function(){
  ChangeForm(favFoods)
}
