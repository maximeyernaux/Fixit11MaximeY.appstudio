let forms = ["Login","Favorite Foods","Dessert Voting","Describe Me","Favorite Exercises"]


hmbMenu.onclick=function(s){

hmbMenu.clear()

for(i=0;i<forms.length;i++){
    
    hmbMenu.addItem(forms[i])
  }

  if (typeof(s) == "object") 
    return
    
switch(s) {
case "Login":
    ChangeForm(loginCU)
    break
case "Favorite Foods":
    ChangeForm(favFoods)
    break
case "Dessert Voting":
    ChangeForm(dessertVoting)
    break
    
case "Describe Me":
    ChangeForm(describeYou)
    break
    
case "Favorite Exercises":
    ChangeForm(favExercises)
    break
    
}
}


